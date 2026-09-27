import greekSalad from './images/greek-salad.jpg';
import bruschetta from './images/bruschetta.svg';
import lemonDessert from './images/lemon-dessert.jpg';

const specials = [
  {
    name: 'Greek Salad',
    price: '$12.99',
    image: greekSalad,
    alt: 'Greek salad',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    name: 'Bruschetta',
    price: '$7.99',
    image: bruschetta,
    alt: 'Bruschetta',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    name: 'Lemon Dessert',
    price: '$6.99',
    image: lemonDessert,
    alt: 'Lemon dessert',
    description:
      'Our signature lemon dessert combines a light, buttery crust with a smooth lemon filling for the perfect balance of sweet and citrus.',
  },
];

function Specials() {
  return (
    <section className="specials" id="menu">
      <div className="specials-container">
        <div className="specials-title-bar">
          <h2>This Week's Specials</h2>

          <button className="btn-primary" type="button">
            Order Online
          </button>
        </div>

        <div className="specials-items">
          {specials.map((special) => (
            <div className="col" key={special.name}>
              <div className="col-img">
                <img src={special.image} alt={special.alt} />
              </div>

              <div className="col-container">
                <div className="col-content">
                  <div className="col-title">
                    <h3>{special.name}</h3>
                    <p className="col-price">{special.price}</p>
                  </div>

                  <p className="col-text">{special.description}</p>
                </div>

                <button className="btn-secondary" type="button">
                  Order Delivery{' '}
                  <i
                    className="fa-solid fa-person-biking"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;


