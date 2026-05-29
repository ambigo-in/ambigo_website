const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let fixedCount = 0;

for (const file of files) {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('"background":"black"')) {
        const original = content;
        // Remove the background:"black" from inline styles but keep marginTop
        content = content.replace(/\{"marginTop":"80px","background":"black"\}/g, '{"marginTop":"80px"}');
        
        if (content !== original) {
            fs.writeFileSync(filePath, content);
            console.log('Fixed:', file);
            fixedCount++;
        }
    }
}

console.log(`\nTotal files fixed: ${fixedCount}`);
