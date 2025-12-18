
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pdfParse = require('pdf-parse');
const pdf = pdfParse.default || pdfParse;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = process.argv[2];
const outputPath = path.join(__dirname, '../src/data/portfolioContext.js');

if (!inputPath) {
    console.error('Please provide a path to the PDF file.');
    console.log('Usage: node scripts/convertPdf.js <path-to-pdf>');
    process.exit(1);
}

const dataBuffer = fs.readFileSync(inputPath);

pdf(dataBuffer).then(function (data) {
    // clean up text
    const cleanText = JSON.stringify(data.text);

    const fileContent = `export const portfolioContext = ${cleanText};`;

    fs.writeFileSync(outputPath, fileContent);
    console.log(`Success! PDF converted and saved to ${outputPath}`);
    console.log('Restart your dev server to verify changes.');
}).catch(err => {
    console.error('Error parsing PDF:', err);
});
