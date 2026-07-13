import { readFileSync, writeFileSync } from 'node:fs'

const books = JSON.parse(readFileSync('/tmp/ncert/books.json', 'utf8'))
const english = books.filter((b) => b.code[1] === 'e' && b.cls >= 1 && b.cls <= 12)

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'

async function head(url, attempt = 0) {
  try {
    const res = await fetch(url, {
      method: 'HEAD',
      headers: { 'User-Agent': UA },
      signal: AbortSignal.timeout(20000),
    })
    return res.status
  } catch {
    if (attempt < 2) return head(url, attempt + 1)
    return 0
  }
}

// Build the full list of chapter URLs to check
const jobs = []
for (const b of english) {
  for (let ch = 1; ch <= b.chapters; ch++) {
    const pdfCode = `${b.code}${String(ch).padStart(2, '0')}`
    jobs.push({ book: b.code, ch, pdfCode })
  }
}
console.log('checking', jobs.length, 'chapter urls for', english.length, 'books')

const results = {}
let done = 0
const CONCURRENCY = 24
async function worker() {
  while (jobs.length) {
    const j = jobs.shift()
    if (!j) break
    const status = await head(`https://ncert.nic.in/textbook/pdf/${j.pdfCode}.pdf`)
    ;(results[j.book] ||= {})[j.ch] = status
    done++
    if (done % 100 === 0) console.log('done', done)
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker))

// Summarize per book: verified consecutive chapter count from 1
const out = []
for (const b of english) {
  const statuses = results[b.code] || {}
  let verified = 0
  for (let ch = 1; ch <= b.chapters; ch++) {
    if (statuses[ch] === 200) verified++
    else break
  }
  const all200 = Object.values(statuses).filter((s) => s === 200).length
  out.push({ ...b, verified, all200 })
}
writeFileSync('/tmp/ncert/verified.json', JSON.stringify(out, null, 1))

const bad = out.filter((b) => b.verified !== b.chapters)
console.log('\nbooks fully verified:', out.length - bad.length)
console.log('books with mismatches:')
for (const b of bad) console.log(` cls ${b.cls} ${b.code} "${b.title}" declared=${b.chapters} verified=${b.verified} scattered200=${b.all200}`)
