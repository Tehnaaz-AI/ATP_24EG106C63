
import {useLocation} from 'react-router'
import { useState } from "react";


const Employee = () => {
//read state received in navigation
const {state}=useLocation()
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

  return (
    <div className='p-5 pl-20 w-250 mx-auto border-4 bg-pink-600 text-white font-bold border-pink-600 rounded-2xl text-4xl'>
      <h1 className='text-center pb-8 pt-0.5'>Employee Details</h1>
      <p className='p-2'>Name: {state.name}</p>
      <p className='p-2'>Email: {state.email}</p>
      <p className='p-2'>Phone no: {state.mobile}</p>
      <p className='p-2'>Designation: {state.designation}</p>
      <p className='p-2'>Comapny Name: {state.companyName}</p>
    </div>
  )
}

export default Employee