import heroImage from './images/restauranfood.webp';
import { Link } from 'react-router';

function CallToAction() {
  return (
    <section className="hero" id="home">
      <div className="hero-content-container">
        <div className="hero-text-container">
          <h1>Little Lemon</h1>
          <p className="title-sub">Chicago</p>
          <p className="title-text">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link className="btn-primary" to="/booking">
              Reserve a Table
            </Link>
        </div>

        <div className="hero-image-container">
          <div className="hero-image">
            <img src={heroImage} alt="Chef serving food" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;