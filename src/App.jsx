import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductPage from "./pages/ProductPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product-info-zing-model" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
