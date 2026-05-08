import { NavLink } from "react-router";
import { useState } from "react";


function Header() {
  return (
    <div>
      <nav
        className="
          flex justify-end items-center
          p-5 px-10
          text-2xl font-semibold
          bg-gradient-to-r from-pink-600 via-pink-500 to-pink-700
          text-white gap-8
          shadow-xl sticky top-0 z-50
          backdrop-blur-md
        "
      >
  
        <NavLink
          to="/"
          className={({ isActive }) =>
            `
            relative px-4 py-2 rounded-2xl
            transition-all duration-300
            hover:bg-white/20 hover:scale-105
            hover:shadow-lg
            ${
              isActive
                ? "bg-white text-pink-600 shadow-lg scale-105"
                : ""
            }
          `
          }
        >
          Home
        </NavLink>
  
        <NavLink
          to="create-emp"
          className={({ isActive }) =>
            `
            relative px-4 py-2 rounded-2xl
            transition-all duration-300
            hover:bg-white/20 hover:scale-105
            hover:shadow-lg
            ${
              isActive
                ? "bg-white text-pink-600 shadow-lg scale-105"
                : ""
            }
          `
          }
        >
          CreateEmp
        </NavLink>
  
        <NavLink
          to="list"
          className={({ isActive }) =>
            `
            relative px-4 py-2 rounded-2xl
            transition-all duration-300
            hover:bg-white/20 hover:scale-105
            hover:shadow-lg
            ${
              isActive
                ? "bg-white text-pink-600 shadow-lg scale-105"
                : ""
            }
          `
          }
        >
         Employees
        </NavLink>
  
      </nav>
    </div>
  );
}

export default Header;