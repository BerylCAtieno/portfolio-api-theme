import { Link } from "react-router-dom";
import { useTheme } from "../context/useTheme.js";
import '../css/home.css'

function Header() {

    const { toggleTheme } = useTheme();

  return (
    <header className="header">
      <nav className="nav">
  <Link to="/about" className="endpoint">GET /about</Link>
  <Link to="/projects" className="endpoint">GET /projects</Link>
  <Link to="/opensource" className="endpoint">GET /opensource</Link>
  <Link to="/contact" className="endpoint">POST /contact</Link>
      </nav>

      <div className="theme-toggle">
        <span className="toggle-label">theme</span>
        <div className="toggle-switch" onClick={toggleTheme}></div>
      </div>
    </header>
  );

}

export default Header