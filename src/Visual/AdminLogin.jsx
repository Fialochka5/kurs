import React, { useEffect, useState } from "react";


const AdminLogin = ({ setIsOpen }) => {
  const [isVisible, setIsVisible] = useState(false);
    
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 50); // Плавное появление
    document.body.style.overflow = "hidden"; // Запрет прокрутки

    return () => {
      document.body.style.overflow = "auto"; // Восстановление прокрутки при закрытии
    };
  }, []);

  return (
    <div className={`admin-login-overlay ${isVisible ? "show" : ""}`}>
      <div className={`admin-login-card ${isVisible ? "slide-up" : ""}`}>
        <span className="close-btn" onClick={() => setIsOpen(false)}>&times;</span>
        <h2>Вход администратора</h2>
        <form>
          <div className="input-field">
            <input type="text" id="admin-email" placeholder="Email" required />
          </div>
          <div className="input-field">
            <input type="password" id="admin-password" placeholder="Пароль" required />
          </div>
          <button type="submit" className="login-btn">Войти</button>
        </form>
      </div>
    </div>
    
  );
  
};

export default AdminLogin;

