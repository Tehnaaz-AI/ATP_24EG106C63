function Navbar() {
    return (
      <nav className="flex justify-between bg-pink-600 ">
        <h2 className="p-6 font-bold text-amber-50 text-2xl ">Logo</h2>
        <ul className="flex gap-25 p-6 font-bold text-amber-50 text-2xl">
          <li><a href="">Home</a></li>
          <li><a href="">Signup</a></li>
          <li><a href="">Login</a></li>
        </ul>
      </nav>
    )
  }
  
  export default Navbar
  