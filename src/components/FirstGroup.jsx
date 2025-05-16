import React, { useEffect } from "react";
import M from "materialize-css";

const FirstGroup = () => {
  useEffect(() => {
  M.Sidenav.init(document.querySelectorAll(".sidenav"));
}, []);
  return (
    <div className="first-group">
      <div className="picture">
        <img src="images/title.webp" alt="Title" />
      </div>
      <div className="picture-mb">
        <img src="images/title_mb.jpg" alt="Title Mobile" />
      </div>
      <div className="content">
        <p className="title" id="shadow">ООО "БУГИНКОМ" ПРЕДЛАГАЕТ ВАМ РАССМОТРЕТЬ</p>
        <p className="name" id="shadow">ВАКАНТНЫЕ ПЛОЩАДИ<br />ДЛЯ ВАШЕГО БИЗНЕСА</p>
        <p className="central-text" id="shadow">
          Всем новым Арендаторам — наши золотые фирменные скрепки — в подарок!
        </p>
        <p className="button-text">
          <a href=" ">Получить предложение</a>
        </p>
      </div>

      <div className="item_bur">
        {[
          { icon: "location_on", text: "Отличное<br />расположение" },
          { icon: "forward", text: "Круглосуточный<br />доступ 24/7" },
          { icon: "build", text: "Передовые<br />инженерные системы" },
          { icon: "camera_alt", text: "Системы видеонаблюдения<br />и контроля доступа" },
          { icon: "drive_eta", text: "Удобные просторные<br />парковки" }
        ].map((item, index) => (
          <div className="item" key={index}>
            <i className="material-icons">{item.icon}</i>
            <p dangerouslySetInnerHTML={{ __html: item.text }} />
          </div>
        ))}
      </div>

      <div className="domus-city-up">
        <div className="piece">
          <p className="title">БИЗНЕС-ЦЕНТР</p>
          <p className="name">"БРЕСТ ДЕЛОВОЙ"</p>
          <p className="central-text">
            Организация офиса Вашей компании в Бизнес-центре <br />
            «БРЕСТ ДЕЛОВОЙ» (класс В+)
          </p>
          <p className="button-text">
            <a href=" ">Получить предложение</a>
          </p>
        </div>
        <div className="piece">
          <img src="images/delovoy.webp" alt="Brest Delovoy" />
        </div>
      </div>

      <div className="domus-city-down">
        <div className="piece">
          <img src="images/domus-city.webp" alt="Domus City" />
        </div>
        <div className="piece">
          <p className="title">ОФИС-ЦЕНТР</p>
          <p className="name">"DOMUS-CITY"</p>
          <p className="central-text">
            Организация торгового представительства Вашей<br /> компании в Офис-центре «DOMUS CITY» (класс В)
          </p>
          <p className="button-text">
            <a href=" ">Получить предложение</a>
          </p>
        </div>
      </div>
      
      <div className="domus-city-down-mb">
        <div className="piece">
          <p className="title">ОФИС-ЦЕНТР</p>
          <p className="name">"DOMUS-CITY"</p>
          <p className="central-text">
            Организация торгового представительства Вашей<br /> компании в Офис-центре «DOMUS CITY» (класс В)
          </p>
          <p className="button-text">
            <a href=" ">Получить предложение</a>
          </p>
        </div>
        <div className="piece">
          <img src="images/domus-city.webp" alt="Domus City" />
        </div>
      </div>
    </div>
  );
};

export default FirstGroup;
