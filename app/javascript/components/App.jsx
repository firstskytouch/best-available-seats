import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./header";

import Home from "./Home";

const App = (props) => (
  <div>
    <Router>
      <Header />
      <Routes>
        <Route path="/" extract element={<Home />} />
        <Route path="/seats" extract element={<Home />} />
        <Route path="/movie" extract element={<Home />} />
      </Routes>
    </Router>
  </div>
);

export default App;
