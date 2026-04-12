import { useEffect, useState } from "react";
import axios from "axios";

function AuthorList() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:4000/admin-api/authors",
        { withCredentials: true }
      );

      setAuthors(res.data.payload);
    } catch (err) {
      console.log(err);
      setError("Failed to load authors");
    } finally {
      setLoading(false);
    }
  };

  // 🧨 DELETE AUTHOR
  const deleteAuthor = async (id) => {
    try {
      await axios.delete(
        `http://localhost:4000/admin-api/authors/${id}`,
        { withCredentials: true }
      );

      // instant UI update
      setAuthors((prev) => prev.filter((a) => a._id !== id));
    } catch (err) {
      console.log(err);
      setError("Failed to delete author");
    }
  };

  if (loading)
    return <p className="p-4 text-fuchsia-700">Loading authors...</p>;

  if (error)
    return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {authors.map((a) => (
        <div
          key={a._id}
          className="bg-white border border-fuchsia-200 rounded-2xl p-4 shadow-md hover:shadow-lg transition"
        >
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full bg-fuchsia-800 text-white flex items-center justify-center font-bold">
            {a.firstName?.charAt(0).toUpperCase()}
          </div>

          {/* Name */}
          <p className="font-semibold text-fuchsia-800 mt-2">
            {a.firstName} {a.lastName}
          </p>

          {/* Email */}
          <p className="text-sm text-gray-500">{a.email}</p>

          {/* Role */}
          <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full bg-fuchsia-100 text-fuchsia-700">
            AUTHOR
          </span>

          {/* DELETE BUTTON */}
          <button
            onClick={() => deleteAuthor(a._id)}
            className="mt-4 w-full bg-red-500 text-white py-1 rounded-full hover:bg-red-600 transition"
          >
            Delete Author
          </button>
        </div>
      ))}
    </div>
  );
}

export default AuthorList;