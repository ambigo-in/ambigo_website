const fs = require('fs');
let lines = fs.readFileSync('src/index.css', 'utf8').split('\n');

let twIdx = -1;
let interIdx = -1;
let poppinsIdx = -1;

for (let i = 0; i < 10; i++) {
    if (lines[i] && lines[i].includes('@import "tailwindcss"')) twIdx = i;
    if (lines[i] && lines[i].includes('Inter:wght')) interIdx = i;
    if (lines[i] && lines[i].includes('Poppins:wght')) poppinsIdx = i;
}

if (twIdx !== -1 && interIdx !== -1 && poppinsIdx !== -1) {
    let twLine = lines[twIdx];
    let interLine = lines[interIdx];
    let poppinsLine = lines[poppinsIdx];
    
    // Set them in the correct order
    lines[twIdx] = interLine;
    lines[interIdx] = poppinsLine;
    lines[poppinsIdx] = twLine;
    
    fs.writeFileSync('src/index.css', lines.join('\n'));
    console.log('Fixed imports order');
} else {
    console.log('Could not find all imports');
}
