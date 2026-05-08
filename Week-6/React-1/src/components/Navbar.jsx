function Navbar() {
  return (
    <nav
      className="
        flex justify-between items-center
        bg-pink-600
        px-8 py-5
        shadow-2xl
        border-b-4 border-pink-400
      "
    >
      {/* Logo */}
      <h2
        className="
          text-3xl font-extrabold
          text-amber-50 font-serif
          tracking-wide
          cursor-pointer
          hover:scale-105
          hover:text-amber-200
          transition-all duration-300
        "
      >
       Logo
      </h2>

      {/* Nav Items */}
      <ul
        className="
          flex gap-8
          font-bold text-amber-50 text-xl
        "
      >
        <li
          className="
            px-4 py-2 rounded-2xl
            cursor-pointer
            hover:bg-pink-500
            hover:text-white
            hover:-translate-y-1
            hover:shadow-lg
            transition-all duration-300
          "
        >
          Home
        </li>

        <li
          className="
            px-4 py-2 rounded-2xl
            cursor-pointer
            hover:bg-pink-500
            hover:text-white
            hover:-translate-y-1
            hover:shadow-lg
            transition-all duration-300
          "
        >
          Signup
        </li>

        <li
          className="
            px-4 py-2 rounded-2xl
            cursor-pointer
            hover:bg-pink-500
            hover:text-white
            hover:-translate-y-1
            hover:shadow-lg
            transition-all duration-300
          "
        >
          Login
        </li>
      </ul>
    </nav>
  )
}

export default Navbar