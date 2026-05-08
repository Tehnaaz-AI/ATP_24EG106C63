import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer
      className="
        bg-gradient-to-r from-pink-600 via-pink-500 to-pink-700
        text-white mt-14 shadow-2xl
      "
    >
      <div
        className="
          max-w-6xl mx-auto px-6 py-10
          grid md:grid-cols-3 gap-10
        "
      >
        
        {/* LEFT - Branding */}
        <div className="space-y-3">
          <h1
            className="
              text-3xl font-extrabold tracking-wide
              hover:tracking-widest transition-all duration-300
            "
          >
            Employee Manager
          </h1>
  
          <p className="text-sm text-pink-100 leading-6">
            Manage employees efficiently with a clean,
            modern, and user-friendly interface.
          </p>
  
          <div className="flex gap-3 pt-2">
            <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-pink-200 animate-pulse delay-150"></div>
            <div className="w-3 h-3 rounded-full bg-pink-100 animate-pulse delay-300"></div>
          </div>
        </div>
  
        {/* CENTER - Links */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold border-b border-pink-300 pb-2 w-fit">
            Quick Links
          </h2>
  
          <Link
            to="/"
            className="
              hover:translate-x-2 hover:text-pink-200
              transition-all duration-300 w-fit
            "
          >
            🏠 Home
          </Link>
  
          <Link
            to="/create-emp"
            className="
              hover:translate-x-2 hover:text-pink-200
              transition-all duration-300 w-fit
            "
          >
            ➕ Add Employee
          </Link>
  
          <Link
            to="/list"
            className="
              hover:translate-x-2 hover:text-pink-200
              transition-all duration-300 w-fit
            "
          >
            📋 View Employees
          </Link>
        </div>
  
        {/* RIGHT - Contact */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold border-b border-pink-300 pb-2 w-fit">
            Contact
          </h2>
  
          <div
            className="
              bg-white/10 backdrop-blur-sm
              p-4 rounded-2xl
              hover:bg-white/20
              transition-all duration-300
              hover:scale-105
            "
          >
            <p className="text-sm text-pink-100">
              📧 24eg106c63@anurag.edu.in
            </p>
  
            <p className="text-sm text-pink-100 mt-2">
              📞 +91 9640182567
            </p>
          </div>
        </div>
      </div>
  
      {/* BOTTOM BAR */}
      <div
        className="
          border-t border-pink-400/50
          text-center py-4 text-sm
          bg-black/10 backdrop-blur-md
        "
      >
        © {new Date().getFullYear()} Employee Manager.
        <span className="font-semibold"> All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer