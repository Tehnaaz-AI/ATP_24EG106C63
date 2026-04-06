import { useState, useEffect,useContext } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { counterContextObj } from '../Context/contextProvider'

function ListOfEmp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const {counter,changeCounter}=useContext(counterContextObj);

  const [emps, setEmps] = useState([]);
  const navigate=useNavigate()

  async function getEmps() {
    try {
      setLoading(true)
      setError("")
      let res = await fetch("http://localhost:4000/employee-api/employees");
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
        let res = await fetch("http://localhost:4000/employee-api/employees");
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

  const getEmployee=(empObj)=>{
    //navigate to employee along with selected emp obj
    navigate("/employee",{state:empObj})
  }

  const gotoEditEmp=(empObj)=>{
    //navigate to /employee along with empObj
    navigate("/edit-emp",{state:empObj})
  }

  const deleteEmp=async(id)=>{
    try {
      setLoading(true)
      setError("")
      let res= await axios.delete(`http://localhost:4000/employee-api/employees/${id}`)
      if(res.status===200){
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
    <div className="p-2">
      <h1 className='text-4xl'>Counter:{counter}</h1>
      <button onClick={changeCounter} className='bg-amber-400 p-2'>Change</button>
      <h1 className="text-4xl text-center text-pink-600 font-bold">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5  gap-10">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-pink-600 text-amber-50 font-bold rounded-2xl p-3">
            <p>{empObj.email}</p>
            <p>{empObj.name}</p>
            <div className="flex justify-around pt-3">
              <button onClick={()=>getEmployee(empObj)} className="bg-white text-pink-600 rounded-2xl p-2">View</button>
              <button onClick={()=>gotoEditEmp(empObj)} className="bg-white text-pink-600 rounded-2xl p-2">Edit</button>
              <button onClick={()=>deleteEmp(empObj._id)} className="bg-white text-pink-600 rounded-2xl p-2">Delete</button>

            </div>
          </div>
        ))} 
      </div>
    </div>
  );
}

export default ListOfEmp;