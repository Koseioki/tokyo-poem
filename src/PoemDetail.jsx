import { Link, useParams } from 'react-router-dom'
import poems from './data/poems.json'
import { Poem } from './Poem'

export default function PoemDetail() {

    const { id } = useParams()
    const poem = poems.find((entry) => entry.id === id)

    if (!poem) {
        return (
            <section className="poem-container">
                <Link to="/" className="back-link">Back to list</Link>
                <p>Sorry, that poem was not found.</p>
            </section>
        )
    }

    return (
        <section className="poem-container poem-container-padding">
            <div>
            <Link to="/" className="back-link">一覧へ戻る</Link>
            </div>

<div className="poem-item">
            {poem.lines.map((line, index) => (
                <span key={`${line}-${index}`}>
                    {line}
                    {index < poem.lines.length - 1 && <br />}
                </span>
            ))}
            </div>
        </section>
    )
}
