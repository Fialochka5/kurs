import React from "react";
import { Link } from "react-router-dom";
import "../style/NotFound.css"; // Подключение стилей

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Упс! Такой страницы нет.</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};

export default NotFound;
