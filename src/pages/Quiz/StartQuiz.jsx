import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../../context/context";
import tours_data from "../../data/tours.json";
import "./quiz.css";

const StartQuiz = () => {
  const { answers, setAnswers } = useGlobalContext();
  const [quizData, setQuizData] = useState([]);
  const [currQuestion, setCurrQuestion] = useState(0);

  const quiz = tours_data.quiz.questions;

  useEffect(() => {
    setQuizData(quiz[currQuestion]);
  }, [currQuestion]);

  const selectAnswer = (answer) => {
    setCurrQuestion(currQuestion + 1);
    setAnswers([...answers, answer]);
  };

  const quizAnswers =
    currQuestion > 4 ||
    quizData.possible_answers?.map((answer, index) => {
      return (
        <div className="single-answer" key={index}>
          <img
            onClick={() => selectAnswer(answer.score)}
            className="answer-img"
            src={`${process.env.PUBLIC_URL}/images/${answer.image}`}
            alt={`${answer.credit} ${answer.text}`}
          />
          <h5 className="headerCard answer-text">{answer.text}</h5>
        </div>
      );
    });

  return (
    <div className="quiz-active">
      {currQuestion > 4 ? (
        <Navigate to="/quiz-result" replace={true} />
      ) : (
        <>
          <div className="question">
            <h2 className="title-quiz">{quizData.question_title}</h2>
            <h5 className="text-quiz">{quizData.question}</h5>
            <p className="question-number">
              {quizData.id + 1}/<span>5</span>
            </p>
          </div>
          <div className="answer">{quizAnswers}</div>
        </>
      )}
    </div>
  );
};

export default StartQuiz;
