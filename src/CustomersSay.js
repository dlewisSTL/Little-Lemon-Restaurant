import emilyImage from './images/image-emily.jpg';
import thomasImage from './images/image-thomas.jpg';

const testimonials = [
  {
    name: 'Emily R.',
    title: 'Marketing Director',
    image: emilyImage,
    rating: 5,
    text: 'The food was fresh and full of flavor. Little Lemon has quickly become one of my favorite places to eat in Chicago.',
  },
  {
    name: 'Thomas S.',
    title: 'Chief Operating Officer',
    image: thomasImage,
    rating: 5,
    text: 'Excellent food and friendly service every time. The bruschetta alone is enough to keep me coming back.',
  },
  {
    name: 'Sarah M.',
    title: 'Graphic Designer',
    image: emilyImage,
    rating: 5,
    text: 'A welcoming atmosphere with delicious Mediterranean dishes. Everything we ordered tasted fresh and thoughtfully prepared.',
  },
  {
    name: 'Michael T.',
    title: 'Software Engineer',
    image: thomasImage,
    rating: 5,
    text: 'Great atmosphere, generous portions and wonderful flavors. The perfect spot for a relaxed dinner with friends.',
  },
];

function CustomersSay() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2>Testimonials</h2>

        <div className="testimonial-row">
          {testimonials.map((testimonial) => (
            <div className="testimonial-col" key={testimonial.name}>
              <div
                className="rating"
                aria-label={`${testimonial.rating} out of 5 stars`}
              >
                {[...Array(testimonial.rating)].map((_, index) => (
                  <i
                    className="fa-solid fa-star"
                    aria-hidden="true"
                    key={index}
                  ></i>
                ))}
              </div>

              <div className="author">
                <div className="author-image">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </div>

                <div className="author-details">
                  <p className="name">{testimonial.name}</p>
                  <p className="title">{testimonial.title}</p>
                </div>
              </div>

              <p className="testimonial-text">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;


