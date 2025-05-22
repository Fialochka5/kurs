import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import M from "materialize-css";
import AdminLogin from "../Visual/AdminLogin";

const Navbar = () => {
  // Управление состояниями
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token")); 
  const [role, setRole] = useState(localStorage.getItem("role") || "user"); 

  // Загружаем роль при изменении `isLoggedIn`
  useEffect(() => {
    setRole(localStorage.getItem("role") || "user");
    M.Sidenav.init(document.querySelectorAll(".sidenav"));
  }, [isLoggedIn]);

  // Функция выхода
  const navigate = useNavigate();
  const handleLogout = () => {
    
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    setIsLoggedIn(false);
    navigate(0);
    setRole("user"); // Обновляем React состояние
    console.log("Роль после выхода:", localStorage.getItem("role")); // Проверяем удаление
  };

  console.log("Состояние модального окна:", isOpen);
  console.log("Роль пользователя:", role);

  return (
    <>
      <nav className="navbar">
        <div className="image">
          <Link to="/"><img src="/images/nametest.png" alt="Logo" /></Link>
        </div>
        <a href=" " data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
        <div className="navbar-menu">
          <ul>
            <li className="padding"><Link to="/about">О нас</Link></li>
            <li className="padding"><Link to="/gallery">Галерея</Link></li>
            <li className="padding"><Link to="/rent">Аренда</Link></li>
            <li className="padding"><Link to="/contacts">Контакты</Link></li>

            {!isLoggedIn ? (
              <li className="padding">
                <Link className="clickable" onClick={() => setIsOpen(true)}>Вход</Link>
              </li>
            ) : (
              <>
               {role === "admin" ? (
  <li className="padding">
    <Link to="/admin">Админ-панель</Link>
  </li>
) : (
  <li className="padding">
    <Link to="/cabinet">Кабинет</Link>
  </li>
)}
                <li className="padding">
                  <Link className="clickable" onClick={handleLogout}>Выход</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="number">
          <ul>
            <li>+375 44 585-77-77</li>
            <li>+375 29 805-77-77 <img src="/images/viber.png" alt="" className="viber" /></li>
          </ul>
        </div>
      </nav>

      <ul id="slide-out" className="sidenav">
        <li><div className="user-view"></div></li>
        <li><Link to="/about"><i className="material-icons">contact_mail</i>О нас</Link></li>
        <li><Link to="/gallery"><i className="material-icons">perm_media</i>Галерея</Link></li>
        <li><Link to="/rent"><i className="material-icons">payment</i>Аренда</Link></li>
        <li><Link to="/contacts"><i className="material-icons">call_end</i>Контакты</Link></li>

        {isLoggedIn ? (
  <>
    {role === "admin" ? (
      <li className="padding">
        <Link to="/admin">Админ-панель</Link>
      </li>
    ) : (
      <li className="padding">
        <Link to="/cabinet">Кабинет</Link>
      </li>
    )}
    <li className="padding">
      <Link className="clickable" onClick={handleLogout}>Выход</Link>
    </li>
  </>
) : (
  <li className="padding">
    <Link className="clickable" onClick={() => setIsOpen(true)}>Вход</Link>
  </li>
)}


        <li><div className="divider"></div></li>
        <li>
          <a href="#!" className="sidenav-close">
            <i className="material-icons">close</i>Закрыть
          </a>
        </li>
      </ul>

      {/* Модальное окно входа */}
      {isOpen && <AdminLogin setIsOpen={setIsOpen} setIsLoggedIn={setIsLoggedIn} setRole={setRole} />}
    </>
  );
};

export default Navbar;



