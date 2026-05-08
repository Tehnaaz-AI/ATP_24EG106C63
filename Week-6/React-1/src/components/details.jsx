import { useForm } from "react-hook-form";
import { useState } from "react";

function Details(){
    const {register,//to register form fields
        handleSubmit, // to handle form submissions
        formState:{errors} // to handle validations
    }=useForm()
    const [userList, setUserList] = useState([])

    const onFormSubmit=(obj)=>{
        setUserList(prev => [...prev, obj]);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 p-6">
      
          {/* Create User Form */}
          <div
            className="
              max-w-3xl mx-auto
              bg-orange-400/95 backdrop-blur-sm
              rounded-[2rem]
              shadow-2xl
              border-4 border-white/30
              p-6
              hover:scale-[1.01]
              transition-all duration-500
            "
          >
            <h2
              className="
                text-center text-3xl font-extrabold
                text-white tracking-wide
                drop-shadow-md mb-6
              "
            >
               Create User Form
            </h2>
      
            <form
              className="max-w-md mx-auto space-y-4"
              onSubmit={handleSubmit(onFormSubmit)}
            >
      
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-1 text-sm font-semibold text-white"
                >
                  First Name
                </label>
      
                <input
                  type="text"
                  {...register("firstName", {
                    required: "firstName Required",
                    validate: (v) =>
                      v.trim().length !== 0 || "white space not allowed",
                    minLength: 5,
                  })}
                  id="firstName"
                  className="
                    w-full p-2.5 text-sm
                    rounded-xl
                    border-2 border-white/40
                    bg-white/90
                    outline-none
                    focus:border-pink-500
                    focus:ring-2 focus:ring-pink-300
                    transition-all duration-300
                  "
                />
      
                {errors.firstName?.type === "required" && (
                  <p className="text-red-700 text-xs mt-1">
                    {errors.firstName.message}
                  </p>
                )}
      
                {errors.firstName?.type === "validate" && (
                  <p className="text-red-700 text-xs mt-1">
                    White Space is not allowed
                  </p>
                )}
      
                {errors.firstName?.type === "minLength" && (
                  <p className="text-red-700 text-xs mt-1">
                    Min Length of firstName is 5
                  </p>
                )}
              </div>
      
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-semibold text-white"
                >
                  Email
                </label>
      
                <input
                  type="email"
                  {...register("email", {
                    required: "Email Required",
                  })}
                  id="email"
                  className="
                    w-full p-2.5 text-sm
                    rounded-xl
                    border-2 border-white/40
                    bg-white/90
                    outline-none
                    focus:border-pink-500
                    focus:ring-2 focus:ring-pink-300
                    transition-all duration-300
                  "
                />
      
                {errors.email?.type === "required" && (
                  <p className="text-red-700 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
      
              {/* Date Of Birth */}
              <div>
                <label
                  htmlFor="dateOfBirth"
                  className="block mb-1 text-sm font-semibold text-white"
                >
                  Date Of Birth
                </label>
      
                <input
                  type="date"
                  {...register("dateOfBirth", {
                    required: "DateOf Birth Required",
                  })}
                  id="dateOfBirth"
                  className="
                    w-full p-2.5 text-sm
                    rounded-xl
                    border-2 border-white/40
                    bg-white/90
                    outline-none
                    focus:border-pink-500
                    focus:ring-2 focus:ring-pink-300
                    transition-all duration-300
                  "
                />
      
                {errors.dateOfBirth?.type === "required" && (
                  <p className="text-red-700 text-xs mt-1">
                    {errors.dateOfBirth.message}
                  </p>
                )}
              </div>
      
              {/* Submit Button */}
              <button
                type="submit"
                className="
                  block mx-auto mt-5
                  bg-rose-500 text-white
                  px-6 py-2.5 text-sm
                  rounded-full
                  font-bold
                  shadow-lg
                  hover:bg-rose-400
                  hover:scale-105
                  active:scale-95
                  transition-all duration-300
                "
              >
                 Submit
              </button>
            </form>
          </div>
      
          {/* User List */}
          <div
            className="
              max-w-3xl mx-auto mt-8
              bg-red-500/95 backdrop-blur-sm
              rounded-[2rem]
              shadow-2xl
              border-4 border-white/30
              p-6
            "
          >
            <h2
              className="
                text-center text-3xl font-extrabold
                text-white mb-6
              "
            >
              📋 List Of Users
            </h2>
      
            <div className="overflow-x-auto">
              <table
                className="
                  w-full
                  bg-white rounded-2xl
                  overflow-hidden
                  text-sm
                "
              >
                <thead className="bg-pink-600 text-white">
                  <tr>
                    <th className="p-3 border border-pink-400">
                      FirstName
                    </th>
      
                    <th className="p-3 border border-pink-400">
                      Email
                    </th>
      
                    <th className="p-3 border border-pink-400">
                      DateOfBirth
                    </th>
                  </tr>
                </thead>
      
                <tbody>
                  {userList.map((user, index) => (
                    <tr
                      key={index}
                      className="
                        text-center
                        hover:bg-pink-100
                        transition-all duration-300
                      "
                    >
                      <td className="p-2 border">
                        {user.firstName}
                      </td>
      
                      <td className="p-2 border break-all">
                        {user.email}
                      </td>
      
                      <td className="p-2 border">
                        {user.dateOfBirth}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
}


export default Details