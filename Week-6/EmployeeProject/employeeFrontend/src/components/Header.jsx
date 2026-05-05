import { NavLink } from "react-router";
import { useState } from "react";


function Header() {
  return (
    <nav className="flex justify-end text-3xl font-medium p-7 bg-pink-600 rounded-b-2xl text-white gap-6">
      <NavLink to="" className={({ isActive }) => (isActive ? "text-purple-400" : "")}>
        Home
      </NavLink>
      <NavLink to="create-emp" className={({ isActive }) => (isActive ? "text-blue-400" : "")}>
        CreateEmp
      </NavLink>
      <NavLink to="list" className={({ isActive }) => (isActive ? "text-green-400" : "")}>
        Employees
      </NavLink>
    </nav>
  );
}

export default Header;