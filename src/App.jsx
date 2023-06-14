import { Routes, Route } from "react-router-dom";
import SharedLayout from "./shared layout/SharedLayout";
import Home from "./pages/Home/Home";
import TourPage from "./pages/Single Tour/TourPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/tours/:id" element={<TourPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
