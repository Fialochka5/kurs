import React from "react";
import { useEffect } from "react";
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

const Index = () => {
  useEffect(() => {
    fetch("http://localhost:8080/api/data")
      .then(response => response.json())
      .then(data => {
        console.log("Полученные данные:", data); // ✅ Вывод в консоль
      })
      .catch(error => console.error("Ошибка:", error));
  }, []);

  return <div>Главная страница</div>;
};

export default Index;