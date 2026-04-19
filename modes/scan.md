# Modo: scan — Portal Scanner (Descubrimiento de Ofertas)

Escanea portales de empleo configurados, filtra por relevancia de título, y añade nuevas ofertas al pipeline para evaluación posterior.

> **Nota (v1.5+):** El escáner por defecto (`scan.mjs` / `npm run scan`) es **zero-token** y sólo consulta directamente las APIs públicas de Greenhouse, Ashby y Lever. Los niveles con Playwright/WebSearch descritos abajo son el flujo **agente** (ejecutado por Claude/Codex), no lo que hace `scan.mjs`. Si una empresa no tiene API Greenhouse/Ashby/Lever, `scan.mjs` la ignorará; para esos casos, el agente debe completar manualmente el Nivel 1 (Playwright) o Nivel 3 (WebSearch).

## Ejecución recomendada

Ejecutar como subagente para no consumir contexto del main:

```
Agent(
    subagent_type="general-purpose",
    prompt="[contenido de este archivo + datos específicos]",
    run_in_background=True
)
```

## Configuración

Leer `portals.yml` que contiene:
- `search_queries`: Lista de queries WebSearch con `site:` filters por portal (descubrimiento amplio)
- `tracked_companies`: Empresas específicas con `careers_url` para navegación directa
- `title_filter`: Keywords positive/negative/seniority_boost para filtrado de títulos
- `company_filter`: Empresas y keywords de empresa bloqueadas — aplicar a TODOS los resultados (API + WebSearch)

## IMPORTANTE: Usar el script zero-token primero

`scan.mjs` es un script Node.js que hace las llamadas a APIs de Greenhouse, Ashby y Lever directamente — sin tokens de Claude. **Siempre ejecutarlo primero:**

```bash
node scan.mjs
```

Este script cubre automáticamente TODAS las empresas en `tracked_companies` cuya `careers_url` tenga un patrón ATS reconocible:
- URLs con `job-boards.greenhouse.io` o `boards.greenhouse.io` → Greenhouse API
- URLs con `jobs.ashbyhq.com` → Ashby API
- URLs con `jobs.lever.co` → Lever API
- Empresas con campo `api:` explícito → usa esa URL directamente

El script aplica `title_filter`, deduplica contra `scan-history.tsv` + `pipeline.md` + `applications.md`, y escribe los resultados directamente. **No repetir estas llamadas a API con herramientas de IA.**

## REGLA ESTRICTA: No duplicar trabajo del script

**Después de `node scan.mjs`, el agente de IA NO debe ejecutar WebSearch para ninguna empresa que el script ya haya cubierto.** El script cubre automáticamente todas las empresas en `tracked_companies` con un patrón ATS reconocible (Greenhouse, Ashby, Lever). Hacer WebSearch sobre las mismas empresas duplica trabajo y gasta tokens innecesariamente.

**El agente de IA solo debe hacer WebSearch en estos dos casos:**
1. Empresas en `tracked_companies` con `scan_method: websearch` explícito y `enabled: true`
2. Las queries de descubrimiento definidas en `search_queries` con `enabled: true`

Ningún otro WebSearch está permitido durante el scan.

## Estrategia de descubrimiento (lo que el script NO cubre)

Después de `node scan.mjs`, el agente de IA solo necesita cubrir lo que el script no puede:

### Nivel 1 — Empresas con `scan_method: websearch`

Empresas en `tracked_companies` con `scan_method: websearch` no tienen un patrón ATS reconocible y son ignoradas por el script. Para cada una con `enabled: true`, ejecutar su `scan_query` con WebSearch y extraer título + URL + empresa de los resultados.

### Nivel 2 — WebSearch queries (DESCUBRIMIENTO AMPLIO)

Los `search_queries` con `site:` filters cubren portales de forma transversal. Útil para descubrir empresas NUEVAS que aún no están en `tracked_companies`, pero los resultados pueden estar desfasados.

## Workflow

1. **Ejecutar el scanner zero-token**: `node scan.mjs`
   - Lee el output para saber cuántas empresas escaneó y qué encontró
   - El script ya actualiza `pipeline.md` y `scan-history.tsv`

2. **Leer configuración**: `portals.yml` → identificar empresas con `scan_method: websearch` y `enabled: true`

3. **Leer historial actualizado**: `data/scan-history.tsv` → URLs ya vistas (incluye lo que acaba de añadir el script)

4. **Leer dedup sources**: `data/applications.md` + `data/pipeline.md`

