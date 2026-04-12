import { NavLink, Outlet, useNavigate } from "react-router";
import { useAuth } from "../store/authStore";

import { pageWrapper, navLinkClass, divider } from "../styles/common.js";

function AuthorProfile() {
  const currentUser = useAuth((state) => state.currentUser);
  const logout = useAuth((state) => state.logout);
  const navigate = useNavigate();

  //call t6his function on logout
  const onLogout = async () => {
    //call login route
    await logout();
    //navigate to login component
    navigate("/login");
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 bg-gradient-to-br from-purple-100 via-white to-fuchsia-100 min-h-screen">
      
      {/* PROFILE HEADER */}
      <div className="bg-fuchsia-800 text-white rounded-3xl p-6 mb-8 flex items-center justify-between">
        
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {currentUser?.profileImageUrl ? (
            <img
              src={currentUser.profileImageUrl}
              className="w-16 h-16 rounded-full object-cover border border-white/30"
              alt="profile"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-white/20 text-white flex items-center justify-center text-xl font-semibold">
              {currentUser?.firstName?.charAt(0).toUpperCase()}
            </div>
          )}
  
          <div>
            <p className="text-sm text-purple-200">Welcome back</p>
            <h2 className="text-xl font-semibold text-white">
              {currentUser?.firstName}
            </h2>
          </div>
        </div>
  
        {/* LOGOUT */}
        <button
          className="bg-white text-fuchsia-800 text-sm px-5 py-2 rounded-full hover:bg-purple-100 transition"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
  
      {/* NAVIGATION */}
      <div className="flex gap-3 mb-6 bg-white/70 p-2 rounded-full w-fit border border-fuchsia-300">
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
  
        <NavLink
          to="write-article"
          className={({ isActive }) =>
            isActive
              ? "bg-fuchsia-800 text-white px-5 py-2 rounded-full text-sm font-medium"
              : "px-5 py-2 text-sm text-fuchsia-700 hover:text-fuchsia-900"
          }
        >
          Write Article
        </NavLink>
      </div>
  
      <div className="border-t border-fuchsia-200"></div>
  
      {/* CONTENT */}
      <div className="mt-6">
        <Outlet/>
      </div>
    </div>
  );
}

export default AuthorProfile;