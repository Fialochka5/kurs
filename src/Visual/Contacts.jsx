import React, { useEffect, useState } from "react";

const ContactModal = ({ setIsOpen }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 50); // Небольшая задержка для плавного появления
  }, []);

  return (
    <div className={`modal-overlay ${isVisible ? "show" : ""}`}>
      <div className={`modal-content ${isVisible ? "slide-up" : ""}`}>
        <span className="close-btn" onClick={() => setIsOpen(false)}>&times;</span>
        <h2>Свяжитесь с нами</h2>
        <p>Мы всегда готовы помочь! Заполните форму или воспользуйтесь контактами ниже.</p>

        <form className="contact-form">
          <div className="input-field">
            <input type="text" id="name" required />
            <label htmlFor="name">Ваше имя</label>
          </div>
          <div className="input-field">
            <input type="email" id="email" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <textarea id="message" className="materialize-textarea" required></textarea>
            <label htmlFor="message">Сообщение</label>
          </div>
          <button className="btn">Отправить</button>
        </form>

        <div className="contact-info">
          <div className="info-item">
            <i className="material-icons">place</i>
            <p>Адрес: ул. Примерная, 123, Брест</p>
          </div>
          <div className="info-item">
            <i className="material-icons">phone</i>
            <p>Телефон: +375 (29) 123-45-67</p>
          </div>
          <div className="info-item">
            <i className="material-icons">email</i>
            <p>Email: contact@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
