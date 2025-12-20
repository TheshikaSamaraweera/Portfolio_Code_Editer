import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pdfParse = require('pdf-parse');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all PDF paths from command line arguments
const pdfPaths = process.argv.slice(2);
const outputPath = path.join(__dirname, '../src/data/portfolioContext.js');

if (pdfPaths.length === 0) {
    console.error('Please provide path(s) to PDF file(s).');
    console.log('Usage: node scripts/convertPdf.js <pdf1> <pdf2> <pdf3> ...');
    console.log('Example: node scripts/convertPdf.js "CV_SE.pdf" "CV_AI.pdf" "Intern_CV.pdf"');
    process.exit(1);
}

async function parsePdf(filePath) {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    return data.text.replace(/\s+/g, ' ').trim();
}

async function convertMultiplePdfs() {
    try {
        console.log(`📄 Processing ${pdfPaths.length} PDF file(s)...`);

        // Parse all PDFs and merge their content
        const allCvTexts = [];
        for (const pdfPath of pdfPaths) {
            console.log(`  → Reading: ${pdfPath}`);
            const text = await parsePdf(pdfPath);
            const fileName = path.basename(pdfPath, '.pdf');
            allCvTexts.push(`--- ${fileName.toUpperCase()} ---\n${text}`);
        }

        const mergedCvText = allCvTexts.join('\n\n');

        // Create comprehensive context with merged CVs + Website info
        const fullContext = `
=== CV / RESUME CONTENT ===
${mergedCvText}

=== ABOUT THIS WEBSITE ===
This is Theshika Samaraweera's interactive portfolio designed to look and feel like Visual Studio Code (VS Code). It's a unique, developer-themed portfolio that showcases professionalism and technical creativity.

Website Theme: VS Code / IDE style with dark mode, syntax highlighting colors, and code-like aesthetics.
Built with: React, Tailwind CSS, Framer Motion, and Vite.

=== WEBSITE SECTIONS (HOW TO NAVIGATE) ===

Users can navigate the website in TWO ways:

1. SIDEBAR NAVIGATION (like VS Code file explorer):
   - Click on any .jsx file in the left sidebar to open it as a tab
   - Files open at the top as tabs, just like in VS Code
   - Click the × on tabs to close them

2. TERMINAL NAVIGATION (like a real terminal):
   - Open the terminal from the bottom bar
   - Use commands like: pwd, ls, ls -la, cd .., code about.jsx, clear, help

=== AVAILABLE PAGES/FILES ===

• about.jsx → About page with developer's background, introduction, experience timeline, and social links. Users can learn who Theshika is, his professional summary, and download his resume.

• skills.jsx → Complete tech stack and technical skills organized by categories (Programming Languages, Backend, Frontend, AI/ML, Databases, DevOps, Architecture).

• projects.jsx → GitHub projects and open-source contributions. Shows repositories and coding work.

• my_projects.jsx → Featured portfolio projects with detailed descriptions and demos.

• certificates.jsx → Professional certifications and credentials earned.

• achievements.jsx → Accomplishments, awards, and notable achievements.

• articles.jsx → Published articles and blog posts, mainly on Medium.

• contact.jsx → Contact form to get in touch. Shows email, phone, and location. Users can send messages directly.

• README.jsx → A welcome/introduction page explaining how to use the portfolio website.

=== PRO TIPS FOR USERS ===
- Use ↑/↓ arrow keys in terminal to navigate command history
- Drag the terminal resize handle for better view
- Type "code about.jsx" in terminal to open files
- Press Ctrl+C in terminal to cancel current input
- There's an AI chatbot (that's me!) to answer questions about Theshika

=== CHATBOT INSTRUCTIONS ===
You are a helpful AI assistant for Theshika's portfolio website. When answering questions:
- Be concise, professional, and friendly
- Use the CV/Resume content above to answer questions about education, experience, skills, projects, etc.
- Guide users to the appropriate page for more details
- If asked about contact info, check the CV for email/phone
- If asked about availability, mention he is "Open for work"
- If you don't know something specific, suggest they contact Theshika directly
`;

        // Escape backticks in the content
        const escapedContext = fullContext.replace(/`/g, '\\`').replace(/\$/g, '\\$');
        const fileContent = `export const portfolioContext = \`${escapedContext}\`;
`;

        fs.writeFileSync(outputPath, fileContent);
        console.log(`\n✅ Success! ${pdfPaths.length} PDF(s) merged with website context.`);
        console.log(`📁 Saved to: ${outputPath}`);
        console.log('🔄 Changes will hot-reload automatically.');
    } catch (err) {
        console.error('❌ Error parsing PDF:', err.message);
    }
}

convertMultiplePdfs();
