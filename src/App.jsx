import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FirstGroup from "./components/FirstGroup";
import SecondGroup from "./components/SecondGroop";
import Footer from "./components/Footer";
import Check from "./Check";
import NotFound from "./js/NotFound"; // Страница 404

const HomePage = () => (
  <div>
    <FirstGroup />
    <SecondGroup /> {/* Теперь оба блока на одной странице */}
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar /> {/* Навбар всегда виден, кроме 404 */}
            <HomePage />
            <Footer />
          </>
        } />
        <Route path="*" element={<NotFound />} /> {/* Страница 404 */}
        <Route path="/check" element={<Check />} /> {/* Страница 404 */}
      </Routes>
    </Router>
  );
};

export default App;
