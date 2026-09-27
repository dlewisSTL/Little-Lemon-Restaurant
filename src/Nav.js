import { useState } from 'react';
import { Link } from 'react-router';
import logo from './images/logo-yellow.png';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);    
      return (
        <nav>
          <Link className="logo-link" to="/">
            <img
              className="logo"
              src={logo}
              alt="Little Lemon logo"
            />
          </Link>

          <button
              type="button"
              aria-label="Open navigation"
              aria-controls="primary-navigation"
              aria-expanded={isMenuOpen}
              className={`open-nav ${isMenuOpen ? 'hidden' : ''}`}
              onClick={() => setIsMenuOpen(true)}
            >
              <span>
                <i className="fa-solid fa-bars" aria-hidden="true"></i>
              </span>
            </button>

          <button
              type="button"
              aria-label="Close navigation"
              aria-controls="primary-navigation"
              className={`close-nav ${isMenuOpen ? 'visible' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>
                <i className="fa-solid fa-xmark" aria-hidden="true"></i>
              </span>
            </button>

          <ul
              className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}
              id="primary-navigation"
            >
              <li>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>

              <li>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>
                  About
                </a>
              </li>

              <li>
                <a href="#menu" onClick={() => setIsMenuOpen(false)}>
                  Menu
                </a>
              </li>

              <li>
                <Link to="/booking" onClick={() => setIsMenuOpen(false)}>
                  Reservations
                </Link>
              </li>

              <li>
                <a href="#order" onClick={() => setIsMenuOpen(false)}>
                  Order Online
                </a>
              </li>

              <li>
                <a href="#login" onClick={() => setIsMenuOpen(false)}>
                  Login
                </a>
              </li>
            </ul>
        </nav>
      );
}

export default Nav;



