import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const offers = [
  { id: "1", title: "Бизнес-центр «Брест Деловой»", area: "6,2 тыс. м²", price: "от 20 BYN/м²", img: "images/rental1.jpg" },
  { id: "2", title: "Многофункциональный центр", area: "5,5 тыс. м²", price: "от 18 BYN/м²", img: "images/rental2.jpg" },
  { id: "3", title: "Офис-центр «Domus City»", area: "6,4 тыс. м²", price: "от 22 BYN/м²", img: "images/rental3.jpg" },
  { id: "4", title: "Торгово-логистический комплекс", area: "11,1 тыс. м²", price: "от 15 BYN/м²", img: "images/rental4.jpg" },
  { id: "5", title: "Складские помещения", area: "8,5 тыс. м²", price: "от 12 BYN/м²", img: "images/rental5.jpg" },
  { id: "6", title: "Производственные цеха", area: "10 тыс. м²", price: "от 14 BYN/м²", img: "images/rental6.jpg" },
  { id: "7", title: "Аренда офисов в центре", area: "3 тыс. м²", price: "от 25 BYN/м²", img: "images/rental7.jpg" },
  { id: "8", title: "Коворкинг-зоны", area: "2 тыс. м²", price: "от 30 BYN/м²", img: "images/rental8.jpg" },
  { id: "9", title: "Торговые павильоны", area: "5 тыс. м²", price: "от 17 BYN/м²", img: "images/rental9.jpg" },
];

const Rental = () => {
  // Определяем состояние для админа
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Проверяем наличие токена администратора в localStorage
    const adminToken = localStorage.getItem("adminToken");
    setIsAdmin(!!adminToken); // Если токен есть, устанавливаем isAdmin в true
  }, []);

  const handleAddOffer = async () => {
    const newOffer = {
      title: "Новое предложение",
      area: "100 м²",
      price: "от 30 BYN/м²",
      img: "images/new-offer.jpg"
    };

    await fetch("/api/rental/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOffer)
    });

    alert("Предложение добавлено!");
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
            </div>
          </div>
        ))}
      </div>

      {isAdmin && (
        <button onClick={handleAddOffer}>Добавить предложение</button>
      )}
    </>
  );
};

export default Rental;



