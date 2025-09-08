import { NavLink} from "react-router-dom";
import { useTheme } from "../context/useTheme.js";
import { useState } from 'react'
import '../css/home.css'

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { toggleTheme } = useTheme();

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
      setIsMenuOpen(false);
    };

  return (
    <header className="header">
      {/* TODO: make the nav links responsive for mobile, add "GET /menu" that works like a humburger menu */}
      <nav className="nav">
        {/* Desktop navigation - hidden on mobile */}
        <div className="nav-desktop">
          <NavLink to="/" className="endpoint">GET /</NavLink>
          <NavLink to="/about" className="endpoint">GET /about</NavLink>
          <NavLink to="/projects" className="endpoint">GET /projects</NavLink>
          <NavLink to="/opensource" className="endpoint">GET /opensource</NavLink>
          <NavLink to="/contact" className="endpoint">POST /contact</NavLink>
        </div>

        {/* Mobile hamburger menu button */}
        <div className="nav-mobile">
          <button 
            className={`endpoint hamburger-menu ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            GET /menu
          </button>

          {/* Mobile navigation dropdown */}
          <div className={`nav-dropdown ${isMenuOpen ? 'open' : ''}`}>
            <NavLink 
              to="/" 
              className="endpoint" 
              onClick={closeMenu}
            >
              GET /
            </NavLink>
            <NavLink 
              to="/about" 
              className="endpoint" 
              onClick={closeMenu}
            >
              GET /about
            </NavLink>
            <NavLink 
              to="/projects" 
              className="endpoint" 
              onClick={closeMenu}
            >
              GET /projects
            </NavLink>
            <NavLink 
              to="/opensource" 
              className="endpoint" 
              onClick={closeMenu}
            >
              GET /opensource
            </NavLink>
            <NavLink 
              to="/contact" 
              className="endpoint" 
              onClick={closeMenu}
            >
              POST /contact
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="theme-toggle">
        <span className="toggle-label">theme</span>
        <div className="toggle-switch" onClick={toggleTheme}></div>
      </div>
    </header>
  );

}

export default Header