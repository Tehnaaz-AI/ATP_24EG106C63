# BlogApp Frontend

A modern, responsive React-based frontend for a multi-user blogging platform. Built with Vite, React Router, Tailwind CSS, and state management with Zustand. Provides distinct interfaces for users, authors, and admins with role-based access control.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Running the Application](#running-the-application)
- [Pages and Routing](#pages-and-routing)
- [State Management](#state-management)
- [Deployment](#deployment)

## Tech Stack

- **Frontend Framework**: React (v19.2.4)
- **Build Tool**: Vite (v8.0.1)
- **Styling**: Tailwind CSS (v4.2.2)
- **Routing**: React Router (v7.13.2)
- **State Management**: Zustand (v5.0.12)
- **HTTP Client**: Axios (v1.14.0)
- **Forms**: React Hook Form (v7.72.0)
- **Notifications**: React Hot Toast (v2.6.0)
- **Code Quality**: ESLint (v9.39.4)

## Project Structure

```
Frontend/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Navigation header
│   │   ├── Footer.jsx              # Footer component
│   │   ├── Root.jsx                # Root layout wrapper
│   │   ├── ProtectedRoutes.jsx     # Route protection wrapper
│   │   ├── Home.jsx                # Home page
│   │   ├── Register.jsx            # User registration
│   │   ├── Login.jsx               # User login
│   │   ├── ChangePassword.jsx      # Password change page
│   │   │
│   │   ├── UserProfile.jsx         # User dashboard
│   │   │
│   │   ├── AuthorProfile.jsx       # Author dashboard
│   │   ├── AuthorArticles.jsx      # Author's articles list
│   │   ├── WriteArticles.jsx       # Create new article
│   │   ├── EditArticle.jsx         # Edit existing article
│   │   │
│   │   ├── AdminProfile.jsx        # Admin dashboard
│   │   ├── UserList.jsx            # Manage users
│   │   ├── AuthorList.jsx          # Manage authors
│   │   ├── Articles.jsx            # Manage all articles
│   │   │
│   │   ├── ArticleByID.jsx         # Article detail page
│   │   ├── AuthorList.jsx          # Browse authors
│   │   └── Unauthorized.jsx        # Access denied page
│   │
│   ├── store/
│   │   └── authStore.js            # Zustand auth store
│   │
│   ├── styles/                     # Custom CSS files
│   ├── assets/                     # Images and static files
│   ├── App.jsx                     # Main app component with routing
│   ├── config.js                   # API configuration
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Global styles
│
├── public/                         # Static assets
├── package.json                    # Dependencies
├── vite.config.js                  # Vite configuration
├── eslint.config.js                # ESLint rules
├── .env                            # Environment variables (not in repo)
└── README.md                        # This file
```

## Features

### Authentication & General
- User registration with email validation
- Secure login with JWT tokens
- Change password functionality
- Role-based access control (RBAC)
- Protected routes based on user role
- Logout functionality

### User Features
- View homepage with latest articles
- Browse all published articles
- Search and filter articles by category
- Read full article content
- View author profiles
- Manage personal profile information
- Add comments on articles

### Author Features
- Create new blog articles
- Edit and update published articles
- Delete articles
- Manage article categories
- View article analytics
- Author profile customization
- Author dashboard with article overview

### Admin Features
- View all users with status
- Activate/deactivate user accounts
- View all articles on the platform
- Delete inappropriate articles
- Access admin dashboard with platform statistics
- Manage authors and their content
- Platform monitoring and moderation

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Backend API running locally or deployed

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd BlogApp/Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create .env file** in the Frontend root directory with required variables (see [Environment Configuration](#environment-configuration))

4. **Start the development server**
   ```bash
   npm run dev
   ```
   
   Frontend will be available at `http://localhost:5173`

## Environment Configuration

Create a `.env` file in the Frontend root directory with the following variables:

```env
# API Configuration
VITE_API_URL=http://localhost:4000
```

### Environment Variables Description:
- **VITE_API_URL**: Backend API base URL
  - Development: `http://localhost:4000`
  - Production: `https://blog-app-backend.vercel.app` or your deployed backend URL

**Note**: Environment variables must be prefixed with `VITE_` to be accessible in React via `import.meta.env`

## Running the Application

### Development Server
```bash
npm run dev
```
Runs the app in development mode with Hot Module Replacement (HMR).

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder.

### Preview Build
```bash
npm run preview
```
Serves the production build locally for testing.

### Lint Code
```bash
npm run lint
```
Runs ESLint to check code quality.

## Pages and Routing

### Public Routes
- `/` - Home page with article feed
- `/register` - User registration page
- `/login` - User login page
- `/change-password` - Change password

### Protected Routes

**User Routes**
- `/user-profile` - User dashboard and profile management

**Author Routes**
- `/author-profile` - Author dashboard
- `/author-profile/articles` - View author's articles
- `/author-profile/write-article` - Create new article
- `/author-profile/edit-article/:id` - Edit article

**Admin Routes**
- `/admin-profile` - Admin dashboard
- `/admin-profile/users` - Manage users
- `/admin-profile/authors` - Manage authors
- `/admin-profile/articles` - Manage all articles

**Common Protected Routes**
- `/articles/:id` - View article details
- `/authors/:id` - View author profile

**Error Routes**
- `/unauthorized` - Access denied page

## State Management

### Zustand Store (`store/authStore.js`)
Manages global authentication state:
- User authentication status
- User role and permissions
- JWT token storage
- Login/logout actions
- User data caching

**Usage Example**:
```javascript
import { useAuthStore } from './store/authStore';

const { user, isLoggedIn, logout } = useAuthStore();
```

## Deployment

### Vercel Deployment

The frontend is configured for deployment on Vercel with automatic CI/CD.

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
   - Select the Frontend folder as the root directory

3. **Add Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add the following variables:
     - `VITE_API_URL`: Your deployed backend URL

4. **Configure Build Settings**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. **Deploy**
   - Vercel automatically deploys on every push to main branch
   - Deployment URL will be provided in the Vercel dashboard

### Build Output
- Production-optimized React bundle
- Minified JavaScript and CSS
- Optimized image assets
- Static HTML files ready for serving

### Environment Variable Configuration for Production
Update your `.env` file or Vercel environment variables with:
```env
VITE_API_URL=https://your-backend-domain.vercel.app
```

## Responsive Design

The frontend uses Tailwind CSS for fully responsive design:
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interfaces
- Accessible navigation

## Security Features

- JWT token-based authentication
- Protected routes with role verification
- Secure HTTP-only cookies
- CORS-enabled communication with backend
- Environment variable protection

## Styling

### Tailwind CSS Integration
- Utility-first CSS framework
- Custom components and utilities
- Responsive design system
- Dark mode ready

### Custom Styles
- Global styles in `src/index.css`
- Component-specific styles in `src/styles/`

## Support

For issues or questions, please refer to the documentation or contact the development team.

---

