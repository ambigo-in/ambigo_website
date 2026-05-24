const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const routes = [
  '/',
  '/AboutUs',
  '/contactus',
  '/login',
  '/individual',
  '/training',
  '/blogs',
  '/enterprise',
  '/hospital',
  '/terms',
  '/firstaid',
  '/ourteam',
  '/Careers'
];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const outputDir = path.join(__dirname, 'scraped_html');
  
  if (!fs.existsSync(outputDir)){
      fs.mkdirSync(outputDir);
  }

  for (const route of routes) {
    console.log(`Scraping ${route}...`);
    // The server is running on http://localhost:8000
    // Because it's a static server, /AboutUs might return 404 if not configured for SPA
    // Let's check if we can scrape the live site instead!
    const url = `https://ambigoin.netlify.app${route}`;
    await page.goto(url, { waitUntil: 'networkidle0' });
    
    // Wait for the root element to be populated
    await page.waitForSelector('#root > *');
    
    const html = await page.evaluate(() => {
      const root = document.getElementById('root');
      return root ? root.innerHTML : '';
    });
    
    const safeName = route === '/' ? 'Home' : route.replace(/\//g, '_');
    fs.writeFileSync(path.join(outputDir, `${safeName}.html`), html);
    console.log(`Saved ${safeName}.html`);
  }

  await browser.close();
  console.log('Done.');
})();
