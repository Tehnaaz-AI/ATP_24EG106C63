import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useAuth } from "../store/authStore";

import {
  articleCardClass,
  articleTitle,
  articleExcerpt,
  articleMeta,
  ghostBtn,
  loadingClass,
  errorClass,
  emptyStateClass,
  articleStatusActive,
  articleStatusDeleted,
} from "../styles/common";

function AuthorArticles() {
  const navigate = useNavigate();
  const user = useAuth((state) => state.currentUser);

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("user in author profile", user);

  useEffect(() => {
    if (!user) return;

    const getAuthorArticles = async () => {
      try {
        setLoading(true);
        //read articles of current author
        let res = await axios.get("http://localhost:4000/author-api/articles", { withCredentials: true });
        if (res.status === 200) {
          setArticles(res.data.payload);
        }
        //update articles state
      } catch (err) {
        console.log(err);
        setError(err.response?.data?.error || "Failed to fetch articles");
      } finally {
        setLoading(false);
      }
    };

    getAuthorArticles();
  }, [user]);

  const openArticle = (article) => {
    navigate(`/article/${article._id}`, {
      state: article,
    });
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
    });
  };

  if (loading) return <p className={loadingClass}>Loading articles...</p>;
  if (error) return <p className={errorClass}>{error}</p>;

  if (articles.length === 0) {
    return <div className={emptyStateClass}>You haven't published any articles yet.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {articles.map((article) => (
        <div
          key={article._id}
          className={`${articleCardClass} relative flex flex-col !border-4 border-fuchsia-400 !rounded-3xl !bg-white/90`}
        >
          {/* Status Badge */}
          <span
            className={
              article.isArticleActive
                ? `${articleStatusActive} !bg-fuchsia-100 !text-fuchsia-700`
                : `${articleStatusDeleted} !bg-purple-100 !text-purple-700`
            }
          >
            {article.isArticleActive ? "ACTIVE" : "DELETED"}
          </span>
  
          <div className="flex flex-col gap-2">
            <p className={`${articleMeta} !text-purple-400`}>
              {article.category}
            </p>
  
            <p className={`${articleTitle} !text-fuchsia-800`}>
              {article.title}
            </p>
  
            {/* FIXED OVERFLOW */}
            <p className={`${articleExcerpt} break-words !text-gray-600`}>
              {article.content.slice(0, 60)}...
            </p>
          </div>
  
          <button
            className={`${ghostBtn} mt-auto pt-4 !text-fuchsia-700 hover:!text-fuchsia-900`}
            onClick={() => openArticle(article)}
          >
            Read Article →
          </button>
        </div>
      ))}
    </div>
  );
}

export default AuthorArticles;