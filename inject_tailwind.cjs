const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');
if (!css.includes('@import "tailwindcss";')) {
    fs.writeFileSync('src/index.css', '@import "tailwindcss";\n' + css);
    console.log('Tailwind imported');
} else {
    console.log('Tailwind already imported');
}
