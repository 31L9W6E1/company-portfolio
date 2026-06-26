import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { deflateSync } from "node:zlib";

const root = process.cwd();
const assetDir = join(root, "public", "assets");
const caseStudyDir = join(root, "public", "case-studies");

const crcTable = new Uint32Array(256).map((_, n) => {
  let c = n;
  for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});

function crc32(buffer) {
  let c = 0xffffffff;
  for (const byte of buffer) c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  const crc = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])));
  return Buffer.concat([length, typeBuffer, data, crc]);
}

function png(width, height, pixel) {
  const rows = [];
  for (let y = 0; y < height; y += 1) {
    const row = Buffer.alloc(1 + width * 4);
    row[0] = 0;
    for (let x = 0; x < width; x += 1) {
      const [r, g, b, a] = pixel(x, y, width, height);
      const offset = 1 + x * 4;
      row[offset] = r;
      row[offset + 1] = g;
      row[offset + 2] = b;
      row[offset + 3] = a;
    }
    rows.push(row);
  }

  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(height, 4);
  header[8] = 8;
  header[9] = 6;
  header[10] = 0;
  header[11] = 0;
  header[12] = 0;

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", header),
    chunk("IDAT", deflateSync(Buffer.concat(rows), { level: 9 })),
    chunk("IEND", Buffer.alloc(0))
  ]);
}

function mix(a, b, t) {
  return Math.round(a + (b - a) * t);
}

function colorRamp(x, y, width, height, palette) {
  const t = Math.min(1, Math.max(0, (x / width) * 0.75 + (y / height) * 0.25));
  return [
    mix(palette[0][0], palette[1][0], t),
    mix(palette[0][1], palette[1][1], t),
    mix(palette[0][2], palette[1][2], t)
  ];
}

function enterpriseImage(palette, accent) {
  return (x, y, width, height) => {
    let [r, g, b] = colorRamp(x, y, width, height, palette);
    const grid = x % 96 < 2 || y % 96 < 2;
    const diagonal = Math.abs((x + y * 0.68) % 310) < 4;
    const block =
      (x > width * 0.54 && x < width * 0.86 && y > height * 0.18 && y < height * 0.32) ||
      (x > width * 0.62 && x < width * 0.93 && y > height * 0.56 && y < height * 0.72) ||
      (x > width * 0.12 && x < width * 0.34 && y > height * 0.62 && y < height * 0.8);
    const horizon = Math.abs(y - height * 0.62 + Math.sin(x / 80) * 30) < 5;
    if (grid) {
      r = mix(r, 255, 0.1);
      g = mix(g, 255, 0.1);
      b = mix(b, 255, 0.1);
    }
    if (diagonal || horizon) {
      r = mix(r, accent[0], 0.45);
      g = mix(g, accent[1], 0.45);
      b = mix(b, accent[2], 0.45);
    }
    if (block) {
      r = mix(r, 238, 0.5);
      g = mix(g, 243, 0.5);
      b = mix(b, 248, 0.5);
    }
    const vignette = Math.hypot((x - width / 2) / width, (y - height / 2) / height);
    r = mix(r, 4, vignette * 0.5);
    g = mix(g, 12, vignette * 0.45);
    b = mix(b, 24, vignette * 0.4);
    return [r, g, b, 255];
  };
}

function pdf(title, subtitle) {
  const lines = [
    "%PDF-1.4",
    "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj",
    "2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj",
    "3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >> endobj",
    "5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj"
  ];
  const stream = `BT /F1 24 Tf 72 700 Td (${title}) Tj /F1 12 Tf 0 -32 Td (${subtitle}) Tj 0 -28 Td (ALPHA RIF BTA case study placeholder for CMS replacement.) Tj ET`;
  lines.push(`4 0 obj << /Length ${stream.length} >> stream\n${stream}\nendstream endobj`);
  const body = `${lines.join("\n")}\n`;
  const offsets = [0];
  let cursor = 0;
  for (const part of lines) {
    offsets.push(cursor);
    cursor += Buffer.byteLength(`${part}\n`);
  }
  const xref = Buffer.byteLength(body);
  return Buffer.from(
    `${body}xref\n0 6\n0000000000 65535 f \n${offsets
      .slice(1)
      .map((offset) => `${String(offset).padStart(10, "0")} 00000 n `)
      .join("\n")}\ntrailer << /Root 1 0 R /Size 6 >>\nstartxref\n${xref}\n%%EOF`
  );
}

async function writeAsset(path, data) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, data);
}

await mkdir(assetDir, { recursive: true });
await mkdir(caseStudyDir, { recursive: true });

const blue = [[7, 17, 31], [30, 76, 122]];
const slate = [[12, 25, 42], [82, 95, 112]];
const teal = [[7, 55, 76], [21, 128, 137]];
const gold = [[20, 28, 44], [154, 117, 42]];

await writeAsset(join(assetDir, "hero-enterprise.png"), png(1280, 780, enterpriseImage(blue, [80, 165, 255])));
await writeAsset(join(assetDir, "og-enterprise.png"), png(1200, 630, enterpriseImage(blue, [80, 165, 255])));
await writeAsset(join(assetDir, "project-mining.png"), png(960, 620, enterpriseImage(gold, [248, 191, 79])));
await writeAsset(join(assetDir, "project-infrastructure.png"), png(960, 620, enterpriseImage(slate, [82, 168, 255])));
await writeAsset(join(assetDir, "project-logistics.png"), png(960, 620, enterpriseImage(teal, [90, 210, 204])));
await writeAsset(join(assetDir, "gallery-contract.png"), png(640, 480, enterpriseImage(blue, [160, 200, 255])));
await writeAsset(join(assetDir, "gallery-site.png"), png(640, 480, enterpriseImage(slate, [160, 200, 255])));

await writeAsset(join(caseStudyDir, "mining-supply-framework.pdf"), pdf("Mining Supply Framework", "Procurement and supplier documentation program"));
await writeAsset(join(caseStudyDir, "public-infrastructure-tender.pdf"), pdf("Public Infrastructure Tender Support", "Tender compliance and submission controls"));
await writeAsset(join(caseStudyDir, "industrial-logistics-program.pdf"), pdf("Industrial Logistics Program", "Delivery planning and vendor controls"));

console.log("Generated ALPHA RIF BTA visual assets and case studies.");
