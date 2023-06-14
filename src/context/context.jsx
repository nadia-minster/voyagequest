import { createContext, useState, useContext } from "react";
import tours from "../data/tours.json";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [answers, setAnswers] = useState([]);
  const [bookedTour, setBookedTour] = useState([]);
  const [search, setSearch] = useState({});
  const tours_data = tours.tours_data;

  return (
    <GlobalContext.Provider
      value={{
        answers,
        setAnswers,
        bookedTour,
        setBookedTour,
        search,
        setSearch,
        tours_data,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
