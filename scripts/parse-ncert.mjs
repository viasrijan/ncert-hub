import { readFileSync, writeFileSync } from 'node:fs'

const html = readFileSync('/tmp/ncert/textbook.html', 'utf8')

// Split into blocks by the class+subject condition
const blockRe = /\(document\.test\.tclass\.value==(\d+)\)\s*&&\s*\(document\.test\.tsubject\.options\[sind\]\.text=="([^"]+)"\)/g

const matches = []
let m
while ((m = blockRe.exec(html)) !== null) {
  matches.push({ cls: Number(m[1]), subject: m[2], start: m.index })
}

const books = []
for (let i = 0; i < matches.length; i++) {
  const { cls, subject, start } = matches[i]
  const end = i + 1 < matches.length ? matches[i + 1].start : html.length
  const block = html.slice(start, end)
  const lines = block.split('\n')

  let pendingTitle = null
  let pendingIdx = null
  for (const raw of lines) {
    const line = raw.trim()
    if (line.startsWith('//')) continue // skip commented-out entries
    const t = line.match(/options\[(\d+)\]\.text="([^"]+)"/)
    if (t) {
      pendingIdx = Number(t[1])
      pendingTitle = t[2]
      continue
    }
    const v = line.match(/options\[(\d+)\]\.value="textbook\.php\?([a-z0-9]+)=(\d+)-(\d+)"/)
    if (v && pendingTitle && Number(v[1]) === pendingIdx) {
      const code = v[2]
      const chapters = Number(v[4])
      if (pendingTitle.includes('Select Book') || pendingTitle === 'Coming Soon') continue
      books.push({ cls, subject, title: pendingTitle, code, chapters })
      pendingTitle = null
      pendingIdx = null
    }
  }
}

// dedupe
const seen = new Set()
const unique = books.filter((b) => {
  const k = b.code
  if (seen.has(k)) return false
  seen.add(k)
  return true
})

console.log('total books:', unique.length)
const english = unique.filter((b) => b.code[1] === 'e')
console.log('english books:', english.length)
const byClass = {}
for (const b of english) byClass[b.cls] = (byClass[b.cls] || 0) + 1
console.log('by class:', byClass)
writeFileSync('/tmp/ncert/books.json', JSON.stringify(unique, null, 1))
console.log('sample:', JSON.stringify(english.filter((b) => b.cls === 10)))
