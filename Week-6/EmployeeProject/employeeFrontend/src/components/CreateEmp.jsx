import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { counterContextObj } from '../Context/ContextProvider'


function CreateEmp() {
  console.log("Test")
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { counter1, changeCounter1 } = useContext(counterContextObj);

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
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/employee-api/employees`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newEmpObj)
        }
      );

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
  <div className="flex justify-between items-start px-10 gap-10 py-10 bg-pink-50 min-h-screen">
    
    <div className="border-4 border-pink-600 w-64 p-6 rounded-3xl flex flex-col items-center gap-5 bg-white shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-pink-400/50 hover:-translate-y-2">
      
      <h1 className="text-3xl text-center font-bold text-pink-600 transition duration-300 hover:text-pink-800">
        Counter2: {counter1}
      </h1>

      <button
        onClick={changeCounter1}
        className="bg-amber-400 px-6 py-3 rounded-3xl font-serif font-bold text-lg shadow-lg transition-all duration-300 hover:bg-amber-300 hover:scale-110 hover:shadow-amber-300/50 active:scale-95"
      >
        Change
      </button>
    </div>

    <div className="border-4 w-150 mx-auto bg-white border-pink-600 rounded-[35px] p-8 shadow-2xl transition-all duration-500 hover:shadow-pink-400/40 hover:-translate-y-2">
      
      <h1 className="text-4xl font-bold text-center text-pink-600 font-serif mb-8 tracking-wide hover:text-pink-800 transition duration-300">
        Create New Employee
      </h1>

      {/* form */}
      <form
        className="max-w-md mx-auto mt-5"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <input
          type="text"
          placeholder="Enter name "
          {...register("name")}
          className="mb-4 border-3 p-4 border-pink-600 w-full rounded-2xl outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-pink-300 hover:border-pink-800"
        />

        <input
          type="email"
          placeholder="Enter Email "
          {...register("email")}
          className="mb-4 border-3 p-4 border-pink-600 w-full rounded-2xl outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-pink-300 hover:border-pink-800"
        />

        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-4 border-3 p-4 border-pink-600 w-full rounded-2xl outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-pink-300 hover:border-pink-800"
        />

        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="mb-4 border-3 p-4 border-pink-600 w-full rounded-2xl outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-pink-300 hover:border-pink-800"
        />

        <input
          type="text"
          placeholder="Enter name of the company"
          {...register("companyName")}
          className="mb-6 border-3 p-4 border-pink-600 w-full rounded-2xl outline-none transition-all duration-300 focus:scale-105 focus:shadow-lg focus:shadow-pink-300 hover:border-pink-800"
        />

        <button
          type="submit"
          className="text-2xl rounded-2xl bg-pink-600 text-white block mx-auto px-8 py-4 shadow-xl transition-all duration-300 hover:bg-pink-700 hover:scale-110 hover:shadow-pink-400/50 active:scale-95"
        >
          Add Emp
        </button>
      </form>
    </div>
  </div>
);
}

export default CreateEmp;