const fs = require('fs');
const zlib = require('zlib');

const buf = fs.readFileSync('public/Arpit_Khameshra_Resume_2026.pdf');

// Find all stream...endstream sections
const streamMarker = Buffer.from('stream\r\n');
const streamMarker2 = Buffer.from('stream\n');
const endMarker = Buffer.from('endstream');

let pos = 0;
const allText = [];

while (pos < buf.length) {
  let start = buf.indexOf(streamMarker, pos);
  let offset = 8;
  if (start === -1) {
    start = buf.indexOf(streamMarker2, pos);
    offset = 7;
  }
  if (start === -1) break;
  
  const dataStart = start + offset;
  const end = buf.indexOf(endMarker, dataStart);
  if (end === -1) break;
  
  const data = buf.subarray(dataStart, end);
  
  try {
    const decoded = zlib.inflateSync(data);
    const text = decoded.toString('latin1');
    // Extract text from PDF text operators - look for Tj and TJ operators
    const tjMatches = text.match(/\(([^)]*)\)/g);
    if (tjMatches) {
      const readable = tjMatches
        .map(m => m.slice(1, -1))
        .filter(s => s.length > 0)
        .join('');
      if (readable.trim().length > 0 && /[a-zA-Z]/.test(readable)) {
        allText.push(readable);
      }
    }
  } catch (e) {
    // Not a compressed stream, try raw
    try {
      const text = data.toString('latin1');
      const tjMatches = text.match(/\(([^)]*)\)/g);
      if (tjMatches) {
        const readable = tjMatches
          .map(m => m.slice(1, -1))
          .filter(s => s.length > 0)
          .join('');
        if (readable.trim().length > 0 && /[a-zA-Z]/.test(readable)) {
          allText.push(readable);
        }
      }
    } catch (e2) {}
  }
  
  pos = end + 9;
}

console.log(allText.join('\n'));
