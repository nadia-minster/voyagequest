import "./quiz.css";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const Quiz = () => {
  return (
    <section className="c-quiz">
      <article className="c-quiz__container">
        <img
          src={`${process.env.PUBLIC_URL}/images/quiz.jpg`}
          alt="camper van"
          className="c-quiz__container--image"
        />
        <div className="c-quiz__container--text">
          <h3>Answer 10 questions to find your perfect destination</h3>
          <p>
            Take this quiz and get a{" "}
            <span className="highlight">20% discount</span> on the tour you
            select!
          </p>
          <Link to={"/start-quiz"}>
            <button className="btn-quiz btn">
              Start quiz
              <FaPlay className="icon" />
            </button>
          </Link>
        </div>
      </article>
      <div className="green-section"></div>
    </section>
  );
};

export default Quiz;
