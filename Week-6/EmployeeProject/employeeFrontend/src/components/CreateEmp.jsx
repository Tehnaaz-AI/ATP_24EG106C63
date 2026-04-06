import { useForm } from "react-hook-form";
import { useState,useContext } from "react";
import { useNavigate } from "react-router";
import { counterContextObj } from '../Context/contextProvider'


function CreateEmp() {
  console.log("Test")
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();  
  const {counter1,changeCounter1}=useContext(counterContextObj);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //form submit
  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);
      //make HTTP POST req
      let res = await fetch("http://localhost:4000/employee-api/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmpObj),
      });

      if (res.status === 201) {
        //navigate to employees component programatically
        navigate("/list");
      } else {
        let errorRes = await res.json();
        console.log("error response is ", errorRes);
        throw new Error(errorRes.reason);
      }
    } catch (err) {
      console.log("err in catch", err);
      //deal with err
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  console.log(error);

  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center text-3xl">{error}</p>;
  }

  return (
    <div className="border-4 w-150 mx-auto bg-white border-pink-600 rounded-4xl p-5">
      <h1 className='text-4xl'>Counter1: {counter1}</h1>
      <button onClick={changeCounter1} className='bg-amber-400 p-2'>Change</button>
      <h1 className="text-5xl font-bold text-center text-pink-600">Create New Employee</h1>
      {/* form */}
      <form className=" max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
        <input
          type="text"
          placeholder="Enter name "
          {...register("name")}
          className="mb-3  border-3 p-3 border-pink-600 w-full rounded-2xl"
        />
        <input
          type="email"
          placeholder="Enter Email "
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
          Add Emp
        </button>
      </form>
    </div>
  );
}

export default CreateEmp;