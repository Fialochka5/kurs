import React, { useState, useEffect } from "react";

const OfficeMatrix = () => {
  const [media, setMedia] = useState([]);
  const [newImage, setNewImage] = useState("");
  const [newVideo, setNewVideo] = useState("");
  const [role, setRole] = useState(localStorage.getItem("role") || "user"); // Получаем роль пользователя

  useEffect(() => {
    setRole(localStorage.getItem("role") || "user");
    const fetchMedia = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/gallery");
        const data = await response.json();
        setMedia(data);
      } catch (error) {
        console.error("Ошибка загрузки медиафайлов:", error);
      }
    };

    fetchMedia();
  }, []);

  const handleAddImage = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/gallery/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ img: newImage }),
      });

      if (response.ok) {
        alert("Изображение добавлено!");
        setNewImage("");
        const updatedMedia = await fetch("http://localhost:8080/api/gallery");
        setMedia(await updatedMedia.json());
      } else {
        console.error("Ошибка добавления изображения");
      }
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

  const handleAddVideo = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/gallery/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ video: newVideo }),
      });

      if (response.ok) {
        alert("Видео добавлено!");
        setNewVideo("");
        const updatedMedia = await fetch("http://localhost:8080/api/gallery");
        setMedia(await updatedMedia.json());
      } else {
        console.error("Ошибка добавления видео");
      }
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

  const handleDeleteMedia = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/gallery/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Медиафайл удалён!");
        setMedia((prevMedia) => prevMedia.filter((item) => item.id !== id));
      } else {
        console.error("Ошибка удаления");
      }
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

  return (
    <div>
      <div className="office">
        <p>ОФИСЫ ПЛОЩАДЬЮ ОТ 20 ДО 1000 М2</p>
      </div>

      <div className="matrix">
        {media.map((item) => (
          <div key={item.id} className="media-item">
            {item.video ? (
              <video width="100%" height="100%" controls>
                <source src={item.video} type="video/mp4" />
              </video>
            ) : item.img ? (
              <img src={item.img} alt="Медиафайл" />
            ) : (
              <p>Нет медиафайла</p>
            )}
            {role === "admin" && (
              <button className="delete-btn" onClick={() => handleDeleteMedia(item.id)}>🗑 Удалить</button>
            )}
          </div>
        ))}
      </div>

      {role === "admin" && (
        <div className="add-media-container">
          <input
            type="text"
            placeholder="Ссылка на изображение"
            value={newImage}
            onChange={(e) => setNewImage(e.target.value)}
          />
          <button onClick={handleAddImage}>Добавить изображение</button>

          <input
            type="text"
            placeholder="Ссылка на видео"
            value={newVideo}
            onChange={(e) => setNewVideo(e.target.value)}
          />
          <button onClick={handleAddVideo}>Добавить видео</button>
        </div>
      )}
    </div>
  );
};

export default OfficeMatrix;
