import { NavLink } from "react-router";
import { useState } from "react";


function Header() {
  return (
    <div>
    <nav className="flex justify-end text- font-medium p-5 text-2xl bg-pink-600  text-white gap-6">
      
      <NavLink to="/" className={({ isActive }) => (isActive ? "text-purple-400" : "")}>
        Home
      </NavLink>
      <NavLink to="create-emp" className={({ isActive }) => (isActive ? "text-blue-400" : "")}>
        CreateEmp
      </NavLink>
      <NavLink to="list" className={({ isActive }) => (isActive ? "text-green-400" : "")}>
        Employees
      </NavLink>
    </nav>
    </div>
  );
}

export default Header;