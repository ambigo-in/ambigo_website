const fs = require('fs');
let css = fs.readFileSync('all_live_css.css', 'utf8');

// 1. Remove banner.png
css = css.replace(/background-image:\s*url\((["']?)\.\/banner\.png\1\);?/g, '');

// 2. Move imports to top
const imports = [];
css = css.replace(/@import\s+url\([^)]+\);?/g, (match) => {
  imports.push(match);
  return '';
});

css = imports.join('\n') + '\n' + css;
fs.writeFileSync('src/index.css', css);
console.log('Successfully applied all live CSS and fixed imports');
