import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const BOOT_LINES = [
  '> INITIALIZING EB//DARKNET v6.7...',
  '> LOADING ENCRYPTION MODULES............[OK]',
  '> BYPASSING SECURITY PROTOCOLS...........[OK]',
  '> SCRAMBLING VOICE SIGNATURE.............[OK]',
  '> DEPLOYING CHAOS ALGORITHMS.............[OK]',
  '> TARGET ACQUIRED: THE BASKET VAULT.....[OK]',
  '> SYSTEM STATUS: FULLY OPERATIONAL',
  '> ',
  '> WELCOME TO MY NETWORK.',
  '> YOU HAVE BEEN EXPECTED.',
]

const BANDIT_ASCII = `  ██████╗  █████╗ ███╗  ██╗██████╗ ██╗████████╗
  ██╔══██╗██╔══██╗████╗ ██║██╔══██╗██║╚══██╔══╝
  ██████╔╝███████║██╔██╗██║██║  ██║██║   ██║
  ██╔══██╗██╔══██║██║╚████║██║  ██║██║   ██║
  ██████╔╝██║  ██║██║ ╚███║██████╔╝██║   ██║
  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚══╝╚═════╝ ╚═╝   ╚═╝  `

const SCRAMBLE_CHARS = '█▓▒░╔╗╚╝║═╠╣╦╩╬▄▀■□▪▫◘◙◦'

function scrambleText(real, level) {
  return real.split('').map(c => {
    if (c === ' ' || c === '\n') return c
    return Math.random() < level
      ? SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
      : c
  }).join('')
}

const THREAT_LEVEL_MESSAGES = [
  'MINIMAL — You found the website. Impressive for a 6-year-old.',
  'LOW — Still cute. Keep trying.',
  'MODERATE — Getting warmer...',
  'ELEVATED — The Bandit is watching.',
  'CRITICAL — You think you can beat me?!',
]

