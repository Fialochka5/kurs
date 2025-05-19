import React from "react";

const OfficeMatrix = () => {
  return (
    <div>
      {/* Офисы */}
      <div className="office">
        <p>ОФИСЫ ПЛОЩАДЬЮ ОТ 20 ДО 1000 М2</p>
      </div>

      {/* Матрица из фото и видео */}
      <div className="matrix">
        <img src="images/matrix1.webp" alt="" />
        <img src="images/matrix2.webp" alt="" />
        <img src="images/matrix3.webp" alt="" />
        <img src="images/matrix4.webp" alt="" />
        <img src="images/matrix5.webp" alt="" />
        <img src="images/matrix6.webp" alt="" />
        <video
          src="https://cdn.pixabay.com/video/2015/10/16/1046-142621379_large.mp4"
          width="100%"
          height="100%"
          controls
          className="video-1"
        ></video>
        <video
          src="https://cdn.pixabay.com/video/2015/10/16/1046-142621379_large.mp4"
          width="100%"
          height="100%"
          controls
          className="video-2"
        ></video>
        <video
          src="https://cdn.pixabay.com/video/2015/10/16/1046-142621379_large.mp4"
          width="100%"
          height="100%"
          controls
          className="video-3"
        ></video>
      </div>
    </div>
  );
};

export default OfficeMatrix;
