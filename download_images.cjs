const fs = require('fs');
const path = require('path');
const https = require('https');

const t = fs.readFileSync('src/pages/Home.tsx', 'utf8');
const imgs = [...t.matchAll(/<img[^>]*src="([^"]+)"[^>]*>/g)].map(m => m[1]);

const missing = imgs.filter(src => {
  const file = src.startsWith('/') ? src.slice(1) : src;
  return !src.startsWith('http') && !fs.existsSync(path.join('public', file));
});

console.log('Missing images:', missing);

missing.forEach(src => {
  const file = src.startsWith('/') ? src.slice(1) : src;
  const fileUrl = 'https://ambigoin.netlify.app/' + file;
  
  https.get(fileUrl, res => {
    if (res.statusCode === 200) {
      const fileStream = fs.createWriteStream(path.join('public', file));
      res.pipe(fileStream);
      fileStream.on('finish', () => console.log('Downloaded', file));
    } else {
      console.log('Failed to download', file, res.statusCode);
    }
  }).on('error', err => console.error('Error downloading', file, err.message));
});
