import './Guide.css'

const STEPS = [
  {
    step: 1,
    title: 'Theater TV → Phones',
    node: 'FIREWALL 01 // ENTRY NODE',
    location: 'Theater room TV displays /tv, kids open easter-bandit.vercel.app on phones',
    what: 'Find the pulsing red "LEAKED FILE :: CLASSIFIED" node on homepage, tap it. Decode hex cipher using reference table.',
    cipher: '43 48 45 43 4B 20 53 54 45 4C 4C 41 53 20 43 4F 4C 4C 41 52',
    decoded: 'CHECK STELLAS COLLAR',
    answer: 'COLLAR (last word of decoded message)',
    result: 'Terminal tells them to find Stella the chocolate lab and check her collar.',
  },
  {
    step: 2,
    title: "Stella's Collar",
    node: 'FIREWALL 02 // INFORMANT TAG',
    location: "Physical card attached to Stella's collar",
    what: 'Solve 3 mini-puzzles for a 3-digit code.',
    details: [
      'Digit 1: Dogs (Stella=5 + Hobbes=2) minus lowest cat (Max=1) = 6',
      'Digit 2: TRUE/FALSE — mom was cheerleader (T), cruise honeymoon (T), cat jumped out car window (T) → 1+1+1 = 3',
      'Digit 3: Sequence 2,3,5,8,13,21 → ones digit = 1',
    ],
    answer: '631 — needed again at Steps 7 and 8',
    result: 'Hints at a concert this summer → find the Stick Season album by Noah Kahan, clue is inside the record case.',
  },
  {
    step: 3,
    title: 'Stick Season Record Case',
    node: 'FIREWALL 03 // CLASSIFIED DOCUMENT',
    location: 'Physical card inside Stick Season (Noah Kahan) record case',
    what: 'Decode a Polybius Square cipher (5x5 grid, row+column).',
    decoded: 'LOOK IN HOBBES OUTDOOR BATH',
    result: "Find Hobbes' outdoor water bowl/bath.",
  },
  {
    step: 4,
    title: "Hobbes' Outdoor Bath (Pond)",
    node: 'FIREWALL 04 // CORRUPTED FILE',
    location: "Physical card in waterproof container at pond (Hobbes' bath) + /node-04 on phones",
    what: 'Read the FIRST LETTER of each message in the Intercepted Comms Log on the homepage.',
    details: [
      'Evidence secured... → E',
      'Making rounds... → M',
      'Everything is set... → E',
      'Recon complete... → R',
      'All quiet... → A',
      'Launch sequence... → L',
      'Definitely watching... → D',
    ],
    answer: 'EMERALD — enter at /node-04 to decrypt file',
    result: 'Decrypted file points to Big Green Egg.',
  },
  {
    step: 5,
    title: 'Big Green Egg',
    node: 'FIREWALL 05 // HOT ZONE',
    location: 'Physical card inside the BGE',
    what: 'Read clue: "buried literally and figuratively", "harvesting this secret", "not even Calypso can help you" — hints at garden.',
    result: 'Find the 3D printed hawk in the garden, dig up the buried puzzle box.',
  },
  {
    step: 6,
    title: 'Garden Puzzle Box',
    node: 'FIREWALL 06 // BURIED CACHE',
    location: '3D printed puzzle box buried in garden, marked by a small 3D printed hawk',
    what: 'Dig up the box, solve the puzzle box to open it. Inside: clue pointing to something soft and aromatic (cedar/pine).',
    result: 'Find the guinea pig bedding bag inside the house.',
  },
  {
    step: 7,
    title: 'Guinea Pig Pine Chip Bag',
    node: 'FIREWALL 07 // BURIED INTEL',
    location: 'Physical card sealed in zip-lock inside pine chip bag',
    what: 'Read cat agent report pointing to elevated platform. BUT FIRST: go to /contact, authenticate with 631, and each kid sends a message using their own name. Simon gets 1102, Lucy gets 2011, Chloe gets 1020.',
    result: 'Collect all 3 comms codes, then go to the zipline platform.',
  },
  {
    step: 8,
    title: 'Zipline Platform',
    node: 'FIREWALL 08 // ELEVATED NODE',
    location: 'Physical card in weatherproof box on the platform',
    what: 'Solve a logic grid for a 4-digit combo.',
    details: [
      'POND + EGG = 4',
      'PACKOUT is the largest number',
      'EGG < PLATFORM',
      'POND is odd',
      'POND is GREATER than PLATFORM',
    ],
    answer: 'POND=3, EGG=1, PLATFORM=2, PACKOUT=4 → Grid code: 3124. Then add: 1102 + 2011 + 1020 + 3124 = 7257',
    result: 'Combination is 7257. Go to the Milwaukee Packout box in the garage and unlock it.',
  },
  {
    step: 9,
    title: 'Milwaukee Packout',
    node: 'FIREWALL 09 // VAULT KEY',
    location: 'Physical card + red bandana inside locked Packout',
    what: 'Decode a keyword substitution cipher (keyword: BANDIT).',
    decoded: 'MIND YOUR HEAD YOUR BASKETS ARE IN THE ATTIC',
    result: 'Go to the attic above the master bedroom closet.',
  },
  {
    step: 'FINAL',
    title: 'Attic',
    node: 'FINAL // VICTORY',
    location: 'Above master bedroom closet',
    what: 'Easter baskets + victory note. Operation White Rabbit complete.',
  },
]

