import { FaStar } from "react-icons/fa";
import "./tour.css";

const SingleTourReviews = ({ reviews }) => {
  const featuredReviews = [];

  while (featuredReviews.length < 3) {
    const randomNum = Math.floor(Math.random() * 15);
    if (!featuredReviews.includes(reviews[randomNum])) {
      featuredReviews.push(reviews[randomNum]);
    }
  }

  return (
    <div className="review-field">
      {featuredReviews.map((review, index) => {
        return (
          <div className="review" key={index}>
            <div className="name-and-avatar">
              <img
                className="review-avatar"
                src={`${process.env.PUBLIC_URL}/images/${review.img}`}
                alt={`photo of ${review.name}`}
              />
              <h5 className="review-name">{review.name}</h5>
            </div>
            <div className="text-and-rating">
              <div className="date-and-rating">
                <div className="stars">
                  {[...Array(5)].map((star, index) => {
                    return <FaStar className="star" key={index} />;
                  })}
                </div>
                <p className="review-date">{review.date}</p>
              </div>
              <p className="review-text">{review.review}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleTourReviews;
