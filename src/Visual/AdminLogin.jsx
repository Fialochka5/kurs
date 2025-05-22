import React, { useState } from "react";

const AdminLogin = ({ setIsOpen, setIsLoggedIn, setRole }) => { // Добавляем setRole
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      
      const response = await fetch("http://localhost:8080/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

     if (response.ok) {
  const data = await response.json();
  console.log("Ответ сервера:", data);
console.log("Роль с сервера:", data.role);
 
  alert("Успешный вход!");

  localStorage.setItem("token", data.token); 
  localStorage.setItem("role", data.role);  
console.log("Роль в localStorage:", localStorage.getItem("role"));
  setIsLoggedIn(true);
  
  if (typeof setRole === "function") {
    setRole(data.role);
  } else {
    console.error("setRole не передано!");
  }

  setIsOpen(false);
}
else if (response.status === 404) {
        setErrorMessage("Пользователь не найден");
      } else if (response.status === 401) {
        setErrorMessage("Неверный пароль");
      }
    } catch (error) {
      console.error("Ошибка запроса:", error);
      setErrorMessage("Ошибка соединения с сервером.");
    }
  };

  console.log("Состояние модального окна:", setIsOpen);

  return (
    <div className="modal-overlays">
      <div className="modal-contents">
        <span className="close-btn" onClick={() => setIsOpen(false)}>&times;</span>
        <h2>Вход</h2>

        <form className="admin-form" onSubmit={handleLogin}>
          <div className="input-field">
            <input
              type="text"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Пароль</label>
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="btn">Войти</button>
        </form>
        
      </div>
      
    </div>
    
  );
  
  
};

export default AdminLogin;

