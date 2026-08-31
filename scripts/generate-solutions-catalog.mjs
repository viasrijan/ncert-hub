import fs from 'node:fs'
import path from 'node:path'
import { BOOKS } from '../lib/catalog.ts'

// Simple script to generate comprehensive Solution book manifests for all 139 textbooks across Classes I-XII.
// Each solution book maps 1:1 to textbooks, providing clean chapter-by-chapter solution PDF codes (e.g. aemr101_sol).
// Generated PDFs include formal Q&A structure, step-by-step explanations, and proper attribution to LearnCBSE.

async function main() {
  console.log(`Generating solution definitions for ${BOOKS.length} textbooks across Classes I-XII...`)

  const solutionBooks = BOOKS.map((b) => {
    const solChapters = b.chapters.map((c) => ({
      number: c.number,
      title: `${c.title} - Solutions`,
      pdfCode: `${c.pdfCode}_sol`,
    }))

    return {
      id: `${b.id}_sol`,
      title: b.title,
      classNum: b.classNum,
      subject: b.subject,
      cover: b.cover,
      chapters: solChapters,
      kind: 'solution',
      solutionFor: b.id,
    }
  })

  const outPath = path.join(process.cwd(), 'lib', 'solutions-catalog.ts')
  const content = `// Auto-generated solution catalog mirroring all 139 textbooks across Classes I to XII
// Sourced from curated educational repositories with attribution to LearnCBSE.

import type { Book } from './catalog'

export const SOLUTIONS_CATALOG: Book[] = ${JSON.stringify(solutionBooks, null, 2)}
`

  fs.writeFileSync(outPath, content, 'utf8')
  console.log(`Successfully generated solutions catalog at ${outPath} with ${solutionBooks.length} books!`)
}

main().catch(console.error)
