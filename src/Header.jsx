import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1>東京ポエム</h1>
      <nav>
        {/* <NavLink to="/">ホーム</NavLink> */}
        <NavLink to="/about">このページについて</NavLink>
      </nav>
    </header>
  );
}