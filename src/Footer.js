import footerLogo from './images/logo-white-vertical.png';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={footerLogo} alt="Little Lemon logo" />
        </div>

        <div className="footer-links">
          <p className="footer-title">Navigation</p>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#reservations">Reservations</a>
          <a href="#order">Order Online</a>
          <a href="#login">Login</a>
        </div>

        <div className="footer-contact">
          <p className="footer-title">Contact</p>
          <p className="contact">
            6765 Broadway Parkway Chicago, IL 60676
          </p>
          <p className="contact">(555) 555-5555</p>
          <p className="contact">info@littlelemon.com</p>
        </div>

        <div className="footer-social">
          <p className="footer-title">Social Media</p>

          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <i
                className="fa-brands fa-square-facebook"
                aria-hidden="true"
              ></i>
            </a>

            <a href="#" aria-label="LinkedIn">
              <i
                className="fa-brands fa-linkedin"
                aria-hidden="true"
              ></i>
            </a>

            <a href="#" aria-label="Instagram">
              <i
                className="fa-brands fa-square-instagram"
                aria-hidden="true"
              ></i>
            </a>

            <a href="#" aria-label="X">
              <i
                className="fa-brands fa-square-x-twitter"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

