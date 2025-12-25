import poems from './data/poems.json'
import { Poem } from './Poem'

export default function Home() {
  return (
    <section className="poem-container">
      <h1>最近のポエム</h1>
      <ul className="poem-list">
        {poems.map((poem) => (
          <Poem key={poem.id} id={poem.id} lines={poem.lines} />
        ))}
      </ul>
    </section>
  )
}
