import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Rental = () => {
  const [offers, setOffers] = useState([]);
  // <–– добавили стейт для фильтров
  const [filters, setFilters] = useState({
    name: "",
    minPrice: "",
    maxPrice: "",
    minArea: "",
    maxArea: ""
  });

  const [newOffer, setNewOffer] = useState({
    title: "",
    area: "",
    price: "",
    img: "",
    video: ""
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [role, setRole] = useState(localStorage.getItem("role") || "user");

  const fetchOffers = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/rental");
      const data = await response.json();
      console.log("Загруженные данные:", data);
      setOffers(data);
    } catch (error) {
      console.error("Ошибка загрузки данных:", error);
    }
  };

  useEffect(() => {
    setRole(localStorage.getItem("role") || "user");
    fetchOffers();
  }, []);

  const handleAddOffer = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/rental/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOffer)
      });

      if (response.ok) {
        alert("Предложение добавлено!");
        setNewOffer({ title: "", area: "", price: "", img: "", video: "" });
        setIsModalOpen(false);
        fetchOffers();
      } else {
        console.error("Ошибка добавления предложения");
      }
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

  const handleDeleteOffer = async id => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/rental/delete/${id}`,
        {
          method: "DELETE"
        }
      );

      if (response.ok) {
        alert("Предложение удалено!");
        setOffers(prev => prev.filter(offer => offer.id !== id));
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

      {/* ——— Блок фильтров ——— */}
      <div className="filter-container">
        <input
          type="text"
          placeholder="Название"
          value={filters.name}
          onChange={e =>
            setFilters({ ...filters, name: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Мин. цена"
          value={filters.minPrice}
          onChange={e =>
            setFilters({ ...filters, minPrice: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Макс. цена"
          value={filters.maxPrice}
          onChange={e =>
            setFilters({ ...filters, maxPrice: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Мин. площадь"
          value={filters.minArea}
          onChange={e =>
            setFilters({ ...filters, minArea: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Макс. площадь"
          value={filters.maxArea}
          onChange={e =>
            setFilters({ ...filters, maxArea: e.target.value })
          }
        />
      </div>

      <div className="rental-container">
        {offers
          // ——— тут фильтруем ———
          .filter(offer => {
            const price = Number(offer.price);
            const area = Number(offer.area);
            return (
              offer.title
                .toLowerCase()
                .includes(filters.name.toLowerCase()) &&
              (filters.minPrice === "" ||
                price >= Number(filters.minPrice)) &&
              (filters.maxPrice === "" ||
                price <= Number(filters.maxPrice)) &&
              (filters.minArea === "" ||
                area >= Number(filters.minArea)) &&
              (filters.maxArea === "" ||
                area <= Number(filters.maxArea))
            );
          })
          .map(offer => (
            <div className="rental-item" key={offer.id}>
              <img src={offer.img} alt={offer.title} />
              <div className="rental-info">
                <h3>{offer.title}</h3>
                <p>Площадь: {offer.area}</p>
                <p>Цена: {offer.price}</p>
                <Link to={`/rental/${offer.id}`}>
                  <i className="material-icons">info</i> Подробнее
                </Link>
                {role === "admin" && (
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteOffer(offer.id)}
                  >
                    🗑 Удалить
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>

      {role === "admin" && (
        <div className="add-offer-container">
          <button
            className="add-offer-btn"
            onClick={() => setIsModalOpen(true)}
          >
            ➕ Добавить предложение
          </button>
        </div>
      )}

      {isModalOpen && (
        <div className="modals">
          <div className="modals-content">
            <h3>Добавить новое предложение</h3>
            <input
              type="text"
              placeholder="Название"
              value={newOffer.title}
              onChange={e =>
                setNewOffer({ ...newOffer, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Площадь"
              value={newOffer.area}
              onChange={e =>
                setNewOffer({ ...newOffer, area: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Цена"
              value={newOffer.price}
              onChange={e =>
                setNewOffer({ ...newOffer, price: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Ссылка на изображение"
              value={newOffer.img}
              onChange={e =>
                setNewOffer({ ...newOffer, img: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Ссылка на видео"
              value={newOffer.video}
              onChange={e =>
                setNewOffer({ ...newOffer, video: e.target.value })
              }
            />
            <button onClick={handleAddOffer}>Добавить</button>
            <button onClick={() => setIsModalOpen(false)}>Закрыть</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Rental;








