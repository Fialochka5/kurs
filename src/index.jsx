import React from "react";
import { createRoot } from "react-dom/client"; // ✅ Используем createRoot
import "./style/styles.css"; // ✅ Подключаем стили глобально
import "materialize-css/dist/js/materialize.min.js";
import Navbar from "./components/Navbar";
import FirstGroup from "./components/FirstGroup";


const App = () => <Navbar />;

const root_1 = createRoot(document.getElementById("root")); // ✅ Создаём root
root_1.render(<App />); // ✅ Рендерим приложение

const Group = () => <FirstGroup />;

const root_2 = createRoot(document.getElementById("app")); // ✅ Создаём root
root_2.render(<Group />);

