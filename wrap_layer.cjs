const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');
let lines = css.split('\n');

// Extract the first 3 lines (imports)
const imports = lines.slice(0, 3).join('\n');
// Everything after line 3 is old CSS
const oldCss = lines.slice(3).join('\n');

// Wrap old CSS in @layer base so Tailwind utilities always win
const newCss = `${imports}

@layer base {
${oldCss}
}
`;

fs.writeFileSync('src/index.css', newCss);
console.log('Done! Old CSS wrapped in @layer base');
