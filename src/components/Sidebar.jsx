import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <Link to="/">🏠 Home</Link>

      <Link to="/explore">🔍 Explore</Link>

      <Link to="/create">➕ Create</Link>

      <Link to="/profile">👤 Profile</Link>

      <a href="#">❤️ Notifications</a>

      <a href="#">💬 Messages</a>

      <a href="#">⚙️ Settings</a>

    </aside>
  );
}

export default Sidebar;