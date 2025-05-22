import React, { useEffect, useState } from "react";

const AdminLogin = ({ setIsOpen }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
   const [modalTop, setModalTop] = useState(0);

  useEffect(() => {
    // Получаем текущее положение курсора
    const handleMouseMove = (event) => {
      setModalPosition({
        top: event.clientY + window.scrollY,
        left: event.clientX,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;
    setModalTop(scrollY + viewportHeight / 1.5 );
    setTimeout(() => setIsVisible(true), 50); // Плавное появление
    document.body.classList.add("modal-open"); // 🔹 Запрещаем прокрутку

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.classList.remove("modal-open"); // 🔹 Возвращаем прокрутку
    };
  }, []);

  return (
    <div className={`modal-overlays ${isVisible ? "show" : ""}`}>
      <div 
        className={`modal-contents ${isVisible ? "slide-up" : ""}`} 
        style={{ 
          top: `${modalTop.top}px`,
          left: `${modalPosition.left}px`,
          transform: "translate(-40%, -50%)"
        }}
      >
        <span className="close-btn" onClick={() => setIsOpen(false)}>&times;</span>
        <h2>Вход</h2>

        <form className="admin-form">
          <div className="input-field">
            <input type="text" name="email" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input type="password" name="password" required />
            <label htmlFor="password">Пароль</label>
          </div>
          <button type="submit" className="btn">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;