5. **Nivel 1 — WebSearch para empresas con scan_method: websearch** (paralelo):
   Para cada empresa con `scan_method: websearch` y `enabled: true`:
   a. Ejecutar WebSearch con su `scan_query`
   b. Extraer `{title, url, company}` de los resultados
   c. Acumular en lista de candidatos

6. **Nivel 2 — WebSearch queries** (paralelo si posible):
   Para cada query en `search_queries` con `enabled: true`:
   a. Ejecutar WebSearch con el `query` definido
   b. De cada resultado extraer: `{title, url, company}`
      - **title**: del título del resultado (antes del " @ " o " | ")
      - **url**: URL del resultado
      - **company**: después del " @ " en el título, o extraer del dominio/path
   c. Acumular en lista de candidatos (dedup con Nivel 1)

7. **Filtrar por título y empresa** usando `portals.yml`:
   - **title_filter**: Al menos 1 keyword de `positive` debe aparecer en el título (case-insensitive); 0 de `negative`
   - **company_filter**: Descartar si el nombre de empresa coincide exactamente con `blocked_names` O contiene algún keyword de `blocked_keywords` (case-insensitive). Registrar como `skipped_blocked`.

8. **Deduplicar** contra 3 fuentes:
   - `scan-history.tsv` → URL exacta ya vista
   - `applications.md` → empresa + rol normalizado ya evaluado
   - `pipeline.md` → URL exacta ya en pendientes o procesadas

8.5. **Verificar liveness de resultados de WebSearch** — ANTES de añadir a pipeline:

   Los resultados de WebSearch pueden estar desactualizados (Google cachea resultados durante semanas o meses). Para evitar evaluar ofertas expiradas, verificar con Playwright cada URL nueva que provenga de WebSearch. Los resultados del script `scan.mjs` son en tiempo real y no requieren verificación.

   Para cada URL nueva de WebSearch (secuencial — NUNCA Playwright en paralelo):
   a. `browser_navigate` a la URL
   b. `browser_snapshot` para leer el contenido
   c. Clasificar:
      - **Activa**: título del puesto visible + descripción del rol + control visible de Apply/Submit/Solicitar dentro del contenido principal. No contar texto genérico de header/navbar/footer.
      - **Expirada** (cualquiera de estas señales):
        - URL final contiene `?error=true` (Greenhouse redirige así cuando la oferta está cerrada)
        - Página contiene: "job no longer available" / "no longer open" / "position has been filled" / "this job has expired" / "page not found"
        - Solo navbar y footer visibles, sin contenido JD (contenido < ~300 chars)
   d. Si expirada: registrar en `scan-history.tsv` con status `skipped_expired` y descartar
   e. Si activa: continuar al paso 9

   **No interrumpir el scan entero si una URL falla.** Si `browser_navigate` da error (timeout, 403, etc.), marcar como `skipped_expired` y continuar con la siguiente.

9. **Para cada oferta nueva verificada que pase filtros**:
   a. Añadir a `pipeline.md` sección "Pendientes": `- [ ] {url} | {company} | {title}`
   b. Registrar en `scan-history.tsv`: `{url}\t{date}\t{query_name}\t{title}\t{company}\tadded`

10. **Ofertas filtradas por título**: registrar en `scan-history.tsv` con status `skipped_title`
11. **Ofertas bloqueadas por empresa**: registrar con status `skipped_blocked`
12. **Ofertas duplicadas**: registrar con status `skipped_dup`
13. **Ofertas expiradas (WebSearch)**: registrar con status `skipped_expired`

## Extracción de título y empresa de WebSearch results

Los resultados de WebSearch vienen en formato: `"Job Title @ Company"` o `"Job Title | Company"` o `"Job Title — Company"`.

Patrones de extracción por portal:
- **Ashby**: `"Senior AI PM (Remote) @ EverAI"` → title: `Senior AI PM`, company: `EverAI`
- **Greenhouse**: `"AI Engineer at Anthropic"` → title: `AI Engineer`, company: `Anthropic`
- **Lever**: `"Product Manager - AI @ Temporal"` → title: `Product Manager - AI`, company: `Temporal`

Regex genérico: `(.+?)(?:\s*[@|—–-]\s*|\s+at\s+)(.+?)$`

## URLs privadas

Si se encuentra una URL no accesible públicamente:
1. Guardar el JD en `jds/{company}-{role-slug}.md`
2. Añadir a pipeline.md como: `- [ ] local:jds/{company}-{role-slug}.md | {company} | {title}`

## Scan History

`data/scan-history.tsv` trackea TODAS las URLs vistas:

