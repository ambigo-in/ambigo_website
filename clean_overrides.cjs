const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

// Remove all the override blocks we appended (Production Design Override and everything after)
const markers = [
    '/* =========================================================================\n   Production Design Override',
    '/* =========================================================================\n   Modern Aesthetics Override',
];

for (const marker of markers) {
    const idx = css.indexOf(marker);
    if (idx !== -1) {
        // Find the end of @layer base { ... } wrapping
        // We need to strip this content but keep the closing brace of @layer base
        // Actually, let's strip the override block from inside the layer
        css = css.substring(0, idx);
        console.log('Stripped override block starting at:', idx);
    }
}

// Now ensure the @layer base closing brace is at the end
// Check if we still have the closing brace
if (!css.trimEnd().endsWith('}')) {
    css = css + '\n}\n';
    console.log('Re-added @layer base closing brace');
}

fs.writeFileSync('src/index.css', css);
console.log('Done! Cleaned CSS overrides');
