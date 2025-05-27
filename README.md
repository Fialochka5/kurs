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

- MariaDB

### Аутентификация:

- localStorage

## Установка 🔧

### 1. Клонирование репозитория 
```
git clone https://github.com/Fialochka5/kurs.git
```
### 2. Установить зависимости 

Backend:
```
mvn clean install
mvn spring-boot:run
```
Frontend:
```
npm install
```
### 3. Отредактировать application.properties файл ⚙️
```
spring.application.name=demo
server.error.whitelabel.enabled=false

spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jdbc:mysql://localhost:3306/spring_back
spring.datasource.username=fialochka5
spring.datasource.password=2233
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.show-sql: true
```
### 4. Установить зависимости в pom.xml
```
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-thymeleaf</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.junit.jupiter</groupId>
			<artifactId>junit-jupiter-api</artifactId>
			<version>5.9.2</version> <!-- Проверь актуальную версию -->
			<scope>test</scope>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>

		<dependency>
			<groupId>mysql</groupId>
			<artifactId>mysql-connector-java</artifactId>
			<version>8.0.33</version>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>jakarta.persistence</groupId>
			<artifactId>jakarta.persistence-api</artifactId>
			<version>3.1.0</version>
		</dependency>

		<dependency>
			<groupId>org.junit.jupiter</groupId>
			<artifactId>junit-jupiter-engine</artifactId>
			<version>5.9.2</version>
			<scope>test</scope>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>

		<dependency>
			<groupId>org.springframework.security</groupId>
			<artifactId>spring-security-test</artifactId>
			<scope>test</scope>
		</dependency>
```
## Запуск ▶️

Запуск реализован с помощью одной команды: 
```npm run start-all```
```
  "scripts": {
    "start-all": "concurrently \"cd ~/sem2/testkurs/demo && mvn spring-boot:run\" \"npm start\"",
    "build": "react-scripts build",
    "start": "react-scripts start",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```
Реализованно при помощи изменения scripts в файле package.json

## Автор ✍️

Шибун Дмитрий (студент 2 курса БрГТУ): (https://github.com/Fialochka5)
