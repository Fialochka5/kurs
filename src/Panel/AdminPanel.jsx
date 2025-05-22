import React, { useState, useEffect } from "react";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ email: "", role: "user" });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Ошибка загрузки пользователей:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        alert("Пользователь добавлен!");
        setNewUser({ email: "", role: "user" });
        setUsers([...users, newUser]); // Обновление списка
      } else {
        console.error("Ошибка добавления пользователя");
      }
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

  return (
    <div>
      <h2>Админ-панель</h2>
      <h3>Список пользователей:</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email} ({user.role})</li>
        ))}
      </ul>

      <h3>Добавить нового пользователя</h3>
      <input
        type="text"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <select onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleAddUser}>Добавить пользователя</button>
    </div>
  );
};

export default AdminPanel;
