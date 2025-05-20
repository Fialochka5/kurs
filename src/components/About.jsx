import React from 'react';

const About = () => {
  return (
    <>
      <div className="company">
        <p>О КОМПАНИИ "БУГИНКОМ"</p>
      </div>

      <div className="company-info">
        <div className="left">
          <p className="start-text">
            ООО «БУГИНКОМ» − девелоперская компания, специализирующаяся на сегменте коммерческой недвижимости,
            контролирует все этапы проекта от разработки концепции до последующего управления созданным объектом.
          </p>
          <p className="center-text">
            Общий объем девелоперских проектов «БУГИНКОМ» составляет 30 тыс. м2:
          </p>
          <div className="houses">
            {[
              { src: "images/about_item1.jpg", text: "бизнес-центр «Брест Деловой» (6,2 тыс. м2)" },
              { src: "images/about_item2.jpg", text: "многофункциональный центр (5,5 тыс. м2)" },
              { src: "images/about_item3.jpg", text: "офис-центр «Domus City» (6,4 тыс. м2)" },
              { src: "images/about_item4.jpg", text: "торгово-логистический комплекс (11,1 тыс. м2)" }
            ].map((item, index) => (
              <div className="item" key={index}>
                <img src={item.src} alt="" />
                <span dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        </div>
        <div className="right">
          <img src="images/about.webp" alt="" />
        </div>
      </div>

      <div className="company-info-mb">
        <img src="https://s3-alpha-sig.figma.com/img/c8ad/fdf7/3eeb007c880235f089554272ff921f02?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=..." alt=" " />
        <p>
          ООО «БУГИНКОМ» − девелоперская компания, специализирующаяся на сегменте коммерческой недвижимости...
        </p>
      </div>

      <div className="pyramid-up">
        {["images/pyr1.jpg", "images/pyr2.webp"].map((src, index) => (
          <div className="item" key={index}>
            <img src={src} alt="" />
          </div>
        ))}
      </div>

      <div className="pyramid-down">
        {["images/pyr3.jpg", "images/pyr4.jpg", "images/pyr5.webp"].map((src, index) => (
          <div className="item" key={index}>
            <img src={src} alt="" />
          </div>
        ))}
      </div>

      <div className="pyramid-mb">
        {["images/pyr1.jpg", "images/pyr2.webp", "images/pyr3.jpg", "images/pyr4.jpg", "images/pyr5.webp"].map((src, index) => (
          <img src={src} alt="" key={index} />
        ))}
      </div>
    </>
  );
};

export default About;
