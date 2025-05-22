import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetailedRental = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [offer, setOffer] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedOffer, setEditedOffer] = useState({});
  const [role] = useState(localStorage.getItem("role") || "user"); // 🔥 Проверяем роль пользователя

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
        setEditedOffer(data); // Сохраняем копию для редактирования
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
        navigate("/rental");
      } else {
        console.error("Ошибка удаления");
      }
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

  // Функция сохранения изменений
  const handleSaveChanges = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/rental/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedOffer),
      });

      if (response.ok) {
        alert("Изменения сохранены!");
        setOffer(editedOffer);
        setEditMode(false);
      } else {
        console.error("Ошибка обновления данных");
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
      {editMode ? (
        <>
          <input type="text" value={editedOffer.title} onChange={(e) => setEditedOffer({ ...editedOffer, title: e.target.value })} />
          <input type="text" value={editedOffer.area} onChange={(e) => setEditedOffer({ ...editedOffer, area: e.target.value })} />
          <input type="text" value={editedOffer.price} onChange={(e) => setEditedOffer({ ...editedOffer, price: e.target.value })} />
          <input type="text" value={editedOffer.img} onChange={(e) => setEditedOffer({ ...editedOffer, img: e.target.value })} />
          <input type="text" value={editedOffer.video} onChange={(e) => setEditedOffer({ ...editedOffer, video: e.target.value })} />
        </>
      ) : (
        <>
          <h2>{offer.title}</h2>
          {offer.img ? <img src={offer.img} alt={offer.title} /> : <p>Нет изображения</p>}
          <p>Площадь: {offer.area}</p>
          <p>Цена: {offer.price}</p>
          <div className="rental-video">
            {offer.video ? (
              <video width="100%" controls>
                <source src={offer.video} type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
            ) : (
              <p>Нет видео</p>
            )}
          </div>
        </>
      )}

      {/* 🔥 Кнопки управления доступны **только** для админа */}
      {role === "admin" && (
        <>
          <button onClick={() => setEditMode(!editMode)}>{editMode ? "Отменить" : "Редактировать"}</button>
          {editMode && <button onClick={handleSaveChanges}>Сохранить</button>}
          <button className="delete-btn" onClick={handleDeleteOffer}>🗑 Удалить</button>
        </>
      )}
    </div>
  );
};

export default DetailedRental;
