import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Connection from "./components/Connection";
import FirstGroup from "./components/FirstGroup";
import SecondGroup from "./components/SecondGroop";
import AdminPanel from "./Panel/AdminPanel";
import UserCabinet from "./Panel/UserCabinet";
import DetailedRental from "./components/DetailedRental";
import Footer from "./components/Footer";
import Rental from "./components/Rent";
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
const Detail= () => (
  <div>
     <Navbar />
    <DetailedRental/>
     <Footer />
  </div>
);
const Rent = () => (
  <div>
     <Navbar />
    <Rental/>
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
const AboutUS = () => (
  <div>
    <Navbar />
    <About />
    <Footer/> 
  </div>
);
const Contact = () => (
  <div>
    <Navbar />
    <Connection />
    <Footer/> 
  </div>
);
const Admin = () => (
  <div>
    <Navbar />
   <AdminPanel/>
    <Footer/> 
  </div>
);const User = () => (
  <div>
    <Navbar />
    <UserCabinet />
    <Footer/> 
  </div>
);
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cabinet" element={<User />} />
        <Route path="/rent" element={<Rent />} />  
        <Route path="/rental/:id" element={<Detail />} />
        <Route path="/gallery" element={<GalleryPage />} /> {/* Галерея - осмотр*/}
        <Route path="*" element={<NotFound />} /> {/* Страница 404 */}
        <Route path="/check" element={<Check />} /> {/* Страница 404 проверка */}
        <Route path="/about" element={<AboutUS />} /> 
        <Route path="/contacts" element={<Contact />} /> 
      </Routes>
    </Router>
  );
};

export default App;
