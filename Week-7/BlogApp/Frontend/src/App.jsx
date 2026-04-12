import { createBrowserRouter, RouterProvider } from "react-router";

import RootLayout from "./components/Root";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";

import UserProfile from "./components/UserProfile";
import AuthorProfile from "./components/AuthorProfile";
import AuthorArticles from "./components/AuthorArticles";
import WriteArticles from "./components/WriteArticles";

import ArticleByID from "./components/ArticleByID";
import EditArticle from "./components/EditArticle";

import AdminProfile from "./components/AdminProfile";
import UserList from "./components/UserList";
import AuthorList from "./components/AuthorList";
import Articles from "./components/Articles";

import { Toaster } from "react-hot-toast";

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },

        // USER
        { path: "user-profile", element: <UserProfile /> },

        // AUTHOR
        {
          path: "author-profile",
          element: <AuthorProfile />,
          children: [
            { index: true, element: <AuthorArticles /> },
            { path: "articles", element: <AuthorArticles /> },
            { path: "write-article", element: <WriteArticles /> },
          ],
        },

        // ADMIN
        {
          path: "admin-profile",
          element: <AdminProfile />,
          children: [
            {index: true,element: <UserList />},
            { path: "users", element: <UserList /> },
            { path: "authors", element: <AuthorList /> },
            { path: "articles", element: <Articles /> },
          ],
        },

        // ARTICLE
        { path: "article/:id", element: <ArticleByID /> },
        { path: "edit-article", element: <EditArticle /> },
      ],
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-fuchsia-100 to-fuchsia-800">
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={routerObj} />
    </div>
  );
}

export default App;