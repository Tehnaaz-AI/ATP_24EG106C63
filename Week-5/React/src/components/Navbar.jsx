function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-gradient-to-r from-slate-950 via-gray-900 to-slate-950 shadow-lg">
      
      <h2 className="text-3xl font-extrabold text-cyan-400 cursor-pointer transition duration-300 hover:scale-110 hover:text-cyan-300">
        Logo
      </h2>

      <ul className="flex gap-10 font-semibold text-slate-200">
        <li>
          <a
            href=""
            className="px-4 py-2 rounded-xl transition duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-lg"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href=""
            className="px-4 py-2 rounded-xl transition duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-lg"
          >
            Signup
          </a>
        </li>

        <li>
          <a
            href=""
            className="px-4 py-2 rounded-xl transition duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-lg"
          >
            Login
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar