import { useGlobalContext } from "../../context/context";
import { Slide } from "react-slideshow-image";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import MediaQuery from "react-responsive";

import "react-slideshow-image/dist/styles.css";
import "./cards.css";

const FeaturedTours = () => {
  const { tours_data } = useGlobalContext();
  const featuredTours = tours_data.filter((tour) => tour.featured);

  return (
    <section className="c-featured">
      <h2 className="c-featured__heading">
        Featured <span className="c-featured__heading--highlight">tours</span>
      </h2>
      <p className="c-featured__text">
        Discover our hand-picked collection of the most exceptional tours around
        the world. These featured tours offer unique experiences, amazing
        service, and unforgettable memories.
      </p>
      <Slide
        infinite={true}
        prevArrow={
          <div className="custom-prev-arrow">
            <FaChevronLeft />
          </div>
        }
        nextArrow={
          <div className="custom-next-arrow">
            <FaChevronRight />
          </div>
        }
      >
        {featuredTours.map((tour, index) => (
          <div key={index} className="slide">
            <div className="card">
              <div
                className="slide-image"
                style={{
                  backgroundImage: `url('/images/${tour.img}')`,
                }}
              >
                <div className="slide-description">
                  <h3>{tour.name}</h3>
                  <p>{tour.info}</p>
                  <button className="btn">Read more</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </section>
  );
};

export default FeaturedTours;
