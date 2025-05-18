import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/api/data")
      .then(response => response.json())
      .then(result => setData(result)) 
      .catch(error => console.error("Ошибка:", error));
  }, []);

  return (
    <div> 
      <p>Ответ с backend: {data.message}</p> 
    </div>
  );
};

export default App;


