const fs = require('fs');
const code = fs.readFileSync('D:/Ambigo/server/static/assets/index-DfkHHAUK.js', 'utf8');
const routes = code.match(/path:\s*["'](\/[^"']*)["']/g);
console.log('Routes via path:', [...new Set(routes)]);

// Also search for react-router or Navigate components
const navs = code.match(/to:\s*["'](\/[^"']*)["']/g);
console.log('Links to:', [...new Set(navs)]);

// Search for any string starting with / and no spaces, at least 3 chars
const strings = code.match(/["'](\/[a-zA-Z0-9_\-\/]+)["']/g);
console.log('Possible route strings:', [...new Set(strings)].filter(s => !s.includes('.js') && !s.includes('.css') && !s.includes('.png') && !s.includes('.jpg') && !s.includes('.svg') && !s.includes('.webp') && !s.includes('.JPG')));
