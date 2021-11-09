import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../components/Header";
import Booking from "./Booking";
import Genre from "./Genre";

import Movie from "./Movie";

const App = () => (
  <div>
    <Router>
      <Header />
      <Routes>
        <Route path="/" extract element={<Booking />} />
        <Route path="/genre" extract element={<Genre />} />
        <Route path="/movie" extract element={<Movie />} />
      </Routes>
    </Router>
  </div>
);

export default App;
