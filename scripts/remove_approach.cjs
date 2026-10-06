const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/ramya/Downloads/freelancer/sai-krishna-premium/src/pages/services';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx')).map(f => path.join(dir, f));

// Also include the layout if it exists
files.push('c:/Users/ramya/Downloads/freelancer/sai-krishna-premium/src/layouts/ServiceDetailLayout.jsx');

files.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    const regex = /<section className="bg-brand-dark py-24 max-w-4xl mx-auto px-6 text-center">\s*<h2[^>]*>The Approach<\/h2>[\s\S]*?<\/section>/g;
    const newContent = content.replace(regex, '');
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Updated ${filePath}`);
    }
  }
});
