const fs = require('fs');
const path = require('path');

function getJpegDimensionsAndOrientation(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    let offset = 0;
    if (buffer.readUInt16BE(0) !== 0xFFD8) {
      return { error: 'Not a JPEG' };
    }
    offset += 2;
    let orientation = null;
    let width = 0;
    let height = 0;

    while (offset < buffer.length) {
      const marker = buffer.readUInt16BE(offset);
      offset += 2;
      if (marker === 0xFFD9) break; // EOI
      const length = buffer.readUInt16BE(offset);
      
      if (marker === 0xFFE1) { // APP1 EXIF
        const exifHeader = buffer.toString('ascii', offset + 2, offset + 6);
        if (exifHeader === 'Exif') {
          const tiffOffset = offset + 8;
          const isLittleEndian = buffer.toString('ascii', tiffOffset, tiffOffset + 2) === 'II';
          const readUInt16 = (pos) => isLittleEndian ? buffer.readUInt16LE(pos) : buffer.readUInt16BE(pos);
          const readUInt32 = (pos) => isLittleEndian ? buffer.readUInt32LE(pos) : buffer.readUInt32BE(pos);
          
          const ifd0Offset = tiffOffset + readUInt32(tiffOffset + 4);
          const numEntries = readUInt16(ifd0Offset);
          for (let i = 0; i < numEntries; i++) {
            const entryOffset = ifd0Offset + 2 + i * 12;
            const tag = readUInt16(entryOffset);
            if (tag === 0x0112) { // Orientation
              orientation = readUInt16(entryOffset + 8);
            }
          }
        }
      } else if ((marker >= 0xFFC0 && marker <= 0xFFC3) || (marker >= 0xFFC5 && marker <= 0xFFC7) || (marker >= 0xFFC9 && marker <= 0xFFCB) || (marker >= 0xFFCD && marker <= 0xFFCF)) {
        height = buffer.readUInt16BE(offset + 3);
        width = buffer.readUInt16BE(offset + 5);
      }
      offset += length;
    }
    return { width, height, orientation };
  } catch (err) {
    return { error: err.message };
  }
}

// Check studio 3.jpg
console.log('studio/3.jpg:', getJpegDimensionsAndOrientation('public/photos/studio/3.jpg'));

// Let's check all photos in public/photos
function scanDir(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const f of files) {
    const fullPath = path.join(dir, f.name);
    if (f.isDirectory()) {
      scanDir(fullPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(f.name)) {
      const info = getJpegDimensionsAndOrientation(fullPath);
      if (info.orientation && info.orientation !== 1) {
        console.log('HAS EXIF ORIENTATION != 1:', fullPath, info);
      }
    }
  }
}

scanDir('public/photos');
