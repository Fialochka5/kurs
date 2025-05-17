import React from "react";
import { createRoot } from "react-dom/client"; // ✅ Используем createRoot
import "./style/Navbar.css"; // ✅ Подключаем стили глобально
import "./style/FirstGroup.css";
import "./style/main.css"
import "./style/media.css"
import "materialize-css/dist/js/materialize.min.js";
import Navbar from "./components/Navbar";
import FirstGroup from "./components/FirstGroup";


const App = () => <Navbar />;

const root_1 = createRoot(document.getElementById("root")); 
root_1.render(<App />); 

const Group = () => <FirstGroup />;

const root_2 = createRoot(document.getElementById("app")); 
root_2.render(<Group />);

