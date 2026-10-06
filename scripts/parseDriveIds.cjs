const fs = require('fs');

const content = fs.readFileSync('C:/Users/ramya/.gemini/antigravity-ide/brain/aed18349-10dc-47a0-8d5c-304f7934f26b/.system_generated/steps/35/content.md', 'utf8');

const videoNames = [
  'Bride teaser.mov',
  'CHITHANYA+VYSHALI WEDDING TEASER.mp4',
  'DIVYA+KARTHIK WEDDING TEASER.mp4',
  'final main teaser.mp4',
  'Groom teaser 01.mp4',
  'hamsa halfsaree.mp4',
  'hamsa mangalasnanam.mp4',
  'hamsa sangeet making.mp4',
  'Navya Sai Reception.mp4',
  'navya SaiWedding teaser.mp4',
  'Post wedding song.mp4',
  'PRATHYSHA+TEJA WEDDING TEASER.mp4',
  'Prathyusha haldi and sangeet teaser.mp4',
  'PRE WEDDING SONG -2.mp4',
  'Preeshoot 2.mov',
  'PRIYANKA+AKHIL WEDDING TEASER.mp4',
  'Reception teaser-.mp4',
  'Sai Sri`s Bride teaser.mp4'
];

const results = [];

for (const name of videoNames) {
  const idx = content.indexOf(name);
  if (idx !== -1) {
    // Look backwards and forwards around idx to find 33-char Drive ID or similar
    const snippet = content.substring(Math.max(0, idx - 500), Math.min(content.length, idx + 500));
    // Drive IDs are typically 28-44 chars of [a-zA-Z0-9_-]
    const idMatches = [...snippet.matchAll(/["']([a-zA-Z0-9_-]{28,45})["']/g)].map(m => m[1]);
    results.push({
      name,
      idMatches,
      snippet: snippet.replace(/\s+/g, ' ')
    });
  }
}

fs.writeFileSync('scripts/driveVideos.json', JSON.stringify(results, null, 2));
console.log('Processed', results.length, 'videos');
for (const r of results) {
  console.log(r.name, '-> potential IDs:', r.idMatches);
}
