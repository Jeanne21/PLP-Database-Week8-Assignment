# 🎓 Node.js + MySQL CRUD API

A simple RESTful CRUD application using **Node.js**, **Express**, and **MySQL**  
for managing **Students** and **Courses**.

---

## 🚀 Features
- Create, Read, Update, Delete students
- Create, Read, Update, Delete courses
- MySQL database connection using `mysql2`
- Organized routes for scalability

---

## 🛠️ Requirements
- Node.js >= 14
- MySQL Server

---

## ⚡ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/node-mysql-crud.git
   cd node-mysql-crud


2. Install dependencies:
    ```bash
    npm install
    ```

3. Create the database:
    ```bash
    CREATE DATABASE school_db;
    USE school_db;
    CREATE TABLE students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE
    );
    CREATE TABLE courses (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(100),
        description TEXT
    );
    ```

4. Update `db.js` with your MySQL credentials.

5. Run the server:
    ```bash
    node server.js
    ```

6. API available at:
    ```bash
    http://localhost:3000
    ```

## 📚 API Endpoints
| Method     | Endpoint     | Description    |
|------------|--------------|----------------|
|GET	| /students	| Get all students |
|GET	| /students/:id	| Get a single student|
|POST	| /students	| Add a new student |
|PUT	| /students/:id	| Update a student |
|DELETE	| /students/:id	| Delete a student |
|GET	| /courses	| Get all courses |
|GET	| /courses/:id	| Get a single course |
|POST	| /courses	| Add a new course |
|PUT	| /courses/:id	| Update a course |
|DELETE	| /courses/:id	|Delete a course |

## 🧪 Testing


Use Postman, cURL, or a browser to test endpoints.