```
url	first_seen	portal	title	company	status
https://...	2026-02-10	Ashby — AI PM	PM AI	Acme	added
https://...	2026-02-10	Greenhouse — SA	Junior Dev	BigCo	skipped_title
https://...	2026-02-10	Ashby — AI PM	SA AI	OldCo	skipped_dup
https://...	2026-02-10	WebSearch — AI PM	PM AI	ClosedCo	skipped_expired
```

## Resumen de salida

```
Portal Scan — {YYYY-MM-DD}
━━━━━━━━━━━━━━━━━━━━━━━━━━
Script (scan.mjs):   N empresas escaneadas, N nuevas añadidas
WebSearch companies: N empresas con scan_method: websearch
WebSearch queries:   N queries de descubrimiento
Total revisadas:     N
Duplicadas:          N (ya evaluadas o en pipeline)
Expiradas:           N (links muertos — WebSearch)
Nuevas añadidas a pipeline.md: N (script) + N (IA) = N total

  + {company} | {title} | {fuente}
  ...

→ Ejecuta /career-ops pipeline para evaluar las nuevas ofertas.
```

## Gestión de careers_url

Cada empresa en `tracked_companies` debe tener `careers_url` — la URL directa a su página de ofertas. Esto evita buscarlo cada vez.

**REGLA: Usa siempre la URL corporativa de la empresa; recurre al endpoint ATS solo si no existe página corporativa propia.**

El `careers_url` debe apuntar a la página de empleo propia de la empresa siempre que esté disponible. Muchas empresas usan Workday, Greenhouse o Lever por debajo, pero exponen los IDs de las vacantes solo a través de su dominio corporativo. Usar la URL ATS directa cuando existe una página corporativa puede causar falsos errores 410 porque los IDs de los puestos no coinciden.

| ✅ Correcto (corporativa) | ❌ Incorrecto como primera opción (ATS directo) |
|---|---|
| `https://careers.mastercard.com` | `https://mastercard.wd1.myworkdayjobs.com` |
| `https://openai.com/careers` | `https://job-boards.greenhouse.io/openai` |
| `https://stripe.com/jobs` | `https://jobs.lever.co/stripe` |

Fallback: si solo tienes la URL ATS directa, navega primero al sitio web de la empresa y localiza su página corporativa de empleo. Usa la URL ATS directa únicamente si la empresa no tiene página corporativa propia.

**Patrones conocidos por plataforma:**
- **Ashby:** `https://jobs.ashbyhq.com/{slug}`
- **Greenhouse:** `https://job-boards.greenhouse.io/{slug}` o `https://job-boards.eu.greenhouse.io/{slug}`
- **Lever:** `https://jobs.lever.co/{slug}`
- **BambooHR:** lista `https://{company}.bamboohr.com/careers/list`; detalle `https://{company}.bamboohr.com/careers/{id}/detail`
- **Teamtailor:** `https://{company}.teamtailor.com/jobs`
- **Workday:** `https://{company}.{shard}.myworkdayjobs.com/{site}`
- **Custom:** La URL propia de la empresa (ej: `https://openai.com/careers`)

**Patrones de API/feed por plataforma:**
- **Ashby API:** `https://jobs.ashbyhq.com/api/non-user-graphql?op=ApiJobBoardWithTeams`
- **BambooHR API:** lista `https://{company}.bamboohr.com/careers/list`; detalle `https://{company}.bamboohr.com/careers/{id}/detail` (`result.jobOpening`)
- **Lever API:** `https://api.lever.co/v0/postings/{company}?mode=json`
- **Teamtailor RSS:** `https://{company}.teamtailor.com/jobs.rss`
- **Workday API:** `https://{company}.{shard}.myworkdayjobs.com/wday/cxs/{company}/{site}/jobs`

**Si `careers_url` no existe** para una empresa:
1. Intentar el patrón de su plataforma conocida
2. Si falla, hacer un WebSearch rápido: `"{company}" careers jobs`
3. Navegar con Playwright para confirmar que funciona
4. **Guardar la URL encontrada en portals.yml** para futuros scans

**Si `careers_url` devuelve 404 o redirect:**
1. Anotar en el resumen de salida
2. Intentar scan_query como fallback
3. Marcar para actualización manual

## Mantenimiento del portals.yml

- **SIEMPRE guardar `careers_url`** cuando se añade una empresa nueva
- Añadir nuevos queries según se descubran portales o roles interesantes
- Desactivar queries con `enabled: false` si generan demasiado ruido
- Ajustar keywords de filtrado según evolucionen los roles target
- Añadir empresas a `tracked_companies` cuando interese seguirlas de cerca
- Verificar `careers_url` periódicamente — las empresas cambian de plataforma ATS
