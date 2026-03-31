import { useState, useEffect } from 'react'
import './CorruptedFile.css'

const CORRUPTED_CHARS = '█▓▒░╔╗╚╝║═╠╣╦╩╬▄▀■□▪▫◘◙◦'

function corruptText(text, level = 0.4) {
  return text.split('').map(c => {
    if (c === ' ' || c === '\n') return c
    return Math.random() < level
      ? CORRUPTED_CHARS[Math.floor(Math.random() * CORRUPTED_CHARS.length)]
      : c
  }).join('')
}

const REAL_MESSAGE = `FILE: BANDIT_MISSION_LOG_NODE04.txt
CLASSIFICATION: EYES ONLY
DATE: EASTER MORNING

AGENT REPORT — POND OPERATION:

The waterproof container has been secured
at the edge of the ornamental pond.
Look near the water. Get your hands wet.
The Bandit does not fear getting wet.
(The Bandit also waterproofed everything.
He is very professional.)

NEXT COORDINATES:
The iron egg holds your next clue.
It lives on the deck. It gets very hot.
You will not need fire today.
Just look inside.

— EB
[TRANSMISSION ENDS]`

export default function CorruptedFile() {
  const [decryptLevel, setDecryptLevel] = useState(1.0)
  const [decrypting, setDecrypting] = useState(false)
  const [decrypted, setDecrypted] = useState(false)
  const [displayText, setDisplayText] = useState(corruptText(REAL_MESSAGE, 1.0))
  const [code, setCode] = useState('')
  const [codeMsg, setCodeMsg] = useState('')

  useEffect(() => {
    if (!decrypting) return
    const interval = setInterval(() => {
      setDecryptLevel(prev => {
        const next = prev - 0.07
        if (next <= 0) {
          clearInterval(interval)
          setDecrypted(true)
          setDisplayText(REAL_MESSAGE)
          return 0
        }
        setDisplayText(corruptText(REAL_MESSAGE, next))
        return next
      })
    }, 120)
    return () => clearInterval(interval)
  }, [decrypting])

  const handleDecrypt = (e) => {
    e.preventDefault()
    const c = code.trim().toUpperCase()
    if (c === 'EMERALD') {
      setDecrypting(true)
    } else if (c === 'STELLA' || c === 'HOBBES' || c === 'COLLAR') {
      setCodeMsg('✗ That was last year\'s key. The Bandit upgraded. The pond card told you how to find the new one — go back to the homepage comms log.')
    } else {
      setCodeMsg('✗ DECRYPTION KEY INVALID. The clue from the pond tells you how to derive it. Look at the COMMS LOG on the homepage — carefully.')
    }
  }

  return (
    <div className="corrupted-page">
      <header className="cf-header">
        <span className="cf-logo">EB<span className="red-text">//</span>DARKNET</span>
        <span className="cf-node">NODE-04 :: CORRUPTED FILE</span>
        <span className={`cf-status ${decrypted ? 'status-green' : 'status-red'}`}>
          {decrypted ? 'DECRYPTED' : 'CORRUPTED'}
        </span>
      </header>

      <div className="cf-body">
        <div className="cf-warning">
          <span className="amber-text">⚠ WARNING:</span> This file has been intentionally corrupted by EB//DARKNET security protocols.
          A valid decryption key is required. You should have found it by now.
        </div>

        <div className="cf-file-box">
          <div className="cf-file-header">
            <span>BANDIT_MISSION_LOG_NODE04.txt</span>
            <span className={`cf-corrupt-badge ${decrypted ? 'badge-green' : 'badge-red'}`}>
              {decrypted ? '✓ DECRYPTED' : `INTEGRITY: ${Math.round(decryptLevel * 100)}% CORRUPT`}
            </span>
          </div>
          <pre className={`cf-file-content ${decrypted ? 'decrypted' : 'corrupted'}`}>
            {displayText}
          </pre>
        </div>

        {!decrypted && (
          <div className="cf-decrypt-box">
            <p className="cf-decrypt-hint">
              &gt; Enter decryption key to restore file integrity.
              <br />&gt; The pond clue told you how to derive it. Go back to the homepage if you need to.
            </p>
            <form onSubmit={handleDecrypt} className="cf-decrypt-form">
              <span className="prompt">&gt; KEY: </span>
              <input
                type="text"
                value={code}
                onChange={e => setCode(e.target.value)}
                placeholder="ENTER DECRYPTION KEY..."
                className="cf-input"
                autoComplete="off"
                spellCheck="false"
              />
              <button type="submit" className="cf-btn">DECRYPT</button>
            </form>
            {codeMsg && <p className="cf-code-msg red-text">{codeMsg}</p>}
          </div>
        )}

        {decrypted && (
          <div className="cf-success">
            <p className="green-bright">✓ FILE INTEGRITY RESTORED. The Bandit did not expect this.</p>
            <p className="text-dim">Follow the instructions above. NODE-07 awaits when you need it.</p>
            <a href="/contact" className="cf-contact-link">→ ACCESS NODE-07 :: BANDIT COMMS</a>
          </div>
        )}
      </div>
    </div>
  )
}
