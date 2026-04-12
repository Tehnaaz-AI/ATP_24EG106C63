import { useParams, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../store/authStore";
import { useForm } from "react-hook-form";

function ArticleByID() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const user = useAuth((state) => state.currentUser);
  console.log("user ", user);

  const [article, setArticle] = useState(location.state || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getBaseURL = () => {
    if (user?.role === "ADMIN") return "http://localhost:4000/admin-api";
    if (user?.role === "AUTHOR") return "http://localhost:4000/author-api";
    return "http://localhost:4000/user-api";
  };

  useEffect(() => {
    if (article || !user) return;

    const getArticle = async () => {
      setLoading(true);

      try {
        const res = await axios.get(
          `${getBaseURL()}/article/${id}`,
          { withCredentials: true }
        );

        setArticle(res.data.payload);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load article");
      } finally {
        setLoading(false);
      }
    };

    getArticle();
  }, [id, user]); 

  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  // delete & restore article
  const toggleArticleStatus = async () => {
    const newStatus = !article.isArticleActive;

    const confirmMsg = newStatus ? "Restore this article?" : "Delete this article?";
    if (!window.confirm(confirmMsg)) return;

    try {
      const res = await axios.patch(
        "http://localhost:4000/author-api/articles",
        { articleId: article._id, isArticleActive: newStatus },
        { withCredentials: true }
      );

      setArticle(res.data.payload);
    } catch (err) {
      const msg = err.response?.data?.message;
      setError(msg || "Operation failed");
    }
  };

  // edit article
  const editArticle = (articleObj) => {
    navigate("/edit-article", { state: articleObj });
  };

  // post comment
  const addComment = async (commentObj) => {
    commentObj.articleId = article._id;

    let res = await axios.put(
      "http://localhost:4000/user-api/articles",
      commentObj,
      { withCredentials: true }
    );

    if (res.status === 200) {
      setArticle(res.data.payload);
    }
  };

  if (loading) return <p>Loading article...</p>;
  if (error) return <p>{error}</p>;
  if (!article) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-fuchsia-100 px-4 py-10">

      <div className="max-w-4xl mx-auto bg-white border border-fuchsia-200 rounded-3xl shadow-lg p-6 md:p-10">

        {/* HEADER */}
        <div className="border-b border-fuchsia-200 pb-6 mb-6">

          <span className="inline-block px-4 py-1 text-xs font-semibold bg-fuchsia-100 text-fuchsia-700 rounded-full">
            {article.category}
          </span>

          <h1 className="text-2xl md:text-4xl font-bold text-fuchsia-800 mt-4 uppercase leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 mt-4 gap-2">

            <div className="flex items-center gap-2 text-fuchsia-700 font-medium">
              ✍️ {user?.role}
            </div>

            <div>
              {formatDate(article.createdAt)}
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="text-gray-700 leading-relaxed text-base md:text-lg whitespace-pre-line mb-8">
          {article.content}
        </div>

        {/* AUTHOR ACTIONS */}
        {user?.role === "AUTHOR" && (
          <div className="flex gap-3 mb-8">

            <button
              className="px-5 py-2 rounded-full bg-fuchsia-800 text-white hover:bg-purple-700"
              onClick={() => editArticle(article)}
            >
              Edit
            </button>

            <button
              className={`px-5 py-2 rounded-full ${
                article.isArticleActive
                  ? "bg-red-500 text-white"
                  : "bg-green-500 text-white"
              }`}
              onClick={toggleArticleStatus}
            >
              {article.isArticleActive ? "Delete" : "Restore"}
            </button>

          </div>
        )}

        {/* USER COMMENT FORM */}
        {user?.role === "USER" && (
          <div className="mb-8">

            <form onSubmit={handleSubmit(addComment)} className="flex gap-3">

              <input
                type="text"
                {...register("comment")}
                placeholder="Write your comment..."
                className="flex-1 px-4 py-3 border border-fuchsia-200 rounded-xl"
              />

              <button
                type="submit"
                className="px-6 py-3 bg-amber-600 text-white rounded-xl"
              >
                Add comment
              </button>

            </form>

          </div>
        )}

        {/* COMMENTS */}
        <div className="space-y-4">

          {article.comments?.length === 0 && (
            <p className="text-center text-gray-400 text-sm">
              No comments yet
            </p>
          )}

          {article.comments?.map((commentObj, index) => {

            const name = commentObj.user?.email || "User";
            const firstLetter = name.charAt(0).toUpperCase();

            return (
              <div key={index} className="border rounded-2xl p-4 bg-white">

                <div className="flex items-center gap-3 mb-2">

                  <div className="w-10 h-10 rounded-full bg-fuchsia-800 text-white flex items-center justify-center">
                    {firstLetter}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-fuchsia-700">
                      {name}
                    </p>
                  </div>

                </div>

                <p>{commentObj.comment}</p>

              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}

export default ArticleByID;