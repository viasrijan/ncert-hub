import { readFileSync, writeFileSync } from 'node:fs'

const verified = JSON.parse(readFileSync('/tmp/ncert/verified.json', 'utf8'))

// Per-chapter live file indices for books with gaps (re-probed individually)
const PARTIAL = {
  jewe2: [1, 2, 3, 5, 6, 7, 8],
  jehp1: [1, 2, 3, 4, 5, 7, 9, 10, 11, 12],
  keww1: [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
  kehb1: [1, 2, 3, 4, 5, 6, 11, 12, 13, 14],
  lekl1: [1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 16, 17, 18, 21],
  lefl1: [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13],
}

// For multi-part books, display chapter numbers continue from part 1
const NUMBER_OFFSET = {
  lemh2: 6, // Class 12 Maths Part II: ch 7-13
  leph2: 8, // Class 12 Physics Part II: ch 9-14
  lech2: 5, // Class 12 Chemistry Part II: ch 6-10
  keph2: 7, // Class 11 Physics Part II: ch 8-14
  kech2: 6, // Class 11 Chemistry Part II: ch 7-9
}

// Curated chapter titles (rationalized 2023-24 syllabus).
// Applied ONLY when list length matches the verified chapter count.
const TITLES = {
  jemh1: ['Real Numbers', 'Polynomials', 'Pair of Linear Equations in Two Variables', 'Quadratic Equations', 'Arithmetic Progressions', 'Triangles', 'Coordinate Geometry', 'Introduction to Trigonometry', 'Some Applications of Trigonometry', 'Circles', 'Areas Related to Circles', 'Surface Areas and Volumes', 'Statistics', 'Probability'],
  jesc1: ['Chemical Reactions and Equations', 'Acids, Bases and Salts', 'Metals and Non-metals', 'Carbon and its Compounds', 'Life Processes', 'Control and Coordination', 'How do Organisms Reproduce?', 'Heredity', 'Light – Reflection and Refraction', 'The Human Eye and the Colourful World', 'Electricity', 'Magnetic Effects of Electric Current', 'Our Environment'],
  jeff1: ['A Letter to God', 'Nelson Mandela: Long Walk to Freedom', 'Two Stories about Flying', 'From the Diary of Anne Frank', 'Glimpses of India', 'Mijbil the Otter', 'Madam Rides the Bus', 'The Sermon at Benares', 'The Proposal'],
  jefp1: ['A Triumph of Surgery', "The Thief's Story", 'The Midnight Visitor', 'A Question of Trust', 'Footprints without Feet', 'The Making of a Scientist', 'The Necklace', 'Bholi', 'The Book That Saved the Earth'],
  jess1: ['Resources and Development', 'Forest and Wildlife Resources', 'Water Resources', 'Agriculture', 'Minerals and Energy Resources', 'Manufacturing Industries', 'Lifelines of National Economy'],
  jess2: ['Development', 'Sectors of the Indian Economy', 'Money and Credit', 'Globalisation and the Indian Economy', 'Consumer Rights'],
  jess3: ['The Rise of Nationalism in Europe', 'Nationalism in India', 'The Making of a Global World', 'The Age of Industrialisation', 'Print Culture and the Modern World'],
  jess4: ['Power Sharing', 'Federalism', 'Gender, Religion and Caste', 'Political Parties', 'Outcomes of Democracy'],
  iemh1: ['Number Systems', 'Polynomials', 'Coordinate Geometry', 'Linear Equations in Two Variables', "Introduction to Euclid's Geometry", 'Lines and Angles', 'Triangles', 'Quadrilaterals', 'Circles', "Heron's Formula", 'Surface Areas and Volumes', 'Statistics'],
  iesc1: ['Matter in Our Surroundings', 'Is Matter Around Us Pure?', 'Atoms and Molecules', 'Structure of the Atom', 'The Fundamental Unit of Life', 'Tissues', 'Motion', 'Force and Laws of Motion', 'Gravitation', 'Work and Energy', 'Sound', 'Improvement in Food Resources'],
  iebe1: ['The Fun They Had', 'The Sound of Music', 'The Little Girl', 'A Truly Beautiful Mind', 'The Snake and the Mirror', 'My Childhood', 'Reach for the Top', 'Kathmandu', 'If I Were You'],
  iemo1: ['The Lost Child', 'The Adventures of Toto', 'Iswaran the Storyteller', 'In the Kingdom of Fools', 'The Happy Prince', 'Weathering the Storm in Ersama', 'The Last Leaf', 'A House Is Not a Home', 'The Beggar'],
  iess1: ['India – Size and Location', 'Physical Features of India', 'Drainage', 'Climate', 'Natural Vegetation and Wildlife', 'Population'],
  iess2: ['The Story of Village Palampur', 'People as Resource', 'Poverty as a Challenge', 'Food Security in India'],
  hemh1: ['Rational Numbers', 'Linear Equations in One Variable', 'Understanding Quadrilaterals', 'Data Handling', 'Squares and Square Roots', 'Cubes and Cube Roots', 'Comparing Quantities', 'Algebraic Expressions and Identities', 'Mensuration', 'Exponents and Powers', 'Direct and Inverse Proportions', 'Factorisation', 'Introduction to Graphs'],
  hesc1: ['Crop Production and Management', 'Microorganisms: Friend and Foe', 'Coal and Petroleum', 'Combustion and Flame', 'Conservation of Plants and Animals', 'Reproduction in Animals', 'Reaching the Age of Adolescence', 'Force and Pressure', 'Friction', 'Sound', 'Chemical Effects of Electric Current', 'Some Natural Phenomena', 'Light'],
  lemh1: ['Relations and Functions', 'Inverse Trigonometric Functions', 'Matrices', 'Determinants', 'Continuity and Differentiability', 'Application of Derivatives'],
  lemh2: ['Integrals', 'Application of Integrals', 'Differential Equations', 'Vector Algebra', 'Three Dimensional Geometry', 'Linear Programming', 'Probability'],
  leph1: ['Electric Charges and Fields', 'Electrostatic Potential and Capacitance', 'Current Electricity', 'Moving Charges and Magnetism', 'Magnetism and Matter', 'Electromagnetic Induction', 'Alternating Current', 'Electromagnetic Waves'],
  leph2: ['Ray Optics and Optical Instruments', 'Wave Optics', 'Dual Nature of Radiation and Matter', 'Atoms', 'Nuclei', 'Semiconductor Electronics: Materials, Devices and Simple Circuits'],
  lech1: ['Solutions', 'Electrochemistry', 'Chemical Kinetics', 'The d- and f-Block Elements', 'Coordination Compounds'],
  lech2: ['Haloalkanes and Haloarenes', 'Alcohols, Phenols and Ethers', 'Aldehydes, Ketones and Carboxylic Acids', 'Amines', 'Biomolecules'],
  lebo1: ['Sexual Reproduction in Flowering Plants', 'Human Reproduction', 'Reproductive Health', 'Principles of Inheritance and Variation', 'Molecular Basis of Inheritance', 'Evolution', 'Human Health and Disease', 'Microbes in Human Welfare', 'Biotechnology: Principles and Processes', 'Biotechnology and its Applications', 'Organisms and Populations', 'Ecosystem', 'Biodiversity and Conservation'],
  kemh1: ['Sets', 'Relations and Functions', 'Trigonometric Functions', 'Complex Numbers and Quadratic Equations', 'Linear Inequalities', 'Permutations and Combinations', 'Binomial Theorem', 'Sequences and Series', 'Straight Lines', 'Conic Sections', 'Introduction to Three Dimensional Geometry', 'Limits and Derivatives', 'Statistics', 'Probability'],
  keph1: ['Units and Measurements', 'Motion in a Straight Line', 'Motion in a Plane', 'Laws of Motion', 'Work, Energy and Power', 'System of Particles and Rotational Motion', 'Gravitation'],
  keph2: ['Mechanical Properties of Solids', 'Mechanical Properties of Fluids', 'Thermal Properties of Matter', 'Thermodynamics', 'Kinetic Theory', 'Oscillations', 'Waves'],
  kech1: ['Some Basic Concepts of Chemistry', 'Structure of Atom', 'Classification of Elements and Periodicity in Properties', 'Chemical Bonding and Molecular Structure', 'Thermodynamics', 'Equilibrium'],
  kech2: ['Redox Reactions', 'Organic Chemistry: Some Basic Principles and Techniques', 'Hydrocarbons'],
  kebo1: ['The Living World', 'Biological Classification', 'Plant Kingdom', 'Animal Kingdom', 'Morphology of Flowering Plants', 'Anatomy of Flowering Plants', 'Structural Organisation in Animals', 'Cell: The Unit of Life', 'Biomolecules', 'Cell Cycle and Cell Division', 'Photosynthesis in Higher Plants', 'Respiration in Plants', 'Plant Growth and Development', 'Breathing and Exchange of Gases', 'Body Fluids and Circulation', 'Excretory Products and their Elimination', 'Locomotion and Movement', 'Neural Control and Coordination', 'Chemical Coordination and Integration'],
}

const COVER_BY_SUBJECT = [
  [/mathemat/i, 'mathematics'],
  [/^science/i, 'science'],
  [/physics/i, 'physics'],
  [/chemistr/i, 'chemistry'],
  [/biolog/i, 'biology'],
  [/english|hindi|sanskrit|urdu|language/i, 'language'],
  [/social|history|politic|sociolog|psycholog/i, 'social'],
  [/geograph/i, 'geography'],
  [/econom|account|business|statist|commerce/i, 'economics'],
  [/art|music|craft|graphic/i, 'arts'],
]

function coverFor(subject) {
  for (const [re, cover] of COVER_BY_SUBJECT) if (re.test(subject)) return cover
  return 'general'
}

const books = []
for (const b of verified) {
  let fileIndices
  if (PARTIAL[b.code]) fileIndices = PARTIAL[b.code]
  else if (b.verified === b.chapters && b.chapters > 0) fileIndices = Array.from({ length: b.chapters }, (_, i) => i + 1)
  else if (b.verified > 0) fileIndices = Array.from({ length: b.verified }, (_, i) => i + 1)
  else continue // dead book

  const offset = NUMBER_OFFSET[b.code] || 0
  const titles = TITLES[b.code]
  const useTitles = titles && titles.length === fileIndices.length

  const chapters = fileIndices.map((fileIdx, i) => ({
    number: i + 1 + offset,
    title: useTitles ? titles[i] : `Chapter ${i + 1 + offset}`,
    pdfCode: `${b.code}${String(fileIdx).padStart(2, '0')}`,
  }))

  books.push({
    id: b.code,
    title: b.title.replace(/\s+/g, ' ').trim(),
    classNum: b.cls,
    subject: b.subject.replace(/\s+/g, ' ').trim(),
    cover: `/covers/${coverFor(b.subject)}.png`,
    chapters,
  })
}

books.sort((a, b) => a.classNum - b.classNum || a.subject.localeCompare(b.subject) || a.title.localeCompare(b.title))

const header = `// NCERT catalog — generated from ncert.nic.in (textbook.php)
// Every chapter PDF URL below was verified live against ncert.nic.in.
// Regenerate with: node scripts/generate-catalog.mjs

export interface Chapter {
  number: number
  title: string
  pdfCode: string
}

export interface Book {
  id: string
  title: string
  classNum: number
  subject: string
  cover: string
  chapters: Chapter[]
}

export const NCERT_PDF_BASE = 'https://ncert.nic.in/textbook/pdf'

export const BOOKS: Book[] = `

const helpers = `

export const CLASSES = Array.from({ length: 12 }, (_, i) => i + 1)

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']

export function toRoman(classNum: number): string {
  return ROMAN[classNum - 1] ?? String(classNum)
}

export function getBook(id: string): Book | undefined {
  return BOOKS.find((b) => b.id === id)
}

export function getBooksByClass(classNum: number): Book[] {
  return BOOKS.filter((b) => b.classNum === classNum)
}

export function getSubjectsForClass(classNum: number): string[] {
  return [...new Set(getBooksByClass(classNum).map((b) => b.subject))]
}

export function findBookByPdfCode(pdfCode: string): { book: Book; chapter: Chapter } | undefined {
  for (const book of BOOKS) {
    const chapter = book.chapters.find((c) => c.pdfCode === pdfCode)
    if (chapter) return { book, chapter }
  }
  return undefined
}
`

writeFileSync(
  '/vercel/share/v0-project/lib/catalog.ts',
  header + JSON.stringify(books, null, 2) + helpers,
)
console.log('wrote', books.length, 'books,', books.reduce((n, b) => n + b.chapters.length, 0), 'chapters')
const titled = books.filter((b) => TITLES[b.id] && TITLES[b.id].length === b.chapters.length)
console.log('books with curated titles:', titled.length)
const guardFails = Object.keys(TITLES).filter((c) => {
  const b = books.find((x) => x.id === c)
  return !b || TITLES[c].length !== b.chapters.length
})
console.log('title guard failures (fell back to generic):', guardFails)
