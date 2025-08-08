import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Header'
import About from './About'

function Home() {
  return (
    <main>
      <section className="poem-container">
        <p>赤ちゃんのこといつも「ｴｹﾁｪﾝ」とか「赤子」とかふざけた呼び方して、全然「赤ちゃん」と思ったことないな</p>
        <p>散歩してて羊がいたので羊だ！と思って近づいたら、岩だった
        </p>
        <p>いいアパートの名前<br />
          犬見（いぬみ）荘</p>
        <p>犬を眺めるの良くないかもしれない、犬を眺めると、遊べると思って犬が寄ってきてしまうから
        </p>
        <p>ケーキが食べたいと思ってケーキを焼いたら友達からケーキを貰ってしまい、いま家にケーキが二個ある<br />本当に、嬉しい

        </p>
      </section>
    </main>
  )
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
