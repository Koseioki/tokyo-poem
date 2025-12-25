import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Header'
import About from './About'
import Home from './Home'
import PoemDetail from './PoemDetail'

function App() {
  return (
      <Router basename={import.meta.env.PROD ? "/tokyo-poem" : "/"}>
        <div className="background">

          <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/poem/:id" element={<PoemDetail />} />
            </Routes>
        </div>
      </Router>

  )
}

export default App
