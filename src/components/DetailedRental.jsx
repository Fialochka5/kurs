import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetailedRental = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [offer, setOffer] = useState(null);

  // Загружаем данные с сервера
  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/rental/${id}`);
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        const data = await response.json();
        setOffer(data);
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
      }
    };

    fetchOffer();
  }, [id]);

  // Функция удаления
  const handleDeleteOffer = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/rental/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Предложение удалено!");
        navigate("/rental"); // Перенаправляем обратно после удаления
      } else {
        console.error("Ошибка удаления");
      }
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

  if (!offer) {
    return <p>Предложение не найдено.</p>;
  }

  return (
    <div className="detailed-rental">
      <h2>{offer.title}</h2>
      
      {/* Проверяем, есть ли изображение */}
      {offer.img ? <img src={offer.img} alt={offer.title} /> : <p>Нет изображения</p>}
      
      <p>Площадь: {offer.area}</p>
      <p>Цена: {offer.price}</p>

      <div className="rental-video">
        {/* Проверяем, есть ли видео */}
        {offer.video ? (
          <video width="100%" controls>
            <source src={offer.video} type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
        ) : (
          <p>Нет видео</p>
        )}
      </div>

      {/* Кнопка удаления */}
      <button className="delete-btn" onClick={handleDeleteOffer}>🗑 Удалить</button>
    </div>
  );
};

export default DetailedRental;