const CROSS_REFS = [
  { key: '631', note: 'Used at /contact auth gate, recalled at Step 7, middle digit (3) used in Step 8 logic grid' },
  { key: 'EMERALD', note: 'Depends on comms log message order on homepage — changing messages breaks this' },
  { key: 'COLLAR', note: 'Homepage access terminal answer' },
  { key: '7257', note: 'Final Packout combo (1102 + 2011 + 1020 + 3124 added digit-by-digit). Set physical lock to this.' },
]

const PAGES = [
  { url: '/tv', purpose: 'TV broadcast — hacker takeover screen for theater TV' },
  { url: '/', purpose: 'Homepage — ransom message, access terminal, comms log, leaked file cipher' },
  { url: '/node-04', purpose: 'Corrupted file decoder (key: EMERALD)' },
  { url: '/contact', purpose: 'Bandit comms — auto-reply form (auth gate: 631)' },
]

const HINTS = [
  { step: 1, hint: '"Look around the page. Something is glowing red that shouldn\'t be."' },
  { step: 2, hint: '"Add the two dogs\' ranks together first, then subtract."' },
  { step: 3, hint: '"First number is the row, second is the column."' },
  { step: 4, hint: '"Read the first letter AFTER the dash — not the pet name."' },
  { step: 8, hint: '"Start with what you know for sure — PACKOUT is 4, PLATFORM is 3."' },
  { step: 9, hint: '"Write BANDIT first, then continue the alphabet skipping used letters."' },
]

export default function Guide() {
  return (
    <div className="guide">
      <div className="guide-container">
        <header className="guide-header">
          <h1 className="guide-title">OPERATION WHITE RABBIT</h1>
          <p className="guide-subtitle">HUNT MASTER REFERENCE — DO NOT SHOW TO KIDS</p>
        </header>

        {/* Steps */}
        <section className="guide-section">
          <h2 className="section-title">HUNT STEPS</h2>
          {STEPS.map((s) => (
            <div key={s.step} className="step-card">
              <div className="step-header">
                <span className="step-number">STEP {s.step}</span>
                <span className="step-title">{s.title}</span>
                <span className="step-node">{s.node}</span>
              </div>
              <div className="step-body">
                <div className="step-row">
                  <span className="step-label">LOCATION</span>
                  <span>{s.location}</span>
                </div>
                <div className="step-row">
                  <span className="step-label">TASK</span>
                  <span>{s.what}</span>
                </div>
                {s.details && (
                  <div className="step-row">
                    <span className="step-label">DETAILS</span>
                    <ul className="step-details">
                      {s.details.map((d, i) => <li key={i}>{d}</li>)}
                    </ul>
                  </div>
                )}
                {s.cipher && (
                  <div className="step-row">
                    <span className="step-label">CIPHER</span>
                    <code className="step-cipher">{s.cipher}</code>
                  </div>
                )}
                {s.decoded && (
                  <div className="step-row">
                    <span className="step-label">DECODED</span>
                    <span className="step-answer">{s.decoded}</span>
                  </div>
                )}
                {s.answer && (
                  <div className="step-row">
                    <span className="step-label">ANSWER</span>
                    <span className="step-answer">{s.answer}</span>
                  </div>
                )}
                {s.result && (
                  <div className="step-row">
                    <span className="step-label">LEADS TO</span>
                    <span>{s.result}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* Cross references */}
        <section className="guide-section">
          <h2 className="section-title">KEY CROSS-REFERENCES</h2>
          <div className="ref-grid">
            {CROSS_REFS.map((r) => (
              <div key={r.key} className="ref-card">
                <span className="ref-key">{r.key}</span>
                <span className="ref-note">{r.note}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Pages */}
        <section className="guide-section">
          <h2 className="section-title">WEBSITE PAGES</h2>
          <div className="pages-grid">
            {PAGES.map((p) => (
              <div key={p.url} className="page-card">
                <code className="page-url">{p.url}</code>
                <span className="page-purpose">{p.purpose}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Hints */}
        <section className="guide-section">
          <h2 className="section-title">HINTS IF THEY GET STUCK</h2>
          <div className="hints-list">
            {HINTS.map((h) => (
              <div key={h.step} className="hint-card">
                <span className="hint-step">STEP {h.step}</span>
                <span className="hint-text">{h.hint}</span>
              </div>
            ))}
          </div>
        </section>

        <footer className="guide-footer">
          EB//DARKNET :: HUNT MASTER EYES ONLY :: v6.7
        </footer>
      </div>
    </div>
  )
}
