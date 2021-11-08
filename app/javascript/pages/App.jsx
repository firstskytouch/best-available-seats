import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/header";
import Booking from "./Booking";

import Home from "./Home";

const App = () => (
  <div>
    <Router>
      <Header />
      <Routes>
        <Route path="/" extract element={<Booking />} />
        <Route path="/seats" extract element={<Home />} />
        <Route path="/movie" extract element={<Home />} />
      </Routes>
    </Router>
  </div>
);

export default App;
