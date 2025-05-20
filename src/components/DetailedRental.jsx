import React from "react";
import { useParams } from "react-router-dom";

const rentalData = [
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


const DetailedRental = () => {
  const { id } = useParams();
  const offer = rentalData.find((item) => item.id === id);

  if (!offer) {
    return <p>Предложение не найдено.</p>;
  }

  return (
    <div className="detailed-rental">
      <h2>{offer.title}</h2>
      <img src={offer.img} alt={offer.title} />
      <p>Площадь: {offer.area}</p>
      <p>Цена: {offer.price}</p>

      <div className="rental-video">
        <video width="100%" controls>
          <source src="https://cdn.pixabay.com/video/2015/10/16/1046-142621379_large.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>
    </div>
  );
};

export default DetailedRental;
