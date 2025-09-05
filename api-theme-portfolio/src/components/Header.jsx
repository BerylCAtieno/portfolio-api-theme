import { NavLink, Link } from "react-router-dom";
import { useTheme } from "../context/useTheme.js";
import '../css/home.css'

function Header() {

    const { toggleTheme } = useTheme();

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="endpoint">GET /</Link>
        <NavLink to="/about" className="endpoint">GET /about</NavLink>
        <NavLink to="/projects" className="endpoint">GET /projects</NavLink>
        <NavLink to="/opensource" className="endpoint">GET /opensource</NavLink>
        <NavLink to="/contact" className="endpoint">POST /contact</NavLink>
      </nav>

      <div className="theme-toggle">
        <span className="toggle-label">theme</span>
        <div className="toggle-switch" onClick={toggleTheme}></div>
      </div>
    </header>
  );

}

export default Header