const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src', 'index.css');
let css = fs.readFileSync(cssPath, 'utf8');

const tailwindDirectives = `
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap");
@import "tailwindcss";

@theme {
  --font-poppins: 'Poppins', sans-serif;
  --font-inter: 'Inter', sans-serif;
  --color-brand-orange: #FF8C42;
  --color-brand-orange-dark: #E67A35;
  --color-brand-blue: #2563EB;
  --color-brand-navy: #0F172A;
  --color-section-grey: #F4F7FA;
}

`;

// Strip out any existing imports from the top (usually there are a few google font imports)
const lines = css.split('\n');
const imports = [];
const rest = [];
let inImports = true;
for (let line of lines) {
    if (inImports && line.trim().startsWith('@import')) {
        imports.push(line);
    } else {
        if (line.trim() !== '') {
            inImports = false;
        }
        rest.push(line);
    }
}

const finalCss = tailwindDirectives + imports.join('\n') + '\n\n@layer base {\n' + rest.join('\n') + '\n}\n';

fs.writeFileSync(cssPath, finalCss);
console.log('index.css successfully wrapped in @layer base and prepended with Tailwind directives.');
