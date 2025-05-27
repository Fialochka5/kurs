# Продажа и аренда недвижимости 🏚️
Проект построен на базе **Java spring framework** для серверной части и **React** для клиентского интерфейса.

## Структура проекта 🏗️

Проект разбит на две основные директории:

- **back** – серверная часть, API, подключение к базе данных и логика.
- **front** – клиентская часть, созданная на React, представляет UI для пользователей.

## Технологии 🤖

### Frontend:

- React
- React DOM
- React Router v6
- Bootstrap
- JavaScript
- CSS

### Backend:

- Spring Boot – основной фреймворк для обработки запросов.
- Spring Security – аутентификация и авторизация.
- Spring Data JPA – управление базой данных.
- MySQL – база данных вместо RethinkDB.
- Maven – управление зависимостями.
- Lombok – упрощение кода.

### Базы данных:

- SQLite3
- RethinkDB

### Аутентификация:

- localStorage

## Установка 🔧

### 1. Клонирование репозитория 📥

```bash
git clone https://github.com/Fialochka5/kurs.git
```

### 2. Установить зависимости 📦

Backend:

```
cd backend
npm install
```

Frontend:

```
cd ./frontend/my-app
npm install
```

### 3. Отредактировать .env файл ⚙️

backend/

```
DATABASE_URL=your_database_url
SECRET_KEY=your_secret_key
```

### 4. Установить свои данные базы данных реального времени RethinkDB 🔌

Откройте файл backend/src/prismaController/messagesController.js и измените следующие настройки

```
host: 'localhost',
port: 28015,
db: 'my_database',
```

---

## Запуск ▶️

backend

```
cd backend
npm start
```

frontend

```
cd ./frontend/my-app
npm start
```

---

## Автор ✍️

Абрамчук Виталий (студент 2 курса БрГТУ): [@abramchuk-vitalik](https://github.com/AbramchukVitalik)
