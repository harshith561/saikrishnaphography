const fs = require('fs');

const content = fs.readFileSync('C:/Users/ramya/.gemini/antigravity-ide/brain/aed18349-10dc-47a0-8d5c-304f7934f26b/.system_generated/steps/35/content.md', 'utf8');

console.log('Total length:', content.length);

// Search for any file names or strings in JS data
const fileMatches = [];
const regex = /\["([a-zA-Z0-9_-]{25,})",\["([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
  fileMatches.push({ id: match[1], name: match[2] });
}
console.log('Matches with ID & name:', fileMatches);

// Search for all strings ending in common video/audio/photo extensions or words
const extRegex = /"([^"\\]+\.(?:mp4|mov|avi|mkv|webm|jpg|jpeg|png))"/gi;
const foundExts = new Set();
while ((match = extRegex.exec(content)) !== null) {
  foundExts.add(match[1]);
}
console.log('Extensions found:', Array.from(foundExts));

// Search for drive item titles
const titleRegex = /data-id="([a-zA-Z0-9_-]+)"[^>]*aria-label="([^"]+)"/g;
while ((match = titleRegex.exec(content)) !== null) {
  console.log('Aria match:', match[1], match[2]);
}

// Search for drive items in DS data
const dsRegex = /\["([a-zA-Z0-9_-]{25,})","([^"]+)"/g;
const items2 = [];
while ((match = dsRegex.exec(content)) !== null) {
  if (!match[2].includes('http') && !match[2].includes('{') && match[2].length < 100) {
    items2.push({ id: match[1], name: match[2] });
  }
}
console.log('DS items sample (first 20):', items2.slice(0, 20));
