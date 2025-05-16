import React from "react";
import { createRoot } from "react-dom/client"; // ✅ Используем createRoot
import Navbar from "./Navbar";
import "./style/styles.css"; // ✅ Подключаем стили глобально


const App = () => <Navbar />;

const root = createRoot(document.getElementById("root")); // ✅ Создаём root
root.render(<App />); // ✅ Рендерим приложение


