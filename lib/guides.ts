export interface Guide {
  slug: string
  title: string
  description: string
  readMinutes: number
  sections: { heading: string; body: string[] }[]
}

export const GUIDES: Guide[] = [
  {
    slug: 'how-to-use-ncert-books',
    title: 'How to Study Effectively with NCERT Books',
    description:
      'NCERT books are short, but most students read them wrong. Here is a practical method — read, recall, solve, revise — that turns every chapter into marks.',
    readMinutes: 6,
    sections: [
      {
        heading: 'Why NCERT deserves a method, not just reading',
        body: [
          'NCERT textbooks are deceptively thin. A Class 10 Science chapter may run barely ten pages, yet a board question can be framed from any single sentence in it. Students who simply read chapters end to end often discover — too late — that they remember the story but cannot reproduce the definitions, diagrams, or steps the examiner asks for.',
          'The fix is to treat every chapter as four passes instead of one reading. The whole system below takes no extra books and no extra hours; it just organises the hours you already spend.',
        ],
      },
      {
        heading: 'Pass 1: Read like a story',
        body: [
          'Read the chapter start to finish without a pen in your hand. Your only job is to understand what the chapter is about: what question does it answer, and what are its three or four big ideas? Do not stop to memorise. If a paragraph confuses you, mark it and move on — confusion often resolves itself once you have seen the whole picture.',
          'At the end of this pass, close the book and say the chapter’s main ideas aloud in your own words. If you cannot, you skimmed too fast; read the marked paragraphs once more.',
        ],
      },
      {
        heading: 'Pass 2: Extract and write',
        body: [
          'Now read with a notebook. For every heading, write down definitions word-for-word (examiners check exact wording), draw every diagram yourself with labels, and copy every formula with its symbols explained. In Mathematics, solve each example on paper before looking at the printed solution — this single habit separates toppers from average scorers.',
          'Keep this notebook ruthlessly short: one or two pages per chapter. A notebook you will not re-read is decoration, not preparation.',
        ],
      },
      {
        heading: 'Pass 3: Solve everything in the book',
        body: [
          'Do every in-text question and every end-of-chapter exercise in writing, not in your head. In Science and Social Science, practise answering within the word limits boards prescribe. In Mathematics, redo the starred and “miscellaneous” problems — they are consistently the closest in difficulty to board questions.',
          'Mark every question you got wrong or fumbled. These marks are the most valuable thing you own: they are your personalised syllabus for revision.',
        ],
      },
      {
        heading: 'Pass 4: Spaced revision',
        body: [
          'Revisit the chapter after one day, after one week, and after one month — each time using only your short notebook and your marked questions. Each cycle should take a fraction of the previous one: thirty minutes, then fifteen, then five. By the third cycle the chapter is permanent.',
          'This is the pass most students skip, which is why most students re-learn chapters from scratch before exams. Do not be most students.',
        ],
      },
    ],
  },
  {
    slug: 'class-10-board-preparation',
    title: 'Class 10 Board Preparation with NCERT: A Complete Strategy',
    description:
      'The Class 10 boards reward one thing above all: complete NCERT mastery. A subject-by-subject plan covering Science, Maths, Social Science, and English.',
    readMinutes: 8,
    sections: [
      {
        heading: 'The single most important fact about Class 10 boards',
        body: [
          'Year after year, the overwhelming majority of Class 10 board questions — in Science and Mathematics especially — are drawn directly from NCERT text, solved examples, and exercises. Questions are rephrased, numbers are changed, but the source is the same book sitting on your desk. Internalising this fact simplifies your entire year: finishing NCERT honestly matters more than finishing three reference books superficially.',
        ],
      },
      {
        heading: 'Science: diagrams, reasons, and NCERT lines',
        body: [
          'Physics numericals come from the exercise patterns — practise each type until the steps are automatic, and always write the formula, substitution, and result with units. Chemistry rewards balanced equations and reason-based answers (“why” questions); learn the standard two-line reasons verbatim. Biology is diagram-heavy: draw and label every NCERT diagram from memory, and memorise the one-line functions of each labelled part.',
          'Read the “Activities” in each chapter. Examiners regularly frame questions asking what an activity demonstrates.',
        ],
      },
      {
        heading: 'Mathematics: the twice rule',
        body: [
          'Finish the entire NCERT — including examples and optional exercises — twice. The first pass builds understanding; the second builds speed and exposes the problems you only thought you knew. Trigonometry, quadratic equations, and surface areas deserve extra cycles because they combine concept with lengthy computation, exactly where exam pressure causes errors.',
          'Maintain a formula-and-mistake notebook: every identity on one side, every error you ever made on the other, re-attempted weekly.',
        ],
      },
      {
        heading: 'Social Science: write, don’t just read',
        body: [
          'Social Science punishes the “I have read it, I know it” illusion more than any other subject. Knowing the Non-Cooperation Movement and writing a five-mark answer on it under time pressure are different skills. From October onward, write at least two long answers per week in full, and get them checked against the marking pattern: introduction, points with explanation, conclusion.',
          'Map work is free marks — practise the prescribed map items until you can place every one blind. Source-based questions are answered from the source plus one line of chapter knowledge; practise the format, not just the content.',
        ],
      },
      {
        heading: 'English and the final two months',
        body: [
          'For English, read every lesson well enough to handle reference-to-context extracts, learn the poetic devices in each poem, and practise the writing section (letters, analytical paragraphs) against word limits. Grammar is best prepared through previous papers rather than rules alone.',
          'In the final two months, shift from learning to performing: one full sample paper per week per subject under strict timed conditions, then spend twice as long analysing errors as you spent writing. Previous ten-year papers reveal the repeating question skeletons — learn to recognise them on sight.',
        ],
      },
    ],
  },
  {
    slug: 'class-12-board-preparation',
    title: 'Class 12 Board Preparation with NCERT: A Complete Strategy',
    description:
      'Class 12 boards decide college admissions. How to master Physics, Chemistry, Biology, and Maths from NCERT — then convert that into paper performance.',
    readMinutes: 8,
    sections: [
      {
        heading: 'The calendar that works',
        body: [
          'The most reliable Class 12 structure is simple: finish the complete NCERT syllabus once by October, revise in three full cycles from November to January, and devote February to papers. Students who are still “completing the syllabus” in January almost always underperform their potential — not from lack of intelligence, but from lack of revision cycles.',
          'Set weekly targets per subject and track them on paper. A syllabus you can see shrinking is a syllabus that gets finished.',
        ],
      },
      {
        heading: 'Physics: derivations are the currency',
        body: [
          'Board Physics marks flow from derivations, ray diagrams, and standard numericals. Learn every derivation as a logical chain — physical situation, assumptions, mathematics, result — and practise writing each until it flows without pauses. Electrostatics, magnetism, and optics together dominate the paper; semiconductors and communication systems are short chapters that guarantee easy marks, so never leave them for “later”.',
        ],
      },
      {
        heading: 'Chemistry: three subjects in one',
        body: [
          'Treat the three branches differently. Physical chemistry is mathematics in disguise: drill numericals from mole concept through electrochemistry and kinetics until formulas fire automatically. Organic chemistry is mechanism and memory combined — master general mechanisms (substitution, elimination, addition) and the complete set of named reactions with conversions practised both ways. Inorganic chemistry is pure disciplined revision: NCERT tables, trends, structures, and reasons, revisited in short daily bursts rather than marathon sessions.',
        ],
      },
      {
        heading: 'Biology and Mathematics',
        body: [
          'Biology rewards line-by-line NCERT command: genetics problems need daily practice, diagrams (especially reproductive structures and ecological pyramids) must be drawn from memory, and ecology — often neglected — is among the highest-weightage, lowest-effort units in the paper.',
          'Mathematics is won in calculus: continuity, applications of derivatives, integrals, and differential equations together decide the grade. Solve the miscellaneous exercises — they are harder than the average board question, which is precisely why they prepare you. Keep vectors, 3D geometry, and probability in weekly rotation so the formulas never cool down.',
        ],
      },
      {
        heading: 'Converting knowledge into marks',
        body: [
          'Knowledge without paper skills leaks marks. From December, write timed papers: previous ten years plus quality sample papers, in one sitting, with the same stationery discipline as the real hall. Then analyse every lost mark into one of three buckets — concept gap, calculation slip, presentation — and fix the bucket, not just the question.',
          'Presentation is a scoring subject of its own: underline key terms, box final answers in numericals, draw diagrams with a sharp pencil and labels on one side, and attempt the full paper in order unless a question truly stalls you.',
        ],
      },
    ],
  },
  {
    slug: 'ncert-reading-routine',
    title: 'A Daily NCERT Reading Routine That Actually Sticks',
    description:
      'Forget 6-hour weekend marathons. A 90-minute daily routine built on short sprints, active recall, and weekly cycles beats cramming every time.',
    readMinutes: 5,
    sections: [
      {
        heading: 'Why routines beat motivation',
        body: [
          'Motivation fluctuates; routines do not require it. The students who top boards rarely study heroic hours — they study ordinary hours with extraordinary regularity. A fixed daily slot, even a modest one, compounds across a year into hundreds of hours of contact with the syllabus.',
          'The routine below assumes roughly ninety minutes on school days. Scale the sprint lengths, never the structure.',
        ],
      },
      {
        heading: 'The 90-minute structure',
        body: [
          'Split the session into three 25-minute sprints with five-minute breaks: Sprint 1 — new material (read one section and close-book recall it). Sprint 2 — problems (solve exercises from a chapter read earlier in the week). Sprint 3 — revision (your short notebook plus marked mistakes from an older chapter).',
          'The ordering matters: new learning while fresh, application while warm, revision while consolidating. Never do three sprints of the same type in one day.',
        ],
      },
      {
        heading: 'The weekly cycle',
        body: [
          'Assign subjects to days and protect the pattern: for example, Physics–Chemistry–Maths–Biology on rotation for seniors, or Science–Maths–SST–English for board classes. Reserve one day (Sunday works) for a weekly review: flip through the week’s notebook pages, re-attempt every marked mistake, and preview next week’s chapters for ten minutes each.',
          'Previewing is the highest-leverage ten minutes in studying: a chapter glimpsed on Sunday is dramatically easier to learn when taught on Wednesday.',
        ],
      },
      {
        heading: 'Rules that protect the routine',
        body: [
          'Phone in another room during sprints — attention residue from notifications destroys recall quality. End each sprint by writing one sentence: what did I just learn? If you cannot write it, the sprint did not happen; redo it tomorrow. And track streaks, not hours: a visible calendar chain of completed days motivates far more reliably than any target score.',
        ],
      },
    ],
  },
]

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug)
}
