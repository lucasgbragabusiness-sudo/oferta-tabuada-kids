const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const start = html.indexOf('<div id="upgradeModal"');
const end = html.indexOf('<!-- ===', start);
console.log('--- MODAL HTML ---');
console.log(html.substring(start, end));

console.log('--- MODAL CSS ---');
const styleStart = html.indexOf('.modal-overlay {');
const styleEnd = html.indexOf('/* TABLETS E TELAS', styleStart);
console.log(html.substring(styleStart, styleEnd));
