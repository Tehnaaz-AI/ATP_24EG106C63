
import {useLocation} from 'react-router'
import { useState } from "react";


const Employee = () => {
//read state received in navigation
const {state}=useLocation()
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

return (
  <div
    className="
      p-8 w-[700px] mx-auto 
      border-4 border-pink-600 
      bg-gradient-to-br from-pink-500 to-pink-700
      text-white rounded-[2rem]
      shadow-2xl hover:shadow-pink-400
      transition-all duration-500
      hover:-translate-y-2 hover:scale-[1.01]
    "
  >
    <h1
      className="
        text-center pb-8 
        font-serif text-4xl font-extrabold
        tracking-wide drop-shadow-lg
      "
    >
      Employee Details
    </h1>

    <div className="space-y-5 text-xl">
      
      <div
        className="
          bg-white/10 backdrop-blur-sm
          p-4 rounded-2xl
          hover:bg-white/20
          transition-all duration-300
          hover:translate-x-2
        "
      >
        <span className="font-bold text-pink-100">Name:</span> {state.name}
      </div>

      <div
        className="
          bg-white/10 backdrop-blur-sm
          p-4 rounded-2xl
          hover:bg-white/20
          transition-all duration-300
          hover:translate-x-2
        "
      >
        <span className="font-bold text-pink-100">Email:</span> {state.email}
      </div>

      <div
        className="
          bg-white/10 backdrop-blur-sm
          p-4 rounded-2xl
          hover:bg-white/20
          transition-all duration-300
          hover:translate-x-2
        "
      >
        <span className="font-bold text-pink-100">Phone no:</span> {state.mobile}
      </div>

      <div
        className="
          bg-white/10 backdrop-blur-sm
          p-4 rounded-2xl
          hover:bg-white/20
          transition-all duration-300
          hover:translate-x-2
        "
      >
        <span className="font-bold text-pink-100">Designation:</span> {state.designation}
      </div>

      <div
        className="
          bg-white/10 backdrop-blur-sm
          p-4 rounded-2xl
          hover:bg-white/20
          transition-all duration-300
          hover:translate-x-2
        "
      >
        <span className="font-bold text-pink-100">Company Name:</span> {state.companyName}
      </div>
    </div>
  </div>
)
}

export default Employee