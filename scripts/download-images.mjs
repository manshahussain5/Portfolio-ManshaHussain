import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetDir = path.join(__dirname, '../public/images');

const images = [
  'smart-meal.png',
  'my-career.png',
  'watan-cool.png',
  'riyadh-water.png',
  '2.png',
  '3.png',
  'SHAHBAZ.png',
  'Saad.png',
  'ABD.png',
  'feat.png',
  'Al-haq.png'
];

async function download() {
  for (const img of images) {
    try {
      const url = `https://manshahussain-portfolio.vercel.app/assets/images/${img}`;
      const res = await fetch(url);
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(path.join(targetDir, img), Buffer.from(buffer));
        console.log(`Downloaded ${img} (${buffer.byteLength} bytes)`);
      } else {
        console.log(`Failed to fetch ${img}: ${res.status}`);
      }
    } catch (err) {
      console.error(`Error downloading ${img}:`, err.message);
    }
  }
}

download();
