import { NavLink, Outlet, useNavigate } from "react-router";
import { useAuth } from "../store/authStore";

function AdminProfile() {
  const currentUser = useAuth((state) => state.currentUser);
  const logout = useAuth((state) => state.logout);
  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 bg-gradient-to-br from-purple-100 via-white to-fuchsia-100 min-h-screen">
      
      {/* HEADER */}
      <div className="bg-fuchsia-800 text-white rounded-3xl p-6 mb-8 flex items-center justify-between shadow-lg">
        
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {currentUser?.profileImageUrl ? (
            <img
              src={currentUser.profileImageUrl}
              className="w-16 h-16 rounded-full object-cover border border-white/30"
              alt="admin"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-white/20 text-white flex items-center justify-center text-xl font-bold">
              {currentUser?.firstName?.charAt(0).toUpperCase()}
            </div>
          )}

          <div>
            <p className="text-sm text-purple-200">Admin Panel</p>
            <h2 className="text-xl font-semibold text-white">
              {currentUser?.firstName}
            </h2>
          </div>
        </div>

        {/* LOGOUT */}
        <button
          onClick={onLogout}
          className="bg-white text-fuchsia-800 text-sm px-5 py-2 rounded-full hover:bg-purple-100 transition shadow"
        >
          Logout
        </button>
      </div>

      {/* NAVIGATION */}
      <div className="flex gap-3 mb-6 bg-white/70 p-2 rounded-full w-fit border border-fuchsia-300 shadow-sm">
        
        <NavLink
          to="users"
          className={({ isActive }) =>
            isActive
              ? "bg-fuchsia-800 text-white px-5 py-2 rounded-full text-sm font-medium"
              : "px-5 py-2 text-sm text-fuchsia-700 hover:text-fuchsia-900"
          }
        >
          Users
        </NavLink>

        <NavLink
          to="authors"
          className={({ isActive }) =>
            isActive
              ? "bg-fuchsia-800 text-white px-5 py-2 rounded-full text-sm font-medium"
              : "px-5 py-2 text-sm text-fuchsia-700 hover:text-fuchsia-900"
          }
        >
          Authors
        </NavLink>

        <NavLink
          to="articles"
          className={({ isActive }) =>
            isActive
              ? "bg-fuchsia-800 text-white px-5 py-2 rounded-full text-sm font-medium"
              : "px-5 py-2 text-sm text-fuchsia-700 hover:text-fuchsia-900"
          }
        >
          Articles
        </NavLink>
      </div>

      <div className="border-t border-fuchsia-200 mb-6"></div>

      {/* CONTENT AREA */}
      <div className="bg-white border border-fuchsia-200 rounded-3xl p-6 shadow-sm min-h-[400px]">
        <Outlet />

        {/* fallback UI when nothing selected */}
        <div className="text-center text-fuchsia-400 py-10">
          
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;