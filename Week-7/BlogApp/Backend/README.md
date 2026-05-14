# BlogApp Backend

A RESTful API backend for a multi-user blogging platform built with Express.js and MongoDB. The backend supports three user roles: users, authors, and admins, each with distinct functionalities and permissions.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Database Models](#database-models)

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js (v5.2.1)
- **Database**: MongoDB with Mongoose (v9.3.0)
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: 
  - bcryptjs for password hashing
  - CORS for cross-origin requests
  - Cookie Parser for secure cookie handling
- **File Upload**: Multer
- **Image Storage**: Cloudinary
- **Environment Management**: dotenv

## Project Structure

```
Backend/
├── APIs/
│   ├── UserAPI.js          # User endpoints
│   ├── AuthorAPI.js        # Author endpoints
│   ├── AdminAPI.js         # Admin endpoints
│   └── commonAPI.js        # Authentication & common routes
├── models/
│   ├── UserModel.js        # User schema and model
│   └── ArticleModel.js     # Article schema and model
├── middleware/
│   └── verifyToken.js      # JWT verification middleware
├── config/
│   ├── cloudinary.js       # Cloudinary configuration
│   ├── cloudinaryUpload.js # Cloudinary upload utilities
│   └── multer.js           # Multer file upload configuration
├── server.js               # Express app configuration and startup
├── package.json            # Project dependencies
├── vercel.json             # Vercel deployment configuration
├── .env                    # Environment variables (not in repo)
└── README.md               # This file
```

## Features

### User Features
- User registration and login
- Browse published articles
- View author profiles
- Manage user profile

### Author Features
- Create, read, update, and delete articles
- Categorize articles
- Add comments to articles
- Manage author profile and credentials

### Admin Features
- Manage all users (activate/deactivate)
- Manage all articles
- Monitor platform activity
- User and content moderation

### General Features
- JWT-based authentication
- Secure password hashing with bcryptjs
- Image upload and storage via Cloudinary
- CORS enabled for frontend integration
- Cookie-based session management

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB database (local or cloud)
- Cloudinary account for image storage

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd BlogApp/Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create .env file** in the Backend root directory with required variables (see [Environment Configuration](#environment-configuration))

4. **Start the server**
   ```bash
   npm start
   ```
   
   Server will run on the port specified in `.env` or default to `5000`

## ⚙️ Environment Configuration

Create a `.env` file in the Backend directory with the following variables:

```env
# Database
DB_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database_name>

# Server Port
PORT=5000

# JWT Secret
JWT_SECRET=your_jwt_secret_key

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Environment Variables Description:
- **DB_URL**: MongoDB connection string (Atlas or local)
- **PORT**: Server listening port (default: 5000)
- **JWT_SECRET**: Secret key for JWT token signing
- **CLOUDINARY_***: Credentials for cloud image storage

## 📡 API Endpoints

### Common API Routes (`/auth`)
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout

### User API Routes (`/user-api`)
- `GET /user-api/articles` - Get all published articles
- `GET /user-api/articles/:id` - Get article by ID
- `GET /user-api/authors/:id` - Get author profile
- `GET /user-api/profile` - Get user profile
- `PUT /user-api/profile` - Update user profile

### Author API Routes (`/author-api`)
- `POST /author-api/articles` - Create new article
- `GET /author-api/articles` - Get author's articles
- `GET /author-api/articles/:id` - Get specific article
- `PUT /author-api/articles/:id` - Update article
- `DELETE /author-api/articles/:id` - Delete article
- `POST /author-api/articles/:id/comments` - Add comment

### Admin API Routes (`/admin-api`)
- `GET /admin-api/users` - Get all users
- `PUT /admin-api/users/:id` - Deactivate/activate user
- `GET /admin-api/articles` - Get all articles
- `DELETE /admin-api/articles/:id` - Delete article
- `GET /admin-api/dashboard` - Get platform statistics

## 📊 Database Models

### User Model
```javascript
{
  firstName: String,
  lastName: String,
  email: String (unique),
  password: String (hashed),
  role: String (enum: ['user', 'author', 'admin']),
  profileImageUrl: String,
  isUserActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Article Model
```javascript
{
  author: ObjectId (ref: User),
  title: String,
  category: String,
  content: String,
  comments: Array,
  imageUrl: String,
  isArticleActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

## Deployment

### Vercel Deployment

The project is configured for deployment on Vercel using the provided `vercel.json` configuration.

#### Deployment Steps:

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select the project root folder

3. **Add Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add all variables from your `.env` file:
     - `DB_URL`
     - `PORT`
     - `JWT_SECRET`
     - `CLOUDINARY_CLOUD_NAME`
     - `CLOUDINARY_API_KEY`
     - `CLOUDINARY_API_SECRET`

4. **Deploy**
   - Vercel automatically deploys on every push to main branch
   - Deployment URL will be provided in the Vercel dashboard

#### Vercel Configuration (`vercel.json`)
```json
{
  "version": 2,
  "builds": [
    { "src": "server.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "server.js" }
  ]
}
```

### Allowed Origins (CORS)
The backend accepts requests from:
- `http://localhost:5173` (Local frontend development)
- `https://blog-app.vercel.app` (Production frontend)
- `https://blog-app-pq327rb14-24eg106c63-5169s-projects.vercel.app` (Staging frontend)

To add more origins, update the `allowedOrigins` array in `server.js`

## API Documentation

Refer to the HTTP request files for examples:
- `user-req.http` - User API requests
- `author-req.http` - Author API requests
- `admin-req.http` - Admin API requests

## Security Features

- **Password Hashing**: bcryptjs with salt rounds
- **JWT Authentication**: Secure token-based authentication
- **CORS Protection**: Controlled cross-origin requests
- **Environment Variables**: Sensitive data not exposed in code
- **Middleware**: Token verification on protected routes