export default function Home() {
  const [bootLines, setBootLines] = useState([])
  const [showMain, setShowMain] = useState(false)
  const [threatLevel, setThreatLevel] = useState(0)
  const [glitchActive, setGlitchActive] = useState(false)
  const [accessCode, setAccessCode] = useState('')
  const [accessMsg, setAccessMsg] = useState('')
  const [leakOpen, setLeakOpen] = useState(false)
  const [asciiText, setAsciiText] = useState(scrambleText(BANDIT_ASCII, 1.0))
  const [asciiRevealed, setAsciiRevealed] = useState(false)
  const bootRef = useRef(null)

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < BOOT_LINES.length) {
        setBootLines(prev => [...prev, BOOT_LINES[i]])
        i++
      } else {
        clearInterval(interval)
        setTimeout(() => setShowMain(true), 600)
      }
    }, 220)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!showMain || asciiRevealed) return
    let level = 1.0
    const interval = setInterval(() => {
      level -= 0.015
      if (level <= 0) {
        setAsciiText(BANDIT_ASCII)
        setAsciiRevealed(true)
        clearInterval(interval)
      } else {
        setAsciiText(scrambleText(BANDIT_ASCII, level))
      }
    }, 70)
    return () => clearInterval(interval)
  }, [showMain, asciiRevealed])

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 300)
    }, 6000)
    return () => clearInterval(glitchInterval)
  }, [])

  useEffect(() => {
    const threatInterval = setInterval(() => {
      setThreatLevel(prev => (prev + 1) % THREAT_LEVEL_MESSAGES.length)
    }, 4000)
    return () => clearInterval(threatInterval)
  }, [])

  const handleAccessCode = (e) => {
    e.preventDefault()
    const code = accessCode.trim().toUpperCase()
    if (code === 'STRIKES' || code === 'STRIKE') {
      setAccessMsg('⚠ STRIKE CONFIRMED. Check the brown informant\'s clothing. — EB')
    } else if (code === 'BASKET THIEF STRIKES') {
      setAccessMsg('> Close — but the terminal only accepts ONE WORD. The last word of the decoded message. — EB')
    } else if (code === 'BASKET' || code === 'THIEF') {
      setAccessMsg('> That is part of the message, but not the CODE. The terminal requires the LAST WORD. — EB')
    } else if (code === 'WHITE RABBIT' || code === 'WHITERABBIT') {
      setAccessMsg('> OPERATION NAME CONFIRMED. But that is not the access code. Keep decoding. — EB')
    } else {
      setAccessMsg('✗ INCORRECT. Look around this page. Something is leaking data that shouldn\'t be. Find the hidden transmission.')
    }
  }

  return (
    <div className="home">
      {/* Boot sequence */}
      <div className={`boot-screen ${showMain ? 'boot-done' : ''}`} ref={bootRef}>
        <div className="boot-content">
          {bootLines.map((line, i) => (
            <div key={i} className="boot-line" style={{ animationDelay: `${i * 0.05}s` }}>
              {line}
            </div>
          ))}
          {!showMain && <span className="blink">█</span>}
        </div>
      </div>

      {/* Main content */}
      {showMain && (
        <div className="main-content">
          {/* Header */}
          <header className="site-header">
            <div className="header-left">
              <span className="logo">EB<span className="logo-slash">//</span>DARKNET</span>
              <span className="node-id">NODE-01 :: ACTIVE</span>
            </div>
            <div className="header-right">
              <span className="threat-label">THREAT LEVEL:</span>
              <span className="threat-value">{THREAT_LEVEL_MESSAGES[threatLevel]}</span>
            </div>
          </header>

          {/* Scrolling ticker */}
          <div className="ticker-wrap">
            <div className="ticker">
              <span>⚠ EASTER BASKETS HAVE BEEN SEIZED ⚠ &nbsp;&nbsp;&nbsp; OPERATION WHITE RABBIT :: ACTIVE &nbsp;&nbsp;&nbsp; ALL SECURITY PROTOCOLS HAVE BEEN BYPASSED &nbsp;&nbsp;&nbsp; THE BANDIT CANNOT BE STOPPED &nbsp;&nbsp;&nbsp; STELLA AND HOBBES HAVE BEEN COMPROMISED &nbsp;&nbsp;&nbsp; RESISTANCE IS FUTILE &nbsp;&nbsp;&nbsp; VERSION 6.7 ONLINE &nbsp;&nbsp;&nbsp; ⚠ EASTER BASKETS HAVE BEEN SEIZED ⚠ &nbsp;&nbsp;&nbsp;</span>
              <span>⚠ EASTER BASKETS HAVE BEEN SEIZED ⚠ &nbsp;&nbsp;&nbsp; OPERATION WHITE RABBIT :: ACTIVE &nbsp;&nbsp;&nbsp; ALL SECURITY PROTOCOLS HAVE BEEN BYPASSED &nbsp;&nbsp;&nbsp; THE BANDIT CANNOT BE STOPPED &nbsp;&nbsp;&nbsp; STELLA AND HOBBES HAVE BEEN COMPROMISED &nbsp;&nbsp;&nbsp; RESISTANCE IS FUTILE &nbsp;&nbsp;&nbsp; VERSION 6.7 ONLINE &nbsp;&nbsp;&nbsp; ⚠ EASTER BASKETS HAVE BEEN SEIZED ⚠ &nbsp;&nbsp;&nbsp;</span>
            </div>
          </div>

          <div className="grid-layout">
            {/* LEFT COLUMN */}
            <div className="left-col">
              {/* Main ransom message */}
              <div className={`ransom-box ${glitchActive ? 'glitch' : ''}`}>
                <div className="box-header">
                  <span className="box-title">// TRANSMISSION FROM: THE EASTER BANDIT</span>
                  <span className="box-badge red">INCOMING</span>
                </div>
                <div className="ransom-ascii">
{asciiText}
                </div>
                <div className="ransom-text">
                  <p><span className="red-text">ATTENTION SMALL HUMANS.</span></p>
                  <p>&nbsp;</p>
                  <p>Your Easter baskets are gone. I have them. All of them.</p>
                  <p>Yes, even the good chocolate.</p>
                  <p>&nbsp;</p>
                  <p>You think because you stopped me before that you can do it again?</p>
                  <p>Last time you got lucky, but this year I have upgraded my systems to the impenetrable <span className="green-bright">VERSION 6.7</span>.</p>
                  <p>I have infiltrated your network. I have recruited your pets.</p>
                  <p>I have hidden the baskets behind <span className="red-text">8 ENCRYPTED FIREWALLS</span>.</p>
                  <p>&nbsp;</p>
                  <p>To recover what is yours, you must crack every node.</p>
                  <p>Start with what's hidden. You're already looking at it.</p>
                  <p>&nbsp;</p>
                  <p className="text-dim">— The Easter Bandit<br/>
                  <span className="text-dimmer">Voice scrambled. Identity protected. Bandana secured.</span></p>
                </div>
              </div>

              {/* System stats */}
              <div className="stats-box">
                <div className="box-header">
                  <span className="box-title">// OPERATION STATUS</span>
                </div>
                <div className="stats-grid">
                  <div className="stat">
                    <span className="stat-label">FIREWALLS REMAINING</span>
                    <span className="stat-value red-text">8 / 8</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">BASKETS SECURED</span>
                    <span className="stat-value red-text">3 / 3</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">INFORMANTS ACTIVE</span>
                    <span className="stat-value amber-text">6 (2 DOGS, 4 CATS)</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">BANDIT VERSION</span>
                    <span className="stat-value green-bright">6.7 — MAXIMUM CHAOS</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">VOICE SCRAMBLER</span>
                    <span className="stat-value green-bright">ONLINE</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">RED BANDANA STATUS</span>
                    <span className="stat-value green-bright">SECURED TO FACE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="right-col">
              {/* Access terminal */}
              <div className="terminal-box">
                <div className="box-header">
                  <span className="box-title">// ACCESS TERMINAL</span>
                  <span className="box-badge green">AWAITING INPUT</span>
                </div>
                <p className="terminal-hint">Decode the hidden transmission. Enter the ACCESS CODE below.</p>
                <form onSubmit={handleAccessCode} className="access-form">
                  <div className="input-row">
                    <span className="prompt">&gt; </span>
                    <input
                      type="text"
                      value={accessCode}
                      onChange={e => setAccessCode(e.target.value)}
                      placeholder="ENTER CODE..."
                      className="code-input"
                      autoComplete="off"
                      spellCheck="false"
                    />
                  </div>
                  <button type="submit" className="submit-btn">TRANSMIT</button>
                </form>
                {accessMsg && (
                  <div className="access-response">
                    <span className="amber-text">{accessMsg}</span>
                  </div>
                )}
              </div>

              {/* Intercepted comms */}
              <div className="comms-box">
                <div className="box-header">
                  <span className="box-title">// INTERCEPTED COMMS LOG</span>
                </div>
                <div className="comms-log">
                  <div className="comm-entry">
                    <span className="comm-time">[06:32:14]</span>
                    <span className="comm-text">Stella — "Evidence secured. Treats delivered. They suspect nothing."</span>
                  </div>
                  <div className="comm-entry">
                    <span className="comm-time">[06:47:03]</span>
                    <span className="comm-text">Hobbes — "Making rounds at the agreed upon location. Container locked down."</span>
                  </div>
                  <div className="comm-entry">
                    <span className="comm-time">[07:01:55]</span>
                    <span className="comm-text">Charlie — "Everything is set. PO combination confirmed."</span>
                  </div>
                  <div className="comm-entry">
                    <span className="comm-time">[07:14:22]</span>
                    <span className="comm-text">Juneau — "Recon complete. Platform ready for deployment."</span>
                  </div>
                  <div className="comm-entry">
                    <span className="comm-time">[07:28:41]</span>
                    <span className="comm-text">Max — "All quiet at the BGE. They can't stand the heat."</span>
                  </div>
                  <div className="comm-entry">
                    <span className="comm-time">[07:45:00]</span>
                    <span className="comm-text red-text">EB — "Launch sequence initiated. White Rabbit is live."</span>
                  </div>
                  <div className="comm-entry">
                    <span className="comm-time">[08:00:00]</span>
                    <span className="comm-text amber-text">Finnie — {`"Definitely watching from the couch. I don't trust these other "agents"."`}</span>
                  </div>
                </div>
              </div>

              {/* Navigation nodes */}
              <div className="nodes-box">
                <div className="box-header">
                  <span className="box-title">// NETWORK NODES</span>
                </div>
                <div className="nodes-list">
                  <div className="node active">
                    <span className="node-dot green"></span>
                    <span>NODE-01 :: HOMEPAGE</span>
                    <span className="node-status green-bright">ACTIVE</span>
                  </div>
                  <div className="node leaked" onClick={() => setLeakOpen(!leakOpen)}>
                    <span className="node-dot red blink"></span>
                    <span className="leak-label">LEAKED FILE :: CLASSIFIED</span>
                    <span className="node-status red-text">{leakOpen ? 'OPEN' : 'TAP TO VIEW'}</span>
                  </div>
                  <div className="node">
                    <span className="node-dot amber"></span>
                    <span>NODE-04 :: CORRUPTED FILE</span>
                    <span className="node-status amber-text">ENCODED</span>
                  </div>
                  <div className="node">
                    <span className="node-dot red"></span>
                    <span>NODE-07 :: BANDIT COMMS</span>
                    <Link to="/contact" className="node-link">ACCESS</Link>
                  </div>
                  <div className="node locked">
                    <span className="node-dot dim"></span>
                    <span>NODE-08 :: VAULT LOCATION</span>
                    <span className="node-status text-dim">LOCKED</span>
                  </div>
                  <div className="node locked">
                    <span className="node-dot dim"></span>
                    <span>NODE-09 :: FINAL DECODE</span>
                    <span className="node-status text-dim">LOCKED</span>
                  </div>
                </div>
              </div>

              {/* Leaked file panel */}
              {leakOpen && (
                <div className="leak-panel">
                  <div className="box-header">
                    <span className="box-title">// SECURITY AUDIT LOG :: CLASSIFIED</span>
                    <span className="box-badge red">DATA LEAK</span>
                  </div>
                  <div className="leak-body">
                    <p className="text-dim">So you found the leaked file. Good. Most people never look.</p>
                    <p className="text-dim">But looking is not the same as understanding.</p>
                    <p>&nbsp;</p>
                    <p>Below is an intercepted transmission from Agent Stella.</p>
                    <p>It is encoded in <span className="amber-text">HEXADECIMAL</span> (base 16).</p>
                    <p>Each PAIR of hex digits represents one ASCII character.</p>
                    <p>&nbsp;</p>
                    <div className="leak-table">
                      <p className="green-bright">REFERENCE TABLE:</p>
                      <pre className="leak-hex-table">{
`A=41  B=42  C=43  D=44  E=45  F=46  G=47  H=48
I=49  J=4A  K=4B  L=4C  M=4D  N=4E  O=4F  P=50
Q=51  R=52  S=53  T=54  U=55  V=56  W=57  X=58
Y=59  Z=5A  (space=20)`
                      }</pre>
                    </div>
                    <p>&nbsp;</p>
                    <p className="amber-text">ENCODED TRANSMISSION:</p>
                    <p className="leak-cipher green-bright">42 41 53 4B 45 54 20 54 48 49 45 46 20 53 54 52 49 4B 45 53</p>
                    <p>&nbsp;</p>
                    <p>Decode it. That is your first instruction.</p>
                    <p>Then return to the <span className="amber-text">ACCESS TERMINAL</span> above.</p>
                    <p>The terminal requires a code — the <span className="red-text">LAST WORD</span> of the decoded message.</p>
                    <p>&nbsp;</p>
                    <p className="text-dim">— EB (I really didn't think you'd look here.)</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <footer className="site-footer">
            <span>EB//DARKNET :: v6.7 :: ALL BASKETS BELONG TO THE BANDIT :: UNAUTHORIZED ACCESS IS ENCOURAGED</span>
          </footer>
        </div>
      )}
    </div>
  )
}
