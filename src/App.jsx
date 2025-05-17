import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/api/data")
      .then(response => response.json())
      .then(result => setData(result)) // ✅ Сохраняем объект { message: "..." }
      .catch(error => console.error("Ошибка:", error));
  }, []);

  return (
    <div>
      <h1>React + Spring Boot</h1>
      <p>Ответ с backend: {data.message}</p> {/* ✅ Теперь React понимает, что вывести */}
    </div>
  );
};

export default App;


