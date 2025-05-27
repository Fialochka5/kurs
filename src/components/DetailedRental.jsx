import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetailedRental = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [offer, setOffer] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedOffer, setEditedOffer] = useState({});
  const role = localStorage.getItem("role") || "user";
  const [rental_time, setRentalTime] = useState("");
  const [isRented, setIsRented] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);

  // Загружаем userId с сервера при запуске
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/user/current", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) throw new Error(`Ошибка: ${response.status}`);

        const userData = await response.json();
        console.log("Полученный ID пользователя:", userData.id);

        localStorage.setItem("userId", userData.id);
        setUserId(userData.id);
      } catch (error) {
        console.error("Ошибка получения ID пользователя:", error);
      }
    };

    if (!userId) {
      fetchUserId();
    }
  }, [userId]);

  useEffect(() => {
    setOffer(null);
    const fetchOffer = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/rental/${id}`);
        if (!response.ok) throw new Error(`Ошибка: ${response.status}`);

        const data = await response.json();
        setOffer(data);
        setEditedOffer(data);

        if (data.rental_time && !isNaN(Date.parse(data.rental_time)) && new Date(data.rental_time) > new Date()) {
          setIsRented(true);
        }
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
      }
    };

    fetchOffer();
  }, [id]);

  const handleRent = async () => {
    if (!rental_time) {
      alert("Выберите срок аренды!");
      return;
    }

    if (!userId) {
      alert("Ошибка: ID пользователя не найден.");
      return;
    }

    const formattedRentalTime = new Date(rental_time).toISOString();
    console.log("Отправляем запрос аренды:", { rentalId: id, rental_time: formattedRentalTime, rental_by: userId });

    try {
      const response = await fetch("http://localhost:8080/api/rental/rent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rentalId: id, rental_time: formattedRentalTime, rental_by: userId }),
      });

      if (response.ok) {
        alert("Аренда успешно оформлена!");
        setIsRented(true);
      } else {
        alert("Ошибка аренды, попробуйте позже.");
      }
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

  const handleDeleteOffer = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/rental/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Предложение удалено!");
        navigate("/rental");
      } else {
        alert("Ошибка удаления предложения.");
      }
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

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
        alert("Ошибка сохранения изменений.");
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

          {role === "user" && (
            <>
              <label>Выберите срок аренды:</label>
              <input type="date" value={rental_time} onChange={(e) => setRentalTime(e.target.value)} />
              <button onClick={handleRent} disabled={isRented}>
                {isRented ? "Арендовано" : "Арендовать"}
              </button>
            </>
          )}
        </>
      )}

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


