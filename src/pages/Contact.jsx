import { useState } from 'react'
import './Contact.css'

// Name-specific replies with embedded codes
const NAME_REPLIES = {
  simon: `AGENT SIMON. Identified. The youngest.
Do not be fooled — the Bandit does not
underestimate you. That would be a mistake.

I considered recruiting Pumpkin to my network.
But guinea pigs are impossible to negotiate with.
They only care about lettuce. I respect that.

Your COMMS CODE is: 1102

Write it down. Guard it. You will need it later.
Each agent receives a different code.
ALL THREE are required to open the final lock.

— EB v6.7`,

  lucy: `AGENT LUCY. Identified. The middle child.
The Bandit has been watching. You're resourceful.
Too resourceful. It makes me uncomfortable.

I attempted to infiltrate your room for recon
but I could not get past the 400 stuffed animals.
Seriously. How many does one person need?
They outnumber my entire spy network.

Your COMMS CODE is: 2011

Write it down. Guard it. You will need it later.
Each agent receives a different code.
ALL THREE are required to open the final lock.

— EB v6.7`,

  chloe: `AGENT CHLOE. Identified. The eldest.
The Bandit expected you to lead this operation.

I must say — Finnie is the finest agent in my
network and I have YOU to thank for raising her.
A well-parented cat is a dangerous cat.
She sends her regards from college. Or from
wherever she is napping right now.

Your COMMS CODE is: 1020

Write it down. Guard it. You will need it later.
Each agent receives a different code.
ALL THREE are required to open the final lock.

— EB v6.7`,
}

const UNAUTHORIZED_REPLY = `USER NOT RECOGNIZED.

The Bandit's comms system requires a KNOWN AGENT.
Only three agents are authorized on this channel.

Type your REAL NAME. First name only.
The Bandit knows who you are.

— EB v6.7`

export default function Contact() {
  const [authenticated, setAuthenticated] = useState(false)
  const [authCode, setAuthCode] = useState('')
  const [authError, setAuthError] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [reply, setReply] = useState('')
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleAuth = (e) => {
    e.preventDefault()
    const code = authCode.trim()
    if (code === '631') {
      setAuthenticated(true)
      setAuthError('')
    } else {
      setAuthError('✗ AUTHENTICATION FAILED. That is not the 3-digit code. Go back to Firewall 02 if you lost it.')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) {
      setError('> ERROR: Both fields required. The Bandit will not respond to incomplete transmissions.')
      return
    }
    setSending(true)
    setError('')

    // Simulate transmission delay for dramatic effect
    await new Promise(r => setTimeout(r, 2200))

    // Match name to known agents
    const agentName = name.trim().toLowerCase()
    let selectedReply = UNAUTHORIZED_REPLY

    if (agentName.includes('simon') || agentName.includes('simom') || agentName.includes('simin')) {
      selectedReply = NAME_REPLIES.simon
    } else if (agentName.includes('lucy') || agentName.includes('luci') || agentName.includes('luce')) {
      selectedReply = NAME_REPLIES.lucy
    } else if (agentName.includes('chloe') || agentName.includes('chloé') || agentName.includes('chole') || agentName.includes('cloe')) {
      selectedReply = NAME_REPLIES.chloe
    }

    setReply(selectedReply)
    setSending(false)
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      <header className="contact-header">
        <span className="cf-logo">EB<span className="red-text">//</span>DARKNET</span>
        <span className="cf-node">NODE-07 :: BANDIT COMMS</span>
        <span className="cf-status status-amber">MONITORED</span>
      </header>

      <div className="contact-body">
        <div className="contact-warning">
          <p><span className="amber-text">⚠ NOTICE:</span> All transmissions are logged and monitored by the Easter Bandit.</p>
          <p>This channel is encrypted. Authentication is required before transmission.</p>
        </div>

        {!authenticated ? (
          <div className="auth-box">
            <div className="box-header">
              <span className="box-title">// AUTHENTICATION REQUIRED</span>
              <span className="box-badge red">LOCKED</span>
            </div>
            <div className="auth-content">
              <p>This comms channel is encrypted with a 3-digit security code.</p>
              <p className="text-dim">You solved it at Firewall 02 — Stella's collar. You did write it down... right?</p>
              <form onSubmit={handleAuth} className="auth-form">
                <div className="input-row">
                  <span className="prompt">&gt; </span>
                  <input
                    type="text"
                    value={authCode}
                    onChange={e => setAuthCode(e.target.value)}
                    placeholder="ENTER 3-DIGIT CODE..."
                    className="form-input"
                    maxLength={3}
                    autoComplete="off"
                    spellCheck="false"
                  />
                </div>
                <button type="submit" className="form-submit">AUTHENTICATE</button>
              </form>
              {authError && <p className="form-error">{authError}</p>}
            </div>
          </div>
        ) : !submitted ? (
          <div className="contact-form-box">
            <div className="box-header">
              <span className="box-title">// TRANSMIT MESSAGE TO: THE EASTER BANDIT</span>
              <span className="box-badge amber">OPEN CHANNEL</span>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label">&gt; AGENT DESIGNATION (your name):</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="ENTER NAME..."
                  className="form-input"
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <label className="form-label">&gt; TRANSMISSION CONTENT:</label>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="TYPE YOUR MESSAGE TO THE EASTER BANDIT..."
                  className="form-textarea"
                  rows={5}
                />
              </div>
              {error && <p className="form-error">{error}</p>}
              <button type="submit" className="form-submit" disabled={sending}>
                {sending ? '> TRANSMITTING.........' : '> SEND TRANSMISSION'}
              </button>
              {sending && (
                <div className="sending-status">
                  <span className="blink">█</span> ROUTING THROUGH ENCRYPTED CHANNELS...
                </div>
              )}
            </form>
          </div>
        ) : (
          <div className="reply-box">
            <div className="box-header">
              <span className="box-title">// INCOMING REPLY FROM: THE EASTER BANDIT</span>
              <span className="box-badge red">RECEIVED</span>
            </div>
            <div className="reply-header-info">
              <span className="text-dim">FROM: easter.bandit@darknet.eb</span>
              <span className="text-dim">TO: {name}</span>
              <span className="text-dim">VOICE SCRAMBLER: ACTIVE</span>
            </div>
            <pre className="reply-content">{reply}</pre>
            <div className="reply-footer">
              <button
                className="form-submit"
                onClick={() => { setSubmitted(false); setName(''); setMessage(''); setReply('') }}
              >
                &gt; SEND ANOTHER TRANSMISSION
              </button>
            </div>
          </div>
        )}

        <div className="contact-log">
          <div className="box-header">
            <span className="box-title">// RECENT TRANSMISSION LOG</span>
          </div>
          <div className="log-entries">
            <div className="log-entry">
              <span className="text-dim">[07:45:00]</span>
              <span className="amber-text">OPERATION WHITE RABBIT INITIATED</span>
            </div>
            <div className="log-entry">
              <span className="text-dim">[08:00:00]</span>
              <span>All 8 firewalls active. Baskets secured.</span>
            </div>
            <div className="log-entry">
              <span className="text-dim">[08:01:00]</span>
              <span>Comms channel open. Awaiting transmissions.</span>
            </div>
            <div className="log-entry">
              <span className="text-dim">[??:??:??]</span>
              <span className="text-dim">— YOUR TRANSMISSION WILL APPEAR HERE —</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
