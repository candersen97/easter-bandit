import { useState, useEffect } from 'react'
import './Broadcast.css'

const BOOT_LINES = [
  '> EB//DARKNET v6.7 — SIGNAL HIJACK MODULE',
  '> SCANNING LOCAL NETWORK.............[OK]',
  '> INTERCEPTING DISPLAY OUTPUT........[OK]',
  '> OVERRIDING TV CONTROLS.............[OK]',
  '> DISABLING REMOTE................... [OK]',
  '> DEPLOYING RANSOM BROADCAST.........[OK]',
  '> ',
  '> BROADCAST ACTIVE. THEY CANNOT LOOK AWAY.',
]

export default function Broadcast() {
  const [bootLines, setBootLines] = useState([])
  const [showMain, setShowMain] = useState(false)
  const [showStatic, setShowStatic] = useState(false)
  const [glitchActive, setGlitchActive] = useState(false)

  // Boot sequence
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < BOOT_LINES.length) {
        setBootLines(prev => [...prev, BOOT_LINES[i]])
        i++
      } else {
        clearInterval(interval)
        // Flash static then show main
        setShowStatic(true)
        setTimeout(() => setShowMain(true), 400)
      }
    }, 300)
    return () => clearInterval(interval)
  }, [])

  // Periodic glitch
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 300)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="broadcast">
      {/* Boot sequence */}
      <div className={`bc-boot ${showMain ? 'done' : ''}`}>
        <div className="bc-boot-content">
          {bootLines.map((line, i) => (
            <div key={i} className="bc-boot-line" style={{ animationDelay: `${i * 0.05}s` }}>
              {line}
            </div>
          ))}
          {!showMain && <span className="blink">█</span>}
        </div>
      </div>

      {/* Static flash on transition */}
      {showStatic && <div className="bc-static" />}

      {/* Main broadcast content */}
      {showMain && (
        <div className="bc-main">
          {/* Alert ticker */}
          <div className="bc-alert-bar">
            <div className="bc-alert-ticker">
              <span>⚠ SIGNAL HIJACKED ⚠ &nbsp;&nbsp;&nbsp; THIS IS NOT A TEST &nbsp;&nbsp;&nbsp; EASTER BASKETS HAVE BEEN SEIZED &nbsp;&nbsp;&nbsp; OPERATION WHITE RABBIT IS LIVE &nbsp;&nbsp;&nbsp; ALL CHANNELS COMPROMISED &nbsp;&nbsp;&nbsp; ⚠ SIGNAL HIJACKED ⚠ &nbsp;&nbsp;&nbsp; THIS IS NOT A TEST &nbsp;&nbsp;&nbsp; EASTER BASKETS HAVE BEEN SEIZED &nbsp;&nbsp;&nbsp; OPERATION WHITE RABBIT IS LIVE &nbsp;&nbsp;&nbsp; ALL CHANNELS COMPROMISED &nbsp;&nbsp;&nbsp;</span>
              <span>⚠ SIGNAL HIJACKED ⚠ &nbsp;&nbsp;&nbsp; THIS IS NOT A TEST &nbsp;&nbsp;&nbsp; EASTER BASKETS HAVE BEEN SEIZED &nbsp;&nbsp;&nbsp; OPERATION WHITE RABBIT IS LIVE &nbsp;&nbsp;&nbsp; ALL CHANNELS COMPROMISED &nbsp;&nbsp;&nbsp; ⚠ SIGNAL HIJACKED ⚠ &nbsp;&nbsp;&nbsp; THIS IS NOT A TEST &nbsp;&nbsp;&nbsp; EASTER BASKETS HAVE BEEN SEIZED &nbsp;&nbsp;&nbsp; OPERATION WHITE RABBIT IS LIVE &nbsp;&nbsp;&nbsp; ALL CHANNELS COMPROMISED &nbsp;&nbsp;&nbsp;</span>
            </div>
          </div>

          {/* Header */}
          <div className="bc-header">
            <div className="bc-hijack-label">SIGNAL HIJACKED</div>
            <div className={`bc-title ${glitchActive ? 'glitch' : ''}`}>
              EB<span className="bc-title-slash">//</span>DARKNET
            </div>
            <div className="bc-version">OPERATION WHITE RABBIT :: v6.7 :: ACTIVE</div>
          </div>

          {/* ASCII art */}
          <pre className="bc-ascii">
{`  ██████╗  █████╗ ███╗  ██╗██████╗ ██╗████████╗
  ██╔══██╗██╔══██╗████╗ ██║██╔══██╗██║╚══██╔══╝
  ██████╔╝███████║██╔██╗██║██║  ██║██║   ██║
  ██╔══██╗██╔══██║██║╚████║██║  ██║██║   ██║
  ██████╔╝██║  ██║██║ ╚███║██████╔╝██║   ██║
  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚══╝╚═════╝ ╚═╝   ╚═╝  `}
          </pre>

          {/* Ransom message */}
          <div className={`bc-message-box ${glitchActive ? 'glitch' : ''}`}>
            <div className="bc-message-header">
              <span className="bc-message-label">// TRANSMISSION FROM: THE EASTER BANDIT</span>
              <span className="bc-message-badge">LIVE BROADCAST</span>
            </div>
            <div className="bc-message-body">
              <p><span className="red-text">ATTENTION.</span></p>
              <p>&nbsp;</p>
              <p>Your Easter baskets have been seized. All of them.</p>
              <p>Yes, even the good chocolate.</p>
              <p>&nbsp;</p>
              <p>I have upgraded my systems to the impenetrable <span className="green-bright">VERSION 6.7</span>.</p>
              <p>I have infiltrated your network. I have recruited your pets.</p>
              <p>I have hidden the baskets behind <span className="red-text">8 ENCRYPTED FIREWALLS</span>.</p>
              <p>&nbsp;</p>
              <p>You think you can stop me? <span className="amber-text">Prove it.</span></p>
            </div>
          </div>

          {/* Instruction */}
          <div className="bc-instruction">
            <div className="bc-instruction-title">YOUR FIRST MOVE</div>
            <p className="bc-instruction-text">
              Open a browser on your phone or laptop.<br />
              Navigate to the following address.<br />
              The first clue is on the website — but you will have to look <span className="amber-text">carefully</span>.<br />
              Not everything is visible on the surface.
            </p>
            <div className="bc-url-box">
              <span className="bc-url-label">TARGET URL</span>
              <span className="bc-url">easter-bandit.vercel.app</span>
            </div>
            <div className="bc-qr-placeholder">[ QR CODE COMING SOON ]</div>
            <p className="bc-hint">The source told you to look deeper. Right-click might help.</p>
          </div>

          {/* Status grid */}
          <div className="bc-status-grid">
            <div className="bc-status-item">
              <span className="bc-status-label">FIREWALLS ACTIVE</span>
              <span className="bc-status-value red-text">8 / 8</span>
            </div>
            <div className="bc-status-item">
              <span className="bc-status-label">BASKETS HELD</span>
              <span className="bc-status-value red-text">3 / 3</span>
            </div>
            <div className="bc-status-item">
              <span className="bc-status-label">INFORMANTS</span>
              <span className="bc-status-value amber-text">6 ACTIVE</span>
            </div>
            <div className="bc-status-item">
              <span className="bc-status-label">BANDIT STATUS</span>
              <span className="bc-status-value green-bright">ONLINE</span>
            </div>
            <div className="bc-status-item">
              <span className="bc-status-label">VOICE SCRAMBLER</span>
              <span className="bc-status-value green-bright">ENGAGED</span>
            </div>
            <div className="bc-status-item">
              <span className="bc-status-label">THREAT LEVEL</span>
              <span className="bc-status-value red-text">MAXIMUM</span>
            </div>
          </div>

          {/* Footer */}
          <div className="bc-footer">
            EB//DARKNET :: v6.7 :: THIS SIGNAL CANNOT BE STOPPED :: THE BANDIT IS EVERYWHERE
          </div>
        </div>
      )}
    </div>
  )
}
