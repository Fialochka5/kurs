import React, { useState, useEffect } from "react";

const UserCabinet = () => {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    const fetchRentals = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/rentals");
        const data = await response.json();
        setRentals(data);
      } catch (error) {
        console.error("Ошибка загрузки арендованных товаров:", error);
      }
    };

    fetchRentals();
  }, []);

  return (
    <div>
      <h2>Кабинет пользователя</h2>
      <h3>Арендованные товары:</h3>
      <ul>
        {rentals.map((rental) => {
          const expiration = new Date(rental.expirationDate);
          const now = new Date();
          const timeLeft = expiration - now;
          const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));

          return (
            <li key={rental.id}>
              {rental.item} — {daysLeft > 0 ? `Осталось ${daysLeft} дней` : "Срок аренды истек"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserCabinet;
