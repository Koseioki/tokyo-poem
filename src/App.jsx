import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Header'
import About from './About'
import Home from './Home'

function App() {
  return (
      <Router basename={import.meta.env.PROD ? "/tokyo-poem" : "/"}>
        <div className="background">

          <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
        </div>
      </Router>

  )
}

export default App
