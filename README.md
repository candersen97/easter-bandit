# 🐰💻 Operation White Rabbit — Easter Hunt 2025

## QUICK DEPLOY (5 minutes)

### 1. Push to GitHub
```bash
cd C:\Users\chada\stonepath   # or wherever you want to clone it
git clone [this repo or copy files]
cd easter-bandit
git init
git add .
git commit -m "Operation White Rabbit — deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/easter-bandit.git
git push -u origin main
```

### 2. Deploy on Vercel
1. Go to vercel.com → New Project
2. Import your GitHub repo
3. Framework: **Vite** (auto-detected)
4. Click Deploy
5. Your URL will be something like: `easter-bandit.vercel.app`

### 3. Update QR Codes
Once deployed, generate QR codes pointing to:
- **Step 1 QR**: `https://your-site.vercel.app`
- **Step 4 QR**: `https://your-site.vercel.app/node-04`
- Print them and tape onto the appropriate clue cards

---

## WEBSITE PAGES

| URL | Purpose | Used At |
|-----|---------|---------|
| `/` | Main homepage with ransom message + source code cipher | Step 1 |
| `/node-04` | Corrupted file — decrypts to pond/BGE clue | Step 4 |
| `/contact` | Bandit comms — auto-reply form | Step 7 |

---

## THE CIPHER IN THE SOURCE CODE (Step 1)

The homepage has a cipher hidden in the HTML comments.
Kids must right-click → View Page Source (or Inspect → Sources tab).

The comment tells them to shift each letter BACKWARD:
- TGFPPC → STELLA  
- UFMMPX → HOBBES

The answer is **STELLA** (the chocolate lab) — they need to find her collar.

**Access Terminal on homepage**: 
- Correct answers: STELLA, HOBBES, WHITE RABBIT
- Each gives a different taunting response

---

## HUNT FLOW SUMMARY

| Step | Location | Puzzle Type | Notes |
|------|----------|-------------|-------|
| 1 | Theater room TV | QR → Website | Kids find source code cipher |
| 2 | Stella's collar | Logic puzzle | Produces 3-digit number (save for Step 7) |
| 3 | Coffee table (under top) | Word cipher | Shift letters back 3 to decode |
| 4 | Ornamental pond (waterproof) | QR → /node-04 | Key = STELLA |
| 5 | Big Green Egg | Physical | Points to blower + deck |
| 6 | Deck (under leaves, blower reveals) | Riddle | Points to pine chips |
| 7 | Guinea pig bedding bag | Reading | Points to zipline platform |
| 8 | Zipline platform (weatherproof box) | Logic grid | Produces combo (default: 1234) |
| 9 | Milwaukee Packout (combo lock) | Final cipher | Decodes to attic |
| FINAL | Attic above master closet | 🎉 | Baskets found |

---

## COMBINATION LOCK (Step 8→9)

Default combo from the logic grid puzzle: **1234**

To change it:
1. Set your lock to whatever 4-digit code you want
2. Edit `CLUE_CARDS.html` — update the logic puzzle so the answer produces YOUR code
3. The simplest approach: change the location order in the clues

---

## STEP 7 — CONTACT FORM AUTO-REPLIES

The contact form at `/contact` has 3 pre-written replies that auto-select randomly.
There are also 3 KEYWORD-AWARE replies that trigger if kids mention:
- "stella" or "hobbes" or "dog" → reply about dog informants
- "please" or "give back" → reply about pleading
- "combination" or "code" or "lock" → reply with a hint

**No setup required** — all replies are built into the code. No EmailJS, no Formspree.
The form is purely front-end and works without any backend service.

---

## BEFORE THE HUNT — PLACEMENT CHECKLIST

- [ ] Print CLUE_CARDS.html (color if possible, but B&W works)
- [ ] Cut out each card
- [ ] Generate and print 2 QR codes (homepage + /node-04)
- [ ] Tape Step 1 note to theater room TV
- [ ] Attach Step 2 note to Stella's collar
- [ ] Place Step 3 inside coffee table under removable top
- [ ] Seal Step 4 in waterproof container at pond edge
- [ ] Place Step 5 inside Big Green Egg
- [ ] Scatter leaves/debris on deck, hide Step 6 card underneath (laminated)
- [ ] Seal Step 7 in zip-lock, bury in guinea pig pine chip bag
- [ ] Place Step 8 + logic puzzle in weatherproof box on zipline platform
- [ ] Buy combo lock → set to your code → lock Packout box
- [ ] Place Step 9 card + red bandana inside Packout
- [ ] Move Easter baskets to attic above master bedroom closet
- [ ] Place final victory note on top of baskets
- [ ] Put on red bandana + sunglasses. Scramble voice. Feel powerful.

---

## HINTS FOR YOU TO GIVE IF THEY GET STUCK

**Stuck at Step 1 (website)**: "Have you tried right-clicking on the page?"
**Stuck at Step 2 (collar cipher)**: "TGFPPC — shift each letter back. T-4=P? No wait... the number next to T is 2."
**Stuck at Step 3 (coffee table cipher)**: "The shift is 3. Go backward. C-3=Z? No... forward alphabet, shift back 3."
**Stuck at Step 8 (platform logic)**: "What order did you visit these spots today?"

---

Happy hunting. — EB v6.7
