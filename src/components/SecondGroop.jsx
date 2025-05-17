import React from "react";

const advantages = [
  { icon: "location_on", title: "Отличное расположение", description: "На ключевой транспортной артерии города Бреста" },
  { icon: "phone", title: "Оптоволоконные сети", description: "Возможность подключения нескольких провайдеров" },
  { icon: "build", title: "Передовые инженерные системы", description: "Система кондиционирования и вентиляции с подогревом и охлаждением воздуха. Автономная котельная" },
  { icon: "network_wifi", title: "Высокотехнологичные системы пожарной безопасности", description: "Обеспечивают непрерывный контроль и мониторинг всей площади" },
  { icon: "business", title: "Лифты", description: "Высокоскоростные лифты KONE" },
  { icon: "exposure", title: "Электроснабжение", description: "Независимый источник электроснабжения обеспечивает первую категорию надежности" },
  { icon: "drive_eta", title: "Парковка", description: "Просторные наземные парковки вокруг зданий" },
  { icon: "location_city", title: "Инфраструктура", description: "Автомойка, фитнес-центр, гипермаркет, точки общепита, банки" }
];

const AdvantageItem = ({ icon, title, description }) => (
  <div className="advantage-item">
    <i className="material-icons">{icon}</i>
    <p>
      {title}
      <br />
      <span className="under-word">{description}</span>
    </p>
  </div>
);

const SecondGroup = () => {
  return (
    <div className="advantages-section">
      <h2>Преимущества наших центров</h2>
      <div className="eight-points">
        {advantages.map((advantage, index) => (
          <AdvantageItem key={index} {...advantage} />
        ))}
      </div>
    </div>
  );
};

export default SecondGroup;
