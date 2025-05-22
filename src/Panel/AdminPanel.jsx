import React, { useState, useEffect } from "react";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ email: "", password: "", role: "user" });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/user");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Ошибка загрузки пользователей:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = async () => {
  // Проверяем, существует ли email в списке пользователей
  const emailExists = users.some(user => user.email === newUser.email);
  
  if (emailExists) {
    alert("Ошибка: пользователь с таким email уже существует!");
    return;
  }

  try {
    const response = await fetch("http://localhost:8080/api/user/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    if (response.ok) {
      alert("Пользователь добавлен!");
      setNewUser({ email: "", password: "", role: "user" });
      setUsers([...users, newUser]); // Обновление списка
    } else {
      console.error("Ошибка добавления пользователя");
    }
  } catch (error) {
    console.error("Ошибка запроса:", error);
  }
};

  return (
    <div className="admin-panel">
      <h2>Админ-панель</h2>
      <h3>Список пользователей:</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email} ({user.role})</li>
        ))}
      </ul>

      <h3>Добавить нового пользователя</h3>
      <div className="user-form">
        <input
          type="text"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
       
        <button onClick={handleAddUser}>Добавить пользователя</button>
      </div>
    </div>
  );
};

export default AdminPanel;
