import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import AnotherPage from "./pages/AnotherPage";
import MainPage from "./pages/MainPage";
import "./App.css";

const App = () => {
  return (
    <Router basename={BASE_PATH}>
      {/* If routing is been used, please be sure to assign the basename attribute the value of BASE_PATH for Routers/BrowersRouter.   */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path={`/another-page`} element={<AnotherPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
