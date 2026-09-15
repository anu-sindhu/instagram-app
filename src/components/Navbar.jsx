import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Instagram
      </Link>

      <input
        className="search"
        type="text"
        placeholder="Search"
      />

      <div className="nav-icons">
        <Link to="/">🏠</Link>
        <Link to="/explore">🔍</Link>
        <Link to="/create">➕</Link>
        <span>❤️</span>
        <Link to="/profile">👤</Link>
      </div>
    </nav>
  );
}

export default Navbar;