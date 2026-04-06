import {useForm} from 'react-hook-form'
import { useEffect } from 'react'
import { useLocation } from 'react-router'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { useState } from "react";


const EditEmp = (empObj) => {

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const {
  register,handleSubmit,formState:{errors},setValue
}=useForm()

//read state received in navigation
const {state}=useLocation()

const navigate=useNavigate()

useEffect(()=>{
  setValue("name",state.name)
  setValue("email",state.email)
  setValue("mobile",state.mobile)
  setValue("designation",state.designation)
  setValue("companyName",state.companyName)
},[state])

const  saveModifiedEmp=async (modifiedEmp)=>{
  //make HTTP PUT req
  const res= await axios.put(`http://localhost:4000/employee-api/employees/${state._id}`,modifiedEmp)
  if(res.status===200){
    navigate("/list",{state:modifiedEmp})
  }
}

  return (
      <div className="border-4 w-150 mx-auto bg-white border-pink-600 rounded-4xl p-5">
      <h1 className="text-5xl font-bold text-center text-pink-600">Edit Employee</h1>
      {/* form */}
      <form className=" max-w-md mx-auto mt-10" onSubmit={handleSubmit(saveModifiedEmp)} >
        <input
          type="text"
          placeholder="Enter name "
          {...register("name")}
          className="mb-3  border-3 p-3 border-pink-600 w-full rounded-2xl"
        />
        <input
          type="email"
          placeholder="Enter Email "
          disabled
          {...register("email")}
          className="mb-3  border-3 p-3 border-pink-600 w-full rounded-2xl"
        />

        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-3  border-3 p-3 border-pink-600 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="mb-3  border-3 p-3 border-pink-600 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter name of the company"
          {...register("companyName")}
          className="mb-3  border-3 p-3 border-pink-600 w-full rounded-2xl"
        />

        <button type="submit" className="text-2xl rounded-2xl bg-pink-600 text-white block mx-auto p-4">
          Save
        </button>
      </form>
    </div>
  )
}

export default EditEmp