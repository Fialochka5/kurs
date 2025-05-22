import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Rental = () => {
  const [offers, setOffers] = useState([]);
  const [newOffer, setNewOffer] = useState({ title: "", area: "", price: "", img: "", video: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Загружаем список предложений при загрузке страницы
  const fetchOffers = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/rental"); // Убедись, что сервер запущен
      const data = await response.json();
      console.log("Загруженные данные:", data); // Проверяем, загружаются ли предложения
      setOffers(data);
    } catch (error) {
      console.error("Ошибка загрузки данных:", error);
    }
  };

  useEffect(() => {
    fetchOffers(); // Загружаем список при запуске
  }, []);

  // Функция добавления нового предложения
  const handleAddOffer = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/rental/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOffer),
      });

      if (response.ok) {
        alert("Предложение добавлено!");
        setNewOffer({ title: "", area: "", price: "", img: "", video: "" });
        setIsModalOpen(false);

        // Повторно загружаем обновлённый список с сервера
        fetchOffers();
      } else {
        console.error("Ошибка добавления предложения");
      }
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };
const handleDeleteOffer = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/api/rental/delete/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("Предложение удалено!");
      setOffers((prevOffers) => prevOffers.filter((offer) => offer.id !== id)); // Удаляем из списка без запроса
    } else {
      console.error("Ошибка удаления");
    }
  } catch (error) {
    console.error("Ошибка запроса:", error);
  }
};

  return (
    <>
      <div className="rental-header">
        <h2>ПРЕДЛОЖЕНИЯ ПО АРЕНДЕ</h2>
      </div>

      <div className="rental-container">
        {offers.map((offer) => (
          <div className="rental-item" key={offer.id}>
             <img src={offer.img} alt={offer.title} />
            <div className="rental-info">
              <h3>{offer.title}</h3>
              <p>Площадь: {offer.area}</p>
              <p>Цена: {offer.price}</p>
              <Link to={`/rental/${offer.id}`} >
                <i className="material-icons">info</i> Подробнее
              </Link>
              <button className="delete-btn" onClick={() => handleDeleteOffer(offer.id)}>🗑 Удалить</button>
            </div>
           
          </div>
        ))}
      </div>

      {/* Крупная кнопка с плюсом */}
      <div className="add-offer-container">
        <button className="add-offer-btn" onClick={() => setIsModalOpen(true)}>
          ➕ Добавить предложение
        </button>
      </div>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modals">
          <div className="modals-content">
            <h3>Добавить новое предложение</h3>
            <input type="text" placeholder="Название" value={newOffer.title} onChange={(e) => setNewOffer({ ...newOffer, title: e.target.value })} />
            <input type="text" placeholder="Площадь" value={newOffer.area} onChange={(e) => setNewOffer({ ...newOffer, area: e.target.value })} />
            <input type="text" placeholder="Цена" value={newOffer.price} onChange={(e) => setNewOffer({ ...newOffer, price: e.target.value })} />
            <input type="text" placeholder="Ссылка на изображение" value={newOffer.img} onChange={(e) => setNewOffer({ ...newOffer, img: e.target.value })} />
            <input type="text" placeholder="Ссылка на видео" value={newOffer.video} onChange={(e) => setNewOffer({ ...newOffer, video: e.target.value })} />
            <button onClick={handleAddOffer}>Добавить</button>
            <button onClick={() => setIsModalOpen(false)}>Закрыть</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Rental;







