import { NavLink } from "react-router";
import { useAuth } from "../store/authStore";
import images from "../assets/images.jpeg"
import {
  navbarClass,
  navContainerClass,
  navBrandClass,
  navLinksClass,
  navLinkClass,
  navLinkActiveClass,
} from "../styles/common";

function Header() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const user = useAuth((state) => state.currentUser);

  // decide profile route based on role
  const getProfilePath = () => {
    if (!user) return "/";

    switch (user.role) {
      case "AUTHOR":
        return "/author-profile";
      case "ADMIN":
        return "/admin-profile";
      default:
        return "/user-profile";
    }
  };

  return (
    <nav className={`${navBrandClass}`}>
      <div className={` bg-fuchsia-800 rounded-b-2xl flex items-center justify-between`}>

        {/* LOGO */}
        <NavLink to="/" className={` p-3 pl-5  ${navBrandClass}`}>
           <img src={images} alt="" className="h-18 w-auto rounded-full" />
        </NavLink>

        <ul className={` pr-5 ${navLinksClass}`}>

          {/* HOME */}
          <li>
            <NavLink
              to="/"
              end
              className={` text-1xl font-serif border-2 p-3 b text-white bg-fuchsia-800 rounded-3xl ${ ({ isActive }) =>
                isActive ? navLinkActiveClass : navLinkClass
              }`}
            >
              Home
            </NavLink>
          </li>

          {/* NOT LOGGED IN */}
          {!isAuthenticated && (
            <>
              <li>
                <NavLink
                  to="/register"
                  className={` text-1xl font-serif border-2 p-3 b text-white bg-fuchsia-800 rounded-3xl ${ ({ isActive }) =>
                    isActive ? navLinkActiveClass : navLinkClass
                  }`}
                >
                  Register
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/login"
                  className={` text-1xl font-serif border-2 p-3 b text-white bg-fuchsia-800 rounded-3xl ${ ({ isActive }) =>
                    isActive ? navLinkActiveClass : navLinkClass
                  }`}
                >
                  Login
                </NavLink>
              </li>
            </>
          )}

          {/* LOGGED IN */}
          {isAuthenticated && (
            <li>
              <NavLink
                to={getProfilePath()}
                className={` text-1xl font-serif border-2 p-3 b text-white bg-fuchsia-800 rounded-3xl ${ ({ isActive }) =>
                  isActive ? navLinkActiveClass : navLinkClass
                }`}
              >
                Profile
              </NavLink>
            </li>
          )}

        </ul>
      </div>
    </nav>
  );
}

export default Header;