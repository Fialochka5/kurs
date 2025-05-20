import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FirstGroup from "./components/FirstGroup";
import SecondGroup from "./components/SecondGroop";
import Footer from "./components/Footer";
import Check from "./Check";
import OfficeMatrix from "./components/Gallery";
import NotFound from "./js/NotFound"; // Страница 404

const HomePage = () => (
  <div>
     <Navbar />
    <FirstGroup />
    <SecondGroup /> {/* Теперь оба блока на одной странице */}
     <Footer />
  </div>
);
const GalleryPage = () => (
  <div>
    <Navbar />
    <OfficeMatrix />
    <Footer/> 
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/gallery" element={<GalleryPage />} /> {/* Галерея - осмотр*/}
        <Route path="*" element={<NotFound />} /> {/* Страница 404 */}
        <Route path="/check" element={<Check />} /> {/* Страница 404 проверка */}
      </Routes>
    </Router>
  );
};

export default App;
