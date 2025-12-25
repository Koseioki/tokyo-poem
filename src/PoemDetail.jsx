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
        <section className="poem-container">
            <Link to="/" className="back-link">Back to list</Link>
            {/* <ul className="poem-list"> */}
            {/* <Poem id={poem.id} lines={poem.lines} /> */}
            {/* </ul> */}

            {poem.lines.map((line, index) => (
                <span key={`${line}-${index}`}>
                    {line}
                    {index < poem.lines.length - 1 && <br />}
                </span>
            ))}
        </section>
    )
}
