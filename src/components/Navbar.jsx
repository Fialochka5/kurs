import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Импортируем Link
import M from "materialize-css";

const Navbar = () => {
  useEffect(() => {
    M.Sidenav.init(document.querySelectorAll(".sidenav"));
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="image">
          <Link to="/"><img src="/images/nametest.png" alt="Logo" /> </Link>
        </div>
        <a href=" " data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
        <div className="navbar-menu">
          <ul>
            <li className="padding">
              <Link to="/about">О нас</Link>
            </li>
            <li className="padding">
              <Link to="/gallery">Галерея</Link> {/* Добавлен переход */}
            </li>
            <li className="padding">
              <Link to="/rent">Аренда</Link>
            </li>
            <li className="padding">
              <Link to="/contacts">Контакты</Link>
            </li>
          </ul>
        </div>
        <div className="number">
          <ul>
            <li>+375 44 585-77-77</li>
            <li>
              +375 29 805-77-77 <img src="/images/viber.png" alt="" className="viber" />
            </li>
          </ul>
        </div>
      </nav>

      <ul id="slide-out" className="sidenav">
        <li><div className="user-view"></div></li>
        <li>
          <Link to="/about" className="waves-effect">
            <i className="material-icons">contact_mail</i>О нас
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="waves-effect"> {/* Галерея */}
            <i className="material-icons">perm_media</i>Галерея
          </Link>
        </li>
        <li>
          <Link to="/rent" className="waves-effect">
            <i className="material-icons">payment</i>Аренда
          </Link>
        </li>
        <li>
          <Link to="/contacts" className="waves-effect">
            <i className="material-icons">call_end</i>Контакты
          </Link>
        </li>
        <li><div className="divider"></div></li>
        <li>
          <a href="#!" className="sidenav-close">
            <i className="material-icons">close</i>Закрыть
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;

