import React from "react";
import { createRoot } from "react-dom/client"; // ✅ Используем createRoot
import App from "./App";
import "./style/Navbar.css"; // ✅ Подключаем стили глобально
import "./style/FirstGroup.css";
import "./style/Footer.css"
import "./style/SecondGroup.css"
import "./style/Contacts.css"

import "./style/main.css"
import "./style/media.css"
import "materialize-css/dist/js/materialize.min.js";

import Navbar from "./components/Navbar";
import FirstGroup from "./components/FirstGroup";
import Footer from "./components/Footer";
import SecondGroup from "./components/SecondGroop";


const Head = () => <Navbar />;

const root_1 = createRoot(document.getElementById("head")); 
root_1.render(<Head />); 

const Group = () => <FirstGroup />;

const root_2 = createRoot(document.getElementById("main")); 
root_2.render(<Group />);

const Basement = () => <Footer />;

const root_3 = createRoot(document.getElementById("footer")); 
root_3.render(<Basement />); 

const Second = () => <SecondGroup />;

const root_4 = createRoot(document.getElementById("eight_post")); 
root_4.render(<Second />); 

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Элемент #root не найден! Проверь `index.html`.");
} else {
  createRoot(rootElement).render(<App />);
}

