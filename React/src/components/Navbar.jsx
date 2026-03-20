function Navbar() {
    return (
      <nav className="flex justify-between bg-black">
        <h2 className="p-6 font-bold text-lime-500 ">Logo</h2>
        <ul className="flex gap-25 p-6 font-bold text-lime-500">
          <li><a href="">Home</a></li>
          <li><a href="">Signup</a></li>
          <li><a href="">Login</a></li>
        </ul>
      </nav>
    )
  }
  
  export default Navbar
  