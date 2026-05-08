import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { useLocation } from 'react-router'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { useState } from "react";


const EditEmp = (empObj) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register, handleSubmit, formState: { errors }, setValue
  } = useForm()

  //read state received in navigation
  const { state } = useLocation()

  const navigate = useNavigate()

  useEffect(() => {
    setValue("name", state.name)
    setValue("email", state.email)
    setValue("mobile", state.mobile)
    setValue("designation", state.designation)
    setValue("companyName", state.companyName)
  }, [state])

  const saveModifiedEmp = async (modifiedEmp) => {
    //make HTTP PUT req
    const res = await axios.put(`${import.meta.env.VITE_API_URL}/employee-api/employees/${state._id}`, modifiedEmp)
    if (res.status === 200) {
      navigate("/list", { state: modifiedEmp })
    }
  }

  return (
    <div className="border-4 w-150 mx-auto bg-white border-pink-600 rounded-[2rem] p-6 shadow-xl hover:shadow-pink-300 transition-all duration-500 hover:-translate-y-2">
      
      <h1 className="text-5xl font-extrabold text-center text-pink-600 tracking-wide drop-shadow-sm">
        Edit Employee
      </h1>
  
      {/* form */}
      <form
        className="max-w-md mx-auto mt-10 space-y-4"
        onSubmit={handleSubmit(saveModifiedEmp)}
      >
        <input
          type="text"
          placeholder="Enter name"
          {...register("name")}
          className="w-full border-3 border-pink-600 p-3 rounded-2xl outline-none
          focus:ring-4 focus:ring-pink-300 focus:scale-[1.02]
          transition-all duration-300 hover:shadow-md"
        />
  
        <input
          type="email"
          placeholder="Enter Email"
          disabled
          {...register("email")}
          className="w-full border-3 border-pink-400 bg-pink-100 text-gray-500
          p-3 rounded-2xl cursor-not-allowed opacity-80"
        />
  
        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="w-full border-3 border-pink-600 p-3 rounded-2xl outline-none
          focus:ring-4 focus:ring-pink-300 focus:scale-[1.02]
          transition-all duration-300 hover:shadow-md"
        />
  
        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="w-full border-3 border-pink-600 p-3 rounded-2xl outline-none
          focus:ring-4 focus:ring-pink-300 focus:scale-[1.02]
          transition-all duration-300 hover:shadow-md"
        />
  
        <input
          type="text"
          placeholder="Enter name of the company"
          {...register("companyName")}
          className="w-full border-3 border-pink-600 p-3 rounded-2xl outline-none
          focus:ring-4 focus:ring-pink-300 focus:scale-[1.02]
          transition-all duration-300 hover:shadow-md"
        />
  
        <button
          type="submit"
          className="text-2xl rounded-2xl bg-pink-600 text-white block mx-auto
          px-8 py-4 font-bold tracking-wide shadow-lg
          hover:bg-pink-700 hover:scale-105 hover:shadow-pink-400
          active:scale-95 transition-all duration-300"
        >
          Save
        </button>
      </form>
    </div>
  )
}

export default EditEmp