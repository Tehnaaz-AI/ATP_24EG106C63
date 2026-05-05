import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-fuchsia-900 via-fuchsia-800 to-purple-900 text-white mt-10">
      
      <div className="max-w-6xl mx-auto px-6 py-10">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* BRAND */}
          <div>
            <h2 className="text-xl font-bold">BlogSphere</h2>
            <p className="text-sm text-purple-200 mt-2">
              A modern platform for sharing ideas, stories, and knowledge.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-purple-200">
              <li className="hover:text-white cursor-pointer transition">
                Home
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Articles
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Authors
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <p className="text-sm text-purple-200">support@blogsphere.com</p>
            <p className="text-sm text-purple-200 mt-1">+91 98765 43210</p>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/20 my-6"></div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-purple-200 gap-3">
          
          <p>
            © {new Date().getFullYear()} BlogSphere. All rights reserved.
          </p>

          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer transition">
              Privacy
            </span>
            <span className="hover:text-white cursor-pointer transition">
              Terms
            </span>
            <span className="hover:text-white cursor-pointer transition">
              Help
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;