import React from "react";
import { useEffect, useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/context";

const QuizResult = () => {
  const { answers, tours_data } = useGlobalContext();
  const [isCopied, setIsCopied] = useState(false);
  const [result, setResult] = useState(0);

  const score = answers.reduce((total, number) => total + number, 0);
  useEffect(() => {
    const findResult = () => {
      let closestIndex = 0;
      for (let i = 0; i < tours_data.length; i++) {
        if (
          Math.abs(tours_data[i].score - score) <
          Math.abs(tours_data[closestIndex].score - score)
        ) {
          closestIndex = i;
        }
        setResult(tours_data[closestIndex]);
      }
    };
    findResult();
  }, [tours_data]);

  const copy = () => {
    navigator.clipboard.writeText("QUIZ20");
    setIsCopied(true);
  };

  return (
    <div className="result-main">
      {result ? (
        <div className="result-overlay">
          <div className="result-field">
            <div className="display-tour">
              <img
                src={`${process.env.PUBLIC_URL}/images/${result.img}`}
                className="display-tour-img"
              />
              <div className="img-overlay"></div>
              <div className="display-tour-text">
                <h3>The perfect tour for you is...</h3>
                <h2>{result.name}</h2>
                <p>{result.info}</p>

                <div className="discount-code">
                  <span className="discount-span">QUIZ20</span>
                  <button className=" copy-btn" onClick={() => copy()}>
                    {!isCopied ? (
                      <FaCopy className="copy-icon" />
                    ) : (
                      <FaCheck className="copy-icon" />
                    )}
                  </button>
                </div>
                <Link to={`/tours/${result.id}`} replace={true}>
                  <button className="btn read-more-btn">Read More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default QuizResult;
