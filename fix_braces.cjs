const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

// Count opening vs closing braces to find if we're missing one
let opens = 0;
let closes = 0;
for (const ch of css) {
    if (ch === '{') opens++;
    if (ch === '}') closes++;
}

console.log('Opening braces:', opens);
console.log('Closing braces:', closes);
console.log('Missing:', opens - closes);

if (opens > closes) {
    // Add the missing closing braces
    const missing = opens - closes;
    for (let i = 0; i < missing; i++) {
        css += '\n}\n';
    }
    fs.writeFileSync('src/index.css', css);
    console.log('Added', missing, 'closing brace(s)');
}
