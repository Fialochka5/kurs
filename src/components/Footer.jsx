import React, { useState } from "react";
import AdminLogin from "../Visual/AdminLogin"; // Импорт модального окна входа администратора

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="footer">
      <div className="item">
        © 2025 ООО <span onClick={() => setIsOpen(true)} className="clickable">«БУГИНКОМ»</span>. Все права защищены
      </div>
      <div className="item">
        Создание и продвижение сайтов - InternetSozdateli
      </div>

      {/* Модальное окно входа */}
      {isOpen && <AdminLogin setIsOpen={setIsOpen} />}
    </footer>
  );
};

export default Footer;
