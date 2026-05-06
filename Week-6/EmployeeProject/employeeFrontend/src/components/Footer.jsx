import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white mt-10">
      
      <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8">
        
        {/* LEFT - Branding */}
        <div>
          <h1 className="text-2xl font-bold">Employee Manager</h1>
          <p className="mt-2 text-sm text-pink-100">
            Manage employees efficiently with a clean and simple interface.
          </p>
        </div>

        {/* CENTER - Links */}
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/create-emp" className="hover:underline">Add Employee</Link>
          <Link to="/list" className="hover:underline">View Employees</Link>
        </div>

        {/* RIGHT - Contact */}
        <div>
          <h2 className="text-lg font-semibold">Contact</h2>
          <p className="text-sm text-pink-100 mt-2">
            Email: support@empmanager.com
          </p>
          <p className="text-sm text-pink-100">
            Phone: +91 98765 43210
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-pink-400 text-center py-4 text-sm">
        © {new Date().getFullYear()} Employee Manager. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer