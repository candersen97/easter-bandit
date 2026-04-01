import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Broadcast from './pages/Broadcast.jsx'
import CorruptedFile from './pages/CorruptedFile.jsx'
import Contact from './pages/Contact.jsx'
import Guide from './pages/Guide.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tv" element={<Broadcast />} />
      <Route path="/node-04" element={<CorruptedFile />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/guide" element={<Guide />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
