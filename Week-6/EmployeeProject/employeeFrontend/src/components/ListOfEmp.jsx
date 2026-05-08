import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { counterContextObj } from '../Context/ContextProvider'

function ListOfEmp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { counter, changeCounter } = useContext(counterContextObj);

  const [emps, setEmps] = useState([]);
  const navigate = useNavigate()

  async function getEmps() {
    try {
      setLoading(true)
      setError("")
      let res = await fetch(`${import.meta.env.VITE_API_URL}/employee-api/employees`);
      if (res.status === 200) {
        let resObj = await res.json();
        setEmps(resObj.payload);
      } else {
        let errRes = await res.json()
        throw new Error(errRes.message || "Failed to fetch employees")
      }
    } catch (err) {
      console.log(err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  //get all emps
  useEffect(() => {
    async function getEmps() {
      try {
        setLoading(true)
        setError("")
        let res = await fetch(`${import.meta.env.VITE_API_URL}/employee-api/employees`);
        if (res.status === 200) {
          let resObj = await res.json();
          setEmps(resObj.payload);
        } else {
          let errRes = await res.json()
          throw new Error(errRes.message || "Failed to fetch employees")
        }
      } catch (err) {
        console.log(err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    getEmps();
  }, []);

  const getEmployee = (empObj) => {
    //navigate to employee along with selected emp obj
    navigate("/employee", { state: empObj })
  }

  const gotoEditEmp = (empObj) => {
    //navigate to /employee along with empObj
    navigate("/edit-emp", { state: empObj })
  }

  const deleteEmp = async (id) => {
    try {
      setLoading(true)
      setError("")
      let res = await axios.delete(`${import.meta.env.VITE_API_URL}/employee-api/employees/${id}`)
      if (res.status === 200) {
        getEmps()
      }
    } catch (err) {
      console.log(err)
      setError("Failed to delete employee")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <p className="text-center text-4xl">Loading...</p>
  }

  if (error) {
    return <p className="text-red-500 text-center text-3xl">{error}</p>
  }

  return (
    <div className="py-8 px-4 overflow-hidden">
  
      {/* Counter Card */}
      <div
        className="
          border-4 border-pink-600
          bg-white shadow-2xl
          p-6 w-80 rounded-[2rem]
          grid place-items-center mx-auto gap-5
          hover:-translate-y-2 hover:scale-105
          hover:shadow-pink-300
          transition-all duration-500
        "
      >
        <h1 className="text-4xl font-extrabold text-pink-600">
          Counter1
        </h1>
  
        <div className="text-6xl font-bold text-gray-800">
          {counter}
        </div>
  
        <button
          onClick={changeCounter}
          className="
            bg-amber-400 text-black
            px-6 py-3 rounded-full
            font-serif font-bold text-lg
            shadow-lg
            hover:bg-amber-300
            hover:scale-110
            active:scale-95
            transition-all duration-300
          "
        >
          Change
        </button>
      </div>
  
      {/* Heading */}
      <h1
        className="
          text-5xl text-center
          text-pink-600 font-extrabold
          p-8 font-serif
          tracking-wide
          drop-shadow-md
        "
      >
        List of Employees
      </h1>
  
      {/* Employee Grid */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
          gap-8
          border-4 border-pink-600
          rounded-[2rem]
          bg-pink-50 shadow-2xl
          p-8
        "
      >
        {emps.map((empObj) => (
          <div
            key={empObj._id}
            className="
              bg-gradient-to-br from-pink-500 to-pink-700
              text-white font-bold
              rounded-[2rem]
              p-5
              shadow-xl
              hover:-translate-y-2
              hover:scale-105
              hover:shadow-pink-400
              transition-all duration-500
              w-full
              max-w-[320px]
              mx-auto
            "
          >
            {/* Avatar */}
            <div
              className="
                w-16 h-16 rounded-full
                bg-white text-pink-600
                flex items-center justify-center
                text-2xl font-extrabold
                shadow-lg mx-auto mb-4
              "
            >
              {empObj.name?.charAt(0)}
            </div>
  
            {/* Details */}
            <div className="text-center">
  
              {/* Gmail in one line */}
              <p className="text-[15px] whitespace-nowrap overflow-hidden text-ellipsis">
                {empObj.email}
              </p>
  
              <p className="text-2xl font-extrabold mt-3">
                {empObj.name}
              </p>
            </div>
  
            {/* Buttons */}
            <div className="flex justify-center gap-2 mt-5 flex-wrap">
  
              <button
                onClick={() => getEmployee(empObj)}
                className="
                  bg-white text-pink-600
                  rounded-2xl px-4 py-2
                  font-bold shadow-md
                  hover:bg-pink-100
                  hover:scale-105
                  active:scale-95
                  transition-all duration-300
                "
              >
                View
              </button>
  
              <button
                onClick={() => gotoEditEmp(empObj)}
                className="
                  bg-white text-pink-600
                  rounded-2xl px-4 py-2
                  font-bold shadow-md
                  hover:bg-pink-100
                  hover:scale-105
                  active:scale-95
                  transition-all duration-300
                "
              >
                 Edit
              </button>
  
              <button
                onClick={() => deleteEmp(empObj._id)}
                className="
                  bg-white text-pink-600
                  rounded-2xl px-4 py-2
                  font-bold shadow-md
                  hover:bg-red-200
                  hover:text-red-700
                  hover:scale-105
                  active:scale-95
                  transition-all duration-300
                "
              >
                Delete
              </button>
  
            </div>
          </div>
        ))}
      </div>
    </div>
  );}

export default ListOfEmp;