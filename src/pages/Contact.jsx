import { useState } from 'react'
import './Contact.css'

// Auto-reply messages — randomly selected so each submission feels unique
const BANDIT_REPLIES = [
  `TRANSMISSION RECEIVED. I'm impressed you made it this far — truly.
Not impressed enough to give up, obviously. But still.

You've cracked 6 nodes. Two remain.
The vault is closer than you think.
It's above you. Literally.

The final cipher awaits in the PACKOUT.
Crack the combination. You know how.
The platform gave you what you need.

Do NOT think this means I respect you.
I respect no one. I am the Easter Bandit.

— EB v6.7`,

  `Oh good, you found the comms terminal.
Stella and Hobbes told me you would eventually.
Traitors. Both of them. I gave them SO many treats.

Here is a hint, because I am feeling generous today:
The last two steps both involve going UP.
Up to the box. Up to the vault.
Everything is above you.

The baskets are waiting. I am waiting.
Waiting for you to FAIL. Which you won't.
Which is annoying.

— EB`,

  `MESSAGE INTERCEPTED AND LOGGED.

You want the baskets? Here is what I will tell you:
The combination lock on the Packout is 4 digits.
You found those 4 digits on the platform in the woods.
Think carefully. You wrote them down. Right?

You did write them down... right?

Once you open the Packout, the final cipher is inside.
Decode it. Go UP. The baskets are yours.
This does not mean I have lost. I have merely...
been temporarily delayed.

See you next year. I'll be back.
With VERSION 7.0.

— EB`,
]

export default function Contact() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [reply, setReply] = useState('')
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

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

    // Pick a reply based on message content for some variation
    let selectedReply = BANDIT_REPLIES[Math.floor(Math.random() * BANDIT_REPLIES.length)]

    // Context-aware replies
    const msg = message.toLowerCase()
    if (msg.includes('stella') || msg.includes('hobbes') || msg.includes('dog')) {
      selectedReply = `The dogs work for ME now. Stella especially. Very professional.
She accepted payment in the form of one (1) ear scratch and unlimited treats.
Your loyalty system is broken.

But since you asked about the informants — here is a hint:
Check what Stella wears. She carries something important.

— EB`
    } else if (msg.includes('please') || msg.includes('give back') || msg.includes('return')) {
      selectedReply = `Pleading. Interesting strategy.
I respect the attempt. I do not respect the result.
The baskets remain mine until you earn them back.

You're getting close. Keep going.
Check the PACKOUT when you have the combination.

— EB`
    } else if (msg.includes('combination') || msg.includes('code') || msg.includes('lock')) {
      selectedReply = `Clever. You're thinking ahead.
The combination is 4 digits. You found them on the elevated platform.
The platform in the woods. 8 feet up. With a ladder.
You remember the ladder. Right?

Go back if you need to. I'm not going anywhere.
Neither are the baskets.

— EB`
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
          <p>By submitting this form, you confirm that you are not a 6-year-old. You are older now. Do better.</p>
        </div>

        {!submitted ? (
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
