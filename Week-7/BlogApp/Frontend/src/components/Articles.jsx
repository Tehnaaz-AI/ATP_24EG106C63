import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:4000/admin-api/articles",
        { withCredentials: true }
      );

      setArticles(res.data.payload);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // 🧨 DELETE ARTICLE
  const deleteArticle = async (id) => {
    try {
      await axios.delete(
        `http://localhost:4000/admin-api/articles/${id}`,
        { withCredentials: true }
      );

      // instant UI update
      setArticles((prev) => prev.filter((a) => a._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  if (loading)
    return <p className="p-4 text-fuchsia-700">Loading articles...</p>;

  return (
    <div className="p-4 grid md:grid-cols-2 gap-4">
      {articles.map((a) => (
        <div
          key={a._id}
          className="bg-white border border-fuchsia-200 rounded-2xl p-4 shadow-md"
        >
          <p className="font-semibold text-fuchsia-800">{a.title}</p>

          <p className="text-sm text-gray-500 mt-2  break-words">
            {a.content.slice(0, 80)}...
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex gap-2 mt-3">
            <button
              onClick={() => navigate(`/article/${a._id}`)}
              className="px-4 py-1 bg-fuchsia-800 text-white rounded-full"
            >
              Read
            </button>

            <button
              onClick={() => deleteArticle(a._id)}
              className="px-4 py-1 bg-red-500 text-white rounded-full"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Articles;