import React from "react";

const Connection = () => {
  return (
    <>
      <div className="contacts">
        <p>НАШИ КОНТАКТЫ</p>
      </div>

      <div className="contact-info">
        <div className="top-row">
          {[
            { icon: "location_on", text: "г. Брест, ул. Московская,<br>208-9" },
            { icon: "phone", text: "+375 44 585-77-77 <br>+375 29 805-77-77" }
          ].map((item, index) => (
            <div className="image-item" key={index}>
              <i className="material-icons">{item.icon}</i>
              <p dangerouslySetInnerHTML={{ __html: item.text }} />
            </div>
          ))}
        </div>
        <div className="bottom-row">
          {[
            { text: "marketing@bugincom.by" },
            { text: "+375 162 27-29-27" },
            { img: "images/instagram.jpg" }
          ].map((item, index) => (
            <div className="text-item" key={index}>
              {item.img ? <img src={item.img} alt="" /> : <p>{item.text}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className="map">
        <img src="images/map.png" alt="" />
      </div>
    </>
  );
};

export default Connection;
