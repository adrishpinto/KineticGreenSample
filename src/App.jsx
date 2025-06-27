import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  if (isMobile) {
    return (
      <div className="flex items-center justify-center h-screen text-center px-4">
        <p className="text-lg font-semibold text-gray-700">
          This design is made for fullscreen desktop.
        </p>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product-info-zing-model" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
