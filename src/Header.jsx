import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <NavLink to="/" className="title">
      東京ポエム
      </NavLink>
      <nav>
        <NavLink to="/about" className="nav-link">このページについて</NavLink>
      </nav>
    </header>
  );
}