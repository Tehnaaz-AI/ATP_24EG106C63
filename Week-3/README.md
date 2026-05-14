# Week 3 Assignment README

## Node.js Backend Development with Express.js, MongoDB, Authentication, and REST APIs

---

# Overview

This assignment focuses on backend application development using Node.js, Express.js, and MongoDB. The project demonstrates REST API development, database integration, authentication using JWT, password hashing, middleware handling, and cart management features.

The application simulates a backend system for user and product management with secure authentication and protected routes.

Additionally, Live Server was introduced in the previous week to simplify frontend development and enable automatic browser refresh during development.

---

# Technologies Used

1. JavaScript ES6

2. Node.js

3. Express.js

4. MongoDB

5. Mongoose

6. JWT Authentication

7. bcryptjs

8. cookie-parser

9. dotenv

10. REST APIs

11. VS Code Live Server

---

# Programs Included

1. Express Server Setup

2. MongoDB Database Connection using Mongoose

3. Environment Variable Configuration using dotenv

4. User Authentication using JWT

5. Password Hashing using bcryptjs

6. Cookie Handling using cookie-parser

7. User CRUD REST APIs

8. Product CRUD REST APIs

9. Token Verification Middleware

10. Protected API Routes

11. User Login System

12. Cart Management System

13. Error Handling Middleware

14. REST Client API Testing

15. MongoDB Model Integration

16. User and Product Routing using Express Router

17. Live Server Introduction and Usage

---

# How to Use

## Install Dependencies

1. Open terminal inside project folder

2. Run:

```bash id="tdm1v0"
npm install
```

---

## Configure Environment Variables

1. Create a `.env` file

2. Add the following:

```env id="kh9vqv"
port=4000
db_url=mongodb://localhost:27017
secret_key=your_secret_key
```

---

## Start MongoDB Server

1. Ensure MongoDB is installed

2. Start MongoDB service locally

---

## Run Backend Server

```bash id="r8zy5g"
npm start
```

or

```bash id="7vphfi"
node server.js
```

---

## Test APIs

1. Open REST Client or Postman

2. Use API endpoints such as:

```text id="f0r5vt"
http://localhost:4000/user-api/users
```

```text id="tbjlwm"
http://localhost:4000/product-api/products
```

---

## Live Server Usage

1. Install Live Server extension in VS Code

2. Right click HTML file

3. Click `Open with Live Server`

4. Browser refreshes automatically on file changes

---

# Learning Outcomes

1. Understanding backend architecture using Express.js

2. Connecting Node.js applications with MongoDB

3. Working with Mongoose models and schemas

4. Implementing JWT based authentication

5. Using middleware for request handling and security

6. Hashing passwords securely using bcryptjs

7. Managing cookies and user sessions

8. Building secure REST APIs

9. Performing CRUD operations with MongoDB

10. Structuring applications using modular routing

11. Handling server side errors effectively

12. Testing APIs using REST Client and Postman

13. Understanding protected routes and token verification

14. Using Live Server for efficient frontend development

15. Improving full stack backend development skills
