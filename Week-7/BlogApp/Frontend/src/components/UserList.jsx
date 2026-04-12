import { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:4000/admin-api/users",
        { withCredentials: true }
      );

      setUsers(res.data.payload);
    } catch (err) {
      setError("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  // 🧨 DELETE USER FUNCTION
  const deleteUser = async (id) => {
    try {
      await axios.delete(
        `http://localhost:4000/admin-api/users/${id}`,
        { withCredentials: true }
      );

      // instantly remove from UI
      setUsers((prev) => prev.filter((u) => u._id !== id));
    } catch (err) {
      console.log(err);
      setError("Failed to delete user");
    }
  };

  if (loading) return <p className="p-6 text-fuchsia-700">Loading users...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {users.map((user) => (
        <div
          key={user._id}
          className="border border-fuchsia-300 rounded-2xl p-4 shadow-md bg-white hover:shadow-xl transition relative"
        >
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full bg-fuchsia-800 text-white flex items-center justify-center font-bold">
            {user.firstName?.charAt(0).toUpperCase()}
          </div>

          {/* Name */}
          <h2 className="text-lg font-semibold text-fuchsia-800 mt-2">
            {user.firstName} {user.lastName}
          </h2>

          {/* Email */}
          <p className="text-sm text-gray-600">{user.email}</p>

          {/* Role Badge */}
          <span className="text-xs px-3 py-1 rounded-full bg-fuchsia-100 text-fuchsia-700 w-fit mt-2 inline-block">
            {user.role}
          </span>

          {/* DELETE BUTTON */}
          <button
            onClick={() => deleteUser(user._id)}
            className="mt-4 w-full bg-red-500 text-white py-1 rounded-full hover:bg-red-600 transition"
          >
            Delete User
          </button>
        </div>
      ))}
    </div>
  );
}

export default UserList;