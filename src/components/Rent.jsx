import React from "react";

const Rental = () => {
  const offers = [
    { title: "Бизнес-центр «Брест Деловой»", area: "6,2 тыс. м²", price: "от 20 BYN/м²", img: "images/rental1.jpg" },
    { title: "Многофункциональный центр", area: "5,5 тыс. м²", price: "от 18 BYN/м²", img: "images/rental2.jpg" },
    { title: "Офис-центр «Domus City»", area: "6,4 тыс. м²", price: "от 22 BYN/м²", img: "images/rental3.jpg" },
    { title: "Торгово-логистический комплекс", area: "11,1 тыс. м²", price: "от 15 BYN/м²", img: "images/rental4.jpg" },
    { title: "Складские помещения", area: "8,5 тыс. м²", price: "от 12 BYN/м²", img: "images/rental5.jpg" },
    { title: "Производственные цеха", area: "10 тыс. м²", price: "от 14 BYN/м²", img: "images/rental6.jpg" },
    { title: "Аренда офисов в центре", area: "3 тыс. м²", price: "от 25 BYN/м²", img: "images/rental7.jpg" },
    { title: "Коворкинг-зоны", area: "2 тыс. м²", price: "от 30 BYN/м²", img: "images/rental8.jpg" },
    { title: "Торговые павильоны", area: "5 тыс. м²", price: "от 17 BYN/м²", img: "images/rental9.jpg" },
    { title: "Выставочные залы", area: "7 тыс. м²", price: "от 19 BYN/м²", img: "images/rental10.jpg" },
  ];

  return (
    <>
      <div className="rental-header">
        <p>ПРЕДЛОЖЕНИЯ ПО АРЕНДЕ</p>
      </div>

      <div className="rental-container">
        {offers.map((offer, index) => (
          <div className="rental-item" key={index}>
            <img src={offer.img} alt={offer.title} />
            <div className="rental-info">
              <h3>{offer.title}</h3>
              <p>Площадь: {offer.area}</p>
              <p>Цена: {offer.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Rental;

