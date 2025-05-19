import React, { useEffect, useState, useRef  } from "react";
import emailjs from "@emailjs/browser";


const ContactModal = ({ setIsOpen }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalTop, setModalTop] = useState(0);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_fv957xt", // ID сервиса
      "service_ugocd5r", // ID шаблона
      form.current,
      "NZ2yqZjhuAZlMhekj" // Публичный ключ
    )
    .then((result) => {
      console.log("Сообщение отправлено!", result.text);
      alert("Ваше сообщение успешно отправлено!");
    }, (error) => {
      console.error("Ошибка отправки:", error.text);
      alert("Ошибка при отправке сообщения.");
    });
  };
  const sentEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_fv957xt", // ID сервиса
      "template_fbt5437", // ID шаблона
      form.current,
      "NZ2yqZjhuAZlMhekj" // Публичный ключ
    )
    .then((result) => {
      console.log("Сообщение отправлено!", result.text);
      alert("Ваше сообщение успешно отправлено!");
    }, (error) => {
      console.error("Ошибка отправки:", error.text);
      alert("Ошибка при отправке сообщения.");
    });
  };

  useEffect(() => {
    // Получаем текущее положение экрана пользователя
    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;
    setModalTop(scrollY + viewportHeight / 1.5 ); // Центрирование окна по видимой области
    setTimeout(() => setIsVisible(true), 50); // Плавное появление
    document.body.classList.add("modal-open"); // 🔹 Запрещаем прокрутку

    return () => {
      document.body.classList.remove("modal-open"); // 🔹 Возвращаем прокрутку при закрытии
    };
  }, []);

  return (
  <div className={`modal-overlay ${isVisible ? "show" : ""}`}>
    <div 
      className={`modal-content ${isVisible ? "slide-up" : ""}`} 
      style={{ 
        top: `${modalTop}px`, 
        left: "40%", /* Смещаем левее */
        transform: "translate(-40%, -50%)" /* Корректируем смещение */
      }} 
    >
      <span className="close-btn" onClick={() => setIsOpen(false)}>&times;</span>
      <h2>Свяжитесь с нами</h2>
      <p>Мы всегда готовы помочь! Заполните форму или воспользуйтесь контактами ниже.</p>

      <form ref={form} onSubmit={(e) => {
  sendEmail(e); // Отправка письма через EmailJS
  sentEmail(e); // Вторая функция, например, логирование
}} className="contact-form">
        <div className="input-field">
          <input type="text" name="name" required  />
          <label htmlFor="name">Ваше имя</label>
        </div>
        <div className="input-field">
          <input type="email" name="email" required />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field">
          <textarea name="message" className="materialize-textarea" required></textarea>
          <label htmlFor="message">Сообщение</label>
        </div>
        <button type="submit" className="btn">Отправить</button>
      </form>

      {/* 🔹 Контактная информация */}
      <div className="contact-info">
        <div className="info-item">
          <i className="material-icons">place</i>
          <p>Адрес: ул. Примерная, 123, Брест</p>
        </div>
        <div className="info-item">
          <i className="material-icons">phone</i>
          <p>Телефон: +375 (29) 686-84-44</p>
        </div>
        <div className="info-item">
          <i className="material-icons">email</i>
          <p>Email: shibun2006@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
);

};

export default ContactModal;

