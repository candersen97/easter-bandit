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

          {/* Instruction */}
          <div className="bc-instruction">
            <div className="bc-instruction-title">YOUR FIRST MOVE</div>
            <div className="bc-qr">
              {/* Sliced image layers for scramble effect */}
              <div className="bc-qr-scramble">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`bc-qr-slice bc-qr-slice-${i}`}
                    style={{
                      backgroundImage: 'url(/qr-code.png)',
                      backgroundSize: '200px 200px',
                      backgroundPosition: `0 ${-i * 25}px`,
                      top: `${i * 25}px`,
                    }}
                  />
                ))}
              </div>
            </div>
            <p className="bc-hint">Scan destination carefully for classified intel.</p>
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
