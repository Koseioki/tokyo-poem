import { NavLink } from 'react-router-dom'

export function Poem({ id, lines }) {

    return (
        <li>
            <NavLink to={`/poem/${id}`} className="poem-item">
                    {lines.map((line, index) => (
                        <span key={`${line}-${index}`}>
                            {line}
                            {index < lines.length - 1 && <br />}
                        </span>
                    ))}
            </NavLink>

        </li>
    )
}