import marioAndAdrian from './images/mario-and-adrian-a.webp';
import restaurantChef from './images/restaurant-chef-b.webp';

function Chicago() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About Little Lemon</h2>

          <p>
            Based in Chicago, Illinois, Little Lemon is a family-owned
            Mediterranean restaurant owned by Italian brothers Mario and
            Adrian, who moved to the United States to pursue their shared
            dream of owning a restaurant. The restaurant focuses on
            traditional recipes with a modern twist, drawing inspiration
            from Italian, Greek, and Turkish cuisine. Mario brings his
            experience as a chef in Italy and family recipes to the kitchen,
            while Adrian handles the restaurant’s marketing and led the
            effort to expand the menu beyond classic Italian dishes to
            include cuisines from across the Mediterranean. With 12–15
            seasonal menu items, a rustic and relaxed atmosphere, and
            moderate prices, Little Lemon is a welcoming destination for a
            meal any time of the day.
          </p>
        </div>

        <div className="about-images">
          <div className="about-image-1">
            <img
              src={marioAndAdrian}
              alt="Mario and Adrian, owners of Little Lemon"
            />
          </div>

          <div className="about-image-2">
            <img
              src={restaurantChef}
              alt="Mario preparing food"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chicago;

