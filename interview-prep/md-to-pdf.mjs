#!/usr/bin/env node
// One-off: wrap marked HTML output in a styled page and invoke generate-pdf.mjs
import { execSync } from 'child_process';
import { readFileSync, writeFileSync, unlinkSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const [,, inputMd, outputPdf] = process.argv;
if (!inputMd || !outputPdf) {
  console.error('Usage: node md-to-pdf.mjs <input.md> <output.pdf>');
  process.exit(1);
}

const mdPath = resolve(inputMd);
const pdfPath = resolve(outputPdf);
const htmlPath = mdPath.replace(/\.md$/, '.html');

const bodyHtml = execSync(`npx marked --gfm -i "${mdPath}"`).toString();

const page = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    font-size: 13px;
    line-height: 1.6;
    color: #1a1a1a;
    max-width: 860px;
    margin: 0 auto;
  }
  h1 { font-size: 22px; margin-bottom: 4px; border-bottom: 2px solid #1a1a1a; padding-bottom: 6px; }
  h2 { font-size: 17px; margin-top: 28px; margin-bottom: 6px; border-bottom: 1px solid #ddd; padding-bottom: 4px; }
  h3 { font-size: 14px; margin-top: 18px; margin-bottom: 4px; color: #333; }
  h4 { font-size: 13px; margin-top: 14px; margin-bottom: 2px; }
  p { margin: 6px 0; }
  ul, ol { margin: 6px 0; padding-left: 22px; }
  li { margin: 3px 0; }
  code {
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
    font-size: 11.5px;
    background: #f3f4f6;
    border: 1px solid #e2e4e8;
    border-radius: 3px;
    padding: 1px 5px;
  }
  pre {
    background: #f6f8fa;
    border: 1px solid #e2e4e8;
    border-radius: 5px;
    padding: 12px 14px;
    overflow: auto;
    margin: 8px 0;
  }
  pre code {
    background: none;
    border: none;
    padding: 0;
    font-size: 11px;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    margin: 10px 0;
    font-size: 12px;
  }
  th {
    background: #f0f0f0;
    font-weight: 600;
    text-align: left;
    padding: 6px 10px;
    border: 1px solid #ccc;
  }
  td {
    padding: 5px 10px;
    border: 1px solid #ddd;
    vertical-align: top;
  }
  tr:nth-child(even) td { background: #fafafa; }
  blockquote {
    border-left: 3px solid #ccc;
    margin: 8px 0;
    padding: 4px 14px;
    color: #555;
  }
  hr { border: none; border-top: 1px solid #e0e0e0; margin: 20px 0; }
  a { color: #0969da; }
  strong { font-weight: 600; }
  .page-break { page-break-after: always; }
</style>
</head>
<body>
${bodyHtml}
</body>
</html>`;

writeFileSync(htmlPath, page);
console.log(`HTML written to ${htmlPath}`);

try {
  execSync(`node "${resolve(__dirname, '..', 'generate-pdf.mjs')}" "${htmlPath}" "${pdfPath}"`, {
    stdio: 'inherit',
  });
} finally {
  unlinkSync(htmlPath);
}
