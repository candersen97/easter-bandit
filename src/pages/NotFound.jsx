import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="nf-content">
        <div className="nf-code">4<span className="red-text">0</span>4</div>
        <p className="nf-msg">NODE NOT FOUND</p>
        <p className="nf-sub">This node doesn't exist. Or maybe it does and you're not ready for it.</p>
        <p className="nf-sub text-dim">Either way, you shouldn't be here. Go back and keep looking.</p>
        <Link to="/" className="nf-link">← RETURN TO NODE-01</Link>
      </div>
    </div>
  )
}
