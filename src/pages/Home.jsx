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
    if (code === 'STELLA' || code === 'HOBBES') {
      setAccessMsg('⚠ INFORMANT IDENTIFIED. Check their collar for further instructions. — EB')
    } else if (code === 'WHITE RABBIT' || code === 'WHITERABBIT') {
      setAccessMsg('> OPERATION NAME CONFIRMED. You know more than you should. — EB')
    } else {
      setAccessMsg('✗ INCORRECT. Did you even look at the source code? Disappointing.')
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
{`  ██████╗  █████╗ ███╗  ██╗██████╗ ██╗████████╗
  ██╔══██╗██╔══██╗████╗ ██║██╔══██╗██║╚══██╔══╝
  ██████╔╝███████║██╔██╗██║██║  ██║██║   ██║   
  ██╔══██╗██╔══██║██║╚████║██║  ██║██║   ██║   
  ██████╔╝██║  ██║██║ ╚███║██████╔╝██║   ██║   
  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚══╝╚═════╝ ╚═╝   ╚═╝  `}
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
                <p className="terminal-hint">Think you've cracked NODE-01? Enter the access code below.</p>
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
                    <span className="comm-text">Stella — "treat delivery confirmed. they suspect nothing."</span>
                  </div>
                  <div className="comm-entry">
                    <span className="comm-time">[06:47:03]</span>
                    <span className="comm-text">Hobbes — "baskets loaded. pond container secured."</span>
                  </div>
                  <div className="comm-entry">
                    <span className="comm-time">[07:01:55]</span>
                    <span className="comm-text">Charlie — "packout box. combination set. 4 digits."</span>
                  </div>
                  <div className="comm-entry">
                    <span className="comm-time">[07:14:22]</span>
                    <span className="comm-text">Juneau — "platform in woods confirmed. clue is up high."</span>
                  </div>
                  <div className="comm-entry">
                    <span className="comm-time">[07:28:41]</span>
                    <span className="comm-text">Max — "BGE secured. feeling warm about this plan."</span>
                  </div>
                  <div className="comm-entry">
                    <span className="comm-time">[07:45:00]</span>
                    <span className="comm-text red-text">EB — "OPERATION WHITE RABBIT is a go. 6.7 activated."</span>
                  </div>
                  <div className="comm-entry">
                    <span className="comm-time">[08:00:00]</span>
                    <span className="comm-text amber-text">Finnie — "coming home from college just in time to watch them fail."</span>
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
