#!/usr/bin/env node
// One-off mirror for hees2 (Grade 8 Part-II) – run when ncert.nic.in is reachable.
// Downloads hees201-208 via proxy or direct, then splits across ncert-pdfs-{1..4} repos.
// Requires GH_TOKEN env and local clones of ncert-pdfs repos or uses gh API upload.

const codes = Array.from({ length: 8 }, (_, i) => `hees20${i + 1}`);
const NCERT_BASE = 'https://ncert.nic.in/textbook/pdf';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36';

async function fetchPdf(code) {
  const url = `${NCERT_BASE}/${code}.pdf`;
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'application/pdf,*/*' } });
      if (res.ok) {
        const buf = Buffer.from(await res.arrayBuffer());
        if (buf.slice(0, 4).toString() === '%PDF') {
          console.log(`✅ ${code}: ${buf.length} bytes`);
          return buf;
        }
        console.log(`⚠️  ${code}: not PDF (status ${res.status})`);
      } else {
        console.log(`❌ ${code}: HTTP ${res.status}`);
      }
    } catch (e) {
      console.log(`retry ${code} attempt ${attempt + 1}: ${e.message}`);
    }
    await new Promise(r => setTimeout(r, 800 * (attempt + 1)));
  }
  throw new Error(`Failed to fetch ${code} after retries`);
}

async function main() {
  console.log('Probing hees2 PDFs from NCERT...');
  for (const code of codes) {
    // also test jsDelivr @main (already should be 404)
    const jd = `https://cdn.jsdelivr.net/gh/viasrijan/ncert-pdfs-1@main/${code}.pdf`;
    try {
      const h = await fetch(jd, { method: 'HEAD' });
      console.log(`${code} @main: ${h.status}`);
    } catch {}
  }
  console.log('\nAttempting direct NCERT fetch (requires ncert.nic.in reachable from this network)...');
  for (const code of codes) {
    try {
      const buf = await fetchPdf(code);
      // save to /tmp for manual `cp` into cloned ncert-pdfs repos
      await import('node:fs').then(m => m.writeFileSync(`/tmp/${code}.pdf`, buf));
      console.log(`  saved /tmp/${code}.pdf`);
    } catch (e) {
      console.error(`  failed ${code}: ${e.message}`);
    }
  }
  console.log('\nDone. If files saved to /tmp, copy into ncert-pdfs clones:');
  console.log('  cp /tmp/hees20*.pdf ~/path/to/ncert-pdfs-1/ (or spread across 1..4 to balance)');
  console.log('  cd ~/path/to/ncert-pdfs-1 && git add hees20*.pdf && git commit -m "add hees2 (Grade 8 Part-II) PDFs" && git push');
  console.log('Then pdf-viewer @main will serve immediately; no code change needed (reader already @main).');
}

main();
