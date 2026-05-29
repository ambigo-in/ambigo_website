const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'scraped_html');
const outDir = path.join(__dirname, 'src', 'pages');

const files = fs.readdirSync(dir).filter(f => (f.startsWith('_') || f === 'Home.html') && f.endsWith('.html'));

const toCamelCase = (str) => {
  if (str.startsWith('--')) return str;
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
};

const styleToObject = (styleStr) => {
  const obj = {};
  styleStr.split(';').forEach(s => {
    if (!s.trim()) return;
    const colonIndex = s.indexOf(':');
    if (colonIndex !== -1) {
      const key = s.substring(0, colonIndex).trim();
      const val = s.substring(colonIndex + 1).trim();
      obj[toCamelCase(key)] = val;
    }
  });
  // Return the inner part of style={{...}}
  return JSON.stringify(obj);
};

for (const file of files) {
  let html = fs.readFileSync(path.join(dir, file), 'utf8');
  
  // Remove nav
  let navStart = html.indexOf('<nav');
  let navEnd = html.indexOf('</nav>');
  if (navStart !== -1 && navEnd !== -1) html = html.slice(0, navStart) + html.slice(navEnd + 6);
  
  // Remove footer
  let footerStart = html.indexOf('<footer');
  let footerEnd = html.indexOf('</footer>');
  if (footerStart !== -1 && footerEnd !== -1) html = html.slice(0, footerStart) + html.slice(footerEnd + 9);
  
  // Replace class= with className=
  html = html.replace(/class="/g, 'className="');
  html = html.replace(/for="/g, 'htmlFor="');
  html = html.replace(/activeclassname="/g, 'activeClassName="');
  html = html.replace(/stroke-width="/g, 'strokeWidth="');
  html = html.replace(/stroke-linecap="/g, 'strokeLinecap="');
  html = html.replace(/stroke-linejoin="/g, 'strokeLinejoin="');
  html = html.replace(/fill-rule="/g, 'fillRule="');
  html = html.replace(/clip-rule="/g, 'clipRule="');
  html = html.replace(/viewbox="/gi, 'viewBox="');
  html = html.replace(/xmlns:xlink="/g, 'xmlnsXlink="');
  html = html.replace(/required=""/g, 'required');
  html = html.replace(/required="required"/g, 'required');
  html = html.replace(/disabled=""/g, 'disabled');
  html = html.replace(/disabled="disabled"/g, 'disabled');
  html = html.replace(/readonly=""/g, 'readOnly');
  html = html.replace(/readonly="readonly"/g, 'readOnly');
  html = html.replace(/checked=""/g, 'defaultChecked');
  html = html.replace(/checked="checked"/g, 'defaultChecked');
  
  // Handle <style> tags for React
  html = html.replace(/<style>([\s\S]*?)<\/style>/gi, (match, cssContent) => {
    const safeCss = cssContent.replace(/`/g, '\\`').replace(/\$/g, '\\$');
    return `<style dangerouslySetInnerHTML={{__html: \`${safeCss}\`}} />`;
  });
  
  // Fix rows="4"
  html = html.replace(/rows="(\d+)"/g, 'rows={$1}');
  
  // Self close void tags
  html = html.replace(/<(img|input|br|hr|meta|link)([^>]*?)>/gi, (match, tag, attrs) => {
    if (attrs.trim().endsWith('/')) return match;
    return `<${tag}${attrs} />`;
  });

  // Convert inline styles
  html = html.replace(/style="([^"]*)"/gi, (match, styleStr) => {
    return `style={${styleToObject(styleStr)} as any}`;
  });

  const componentName = file.replace('_', '').replace('.html', '');
  const capitalized = componentName.charAt(0).toUpperCase() + componentName.slice(1);
  
  const reactCode = `const ${capitalized} = () => {
  return (
    <>
      ${html}
    </>
  );
};

export default ${capitalized};
`;

  fs.writeFileSync(path.join(outDir, `${capitalized}.tsx`), reactCode);
  console.log(`Generated ${capitalized}.tsx`);
}
