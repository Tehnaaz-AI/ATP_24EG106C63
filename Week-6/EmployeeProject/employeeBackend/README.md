# Week 6 Employee Backend README

## Employee Management Backend using Node.js, Express.js, MongoDB, JWT Authentication, and REST APIs

---

# Overview

This project focuses on backend development for an Employee Management System using Node.js, Express.js, and MongoDB. The backend handles employee records, authentication, authorization, and secure API communication.

The application demonstrates REST API development, database integration, JWT based authentication, middleware usage, CRUD operations, and secure backend architecture.

---

# Technologies Used

1. JavaScript ES6

2. Node.js

3. Express.js

4. MongoDB

5. Mongoose

6. JWT Authentication

7. bcryptjs

8. dotenv

9. cookie parser

10. CORS

11. REST APIs

12. Multer

13. Cloudinary

---

# Project Structure

```text
EmployeeBackend/
│
├── APIs/
│   ├── employeeAPI.js
│   ├── adminAPI.js
│   └── authAPI.js
│
├── models/
│   ├── EmployeeModel.js
│   └── AdminModel.js
│
├── middleware/
│   └── verifyToken.js
│
├── config/
│   ├── cloudinary.js
│   ├── multer.js
│   └── cloudinaryUpload.js
│
├── server.js
├── package.json
├── .env
└── README.md
```

---

# Features

1. Employee Registration and Login

2. JWT Based Authentication

3. Password Hashing using bcryptjs

4. Employee CRUD Operations

5. Protected Routes using Middleware

6. Image Upload using Multer and Cloudinary

7. MongoDB Database Integration

8. Admin Management Features

9. Role Based Authorization

10. Cookie Handling

11. Error Handling Middleware

12. REST API Architecture

---

# API Endpoints

## Authentication APIs

```text
POST /auth/register
POST /auth/login
POST /auth/logout
```

---

## Employee APIs

```text
GET /employee-api/employees
GET /employee-api/employees/:id
POST /employee-api/employees
PUT /employee-api/employees/:id
DELETE /employee-api/employees/:id
```

---

## Admin APIs

```text
GET /admin-api/dashboard
GET /admin-api/users
PUT /admin-api/users/:id
DELETE /admin-api/users/:id
```

---

# Environment Variables

Create a `.env` file and add:

```env
PORT=4000
DB_URL=mongodb://localhost:27017/employeedb
JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

# Installation

## Install Dependencies

```bash
npm install
```

---

## Start MongoDB

1. Install MongoDB locally

2. Start MongoDB service

---

## Run Backend Server

```bash
npm start
```

or

```bash
node server.js
```

---

# Learning Outcomes

1. Understanding backend architecture

2. Working with Express.js APIs

3. Connecting MongoDB using Mongoose

4. Implementing JWT Authentication

5. Using middleware for route protection

6. Uploading files with Multer

7. Cloudinary image storage integration

8. Building secure REST APIs

9. Managing employee data efficiently

10. Implementing role based access control
