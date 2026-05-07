import React from "react";
import { NavLink } from "react-router";
import { useAuth } from "../store/authStore";

function Footer() {

  const currentUser = useAuth((state) => state.currentUser);

  return (
    <footer className="bg-gradient-to-r from-fuchsia-900 via-fuchsia-800 to-purple-900 text-white mt-10">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* BRAND */}
          <div>

            <h2 className="text-xl font-bold">
              BlogSphere
            </h2>

            <p className="text-sm text-purple-200 mt-2 leading-6">
              A modern platform for sharing ideas, stories, and knowledge.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-purple-200">

              {/* HOME */}
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-semibold"
                      : "hover:text-white transition"
                  }
                >
                  Home
                </NavLink>
              </li>

              {/* PROFILE */}
              {currentUser?.role === "USER" && (
                <li>
                  <NavLink
                    to="/user-profile"
                    className="hover:text-white transition"
                  >
                    Profile
                  </NavLink>
                </li>
              )}

              {currentUser?.role === "AUTHOR" && (
                <li>
                  <NavLink
                    to="/author-profile"
                    className="hover:text-white transition"
                  >
                    Profile
                  </NavLink>
                </li>
              )}

              {currentUser?.role === "ADMIN" && (
                <li>
                  <NavLink
                    to="/admin-profile"
                    className="hover:text-white transition"
                  >
                    Profile
                  </NavLink>
                </li>
              )}

              {/* ARTICLES */}
              {currentUser?.role === "AUTHOR" && (
                <li>
                  <NavLink
                    to="/author-profile/articles"
                    className="hover:text-white transition"
                  >
                    Articles
                  </NavLink>
                </li>
              )}

              {currentUser?.role === "ADMIN" && (
                <li>
                  <NavLink
                    to="/admin-profile/articles"
                    className="hover:text-white transition"
                  >
                    Articles
                  </NavLink>
                </li>
              )}

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="font-semibold mb-3">
              Contact
            </h3>

            <p className="text-sm text-purple-200">
              24eg106c63@anurag.edu.in
            </p>

            <p className="text-sm text-purple-200 mt-1">
              +91 9640182567
            </p>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/20 my-6"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-purple-200 gap-3">

          <p>
            © {new Date().getFullYear()} BlogSphere. All rights reserved.
          </p>

          <div className="flex gap-4">

            <NavLink
              to="/"
              className="hover:text-white transition"
            >
              Privacy
            </NavLink>

            <NavLink
              to="/"
              className="hover:text-white transition"
            >
              Terms
            </NavLink>

            <NavLink
              to="/"
              className="hover:text-white transition"
            >
              Help
            </NavLink>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;