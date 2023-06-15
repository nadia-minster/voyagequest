import { Routes, Route } from "react-router-dom";
import SharedLayout from "./shared layout/SharedLayout";
import Home from "./pages/Home/Home";
import TourPage from "./pages/Single Tour/TourPage";
import StartQuiz from "./pages/Quiz/StartQuiz";
import QuizResult from "./pages/Quiz/QuizResult";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/tours/:id" element={<TourPage />} />
          <Route path="/start-quiz" element={<StartQuiz />} />
          <Route path="/quiz-result" element={<QuizResult />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
