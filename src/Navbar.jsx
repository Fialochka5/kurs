import React, { useEffect } from "react";
import M from "materialize-css";

const Navbar = () => {
  useEffect(() => {
  M.Sidenav.init(document.querySelectorAll(".sidenav"));
}, []);

  return (
    <>
      <nav className="navbar">
        <div className="image">
          <a href=" ">
          <img src="/images/nametest.png" alt="Logo" />
          </a>
        </div>
        <a href=" " data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
        <div className="navbar-menu">
          <ul>
            <li className="padding">
              <a href=" ">О нас</a>
            </li>
            <li className="padding">
              <a href=" ">Галерея</a>
            </li>
            <li className="padding">
              <a href=" ">Аренда</a>
            </li>
            <li>
              <a href=" ">Контакты</a>
            </li>
          </ul>
        </div>
        <div className="number">
          <ul>
            <li>
              <a href=" ">
                +375 44 585-77-77 <img src="./images/viber.png" alt="" className="viber" />
              </a>
            </li>
            <li>
              <a href=" ">+375 29 805-77-77</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view"></div>
        </li>
        <li>
          <a className="waves-effect" href="#!">
            <i className="material-icons">contact_mail</i>О нас
          </a>
        </li>
        <li>
          <a className="waves-effect" href="#!">
            <i className="material-icons">perm_media</i>Галерея
          </a>
        </li>
        <li>
          <a className="waves-effect" href="#!">
            <i className="material-icons">payment</i>Аренда
          </a>
        </li>
        <li>
          <a className="waves-effect" href="#!">
            <i className="material-icons">call_end</i>Контакты
          </a>
        </li>
        <li>
          <div className="divider"></div>
        </li>
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
