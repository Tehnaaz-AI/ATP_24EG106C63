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

    return(
        <div className="border-4 p-10 h-220 bg-blue-600">
            <div className="h-100 w-3xl mx-auto bg-orange-500 rounded-2xl">
                <h2 className="text-center text-4xl">Create User Form</h2>
                <form className="max-w-md mx-auto mt-10"
                onSubmit={handleSubmit(onFormSubmit)}>
                    {/* firstName */}
                <div className="mb-3">
                    <label htmlFor="#firstName">First Name</label>
                    <input type="text" name=" " {...register("firstName",
                        {
                            required:"firstName Required",
                            validate:(v)=>v.trim().length!==0 || "white space not allowed",
                            minLength:5
                        })} 
                    id="firstName" 
                    className="border w-full p-3" />
                    {errors.firstName?.type === 'required' && <p className="text-red-600">{errors.firstName.message}</p>}
                    {errors.firstName?.type === 'validate' && <p className="text-red-600">White Space is not allowed </p>}
                    {errors.firstName?.type === 'minLength' && <p className="text-red-600">Min Length of firstName is 5 </p>}

                </div>

                    {/* email */}
                <div className="mb-3">
                    <label htmlFor="#email">Email</label>
                    <input type="email" name=" " {...register("email",{required:"Email Required"})} 
                    id="email" 
                    className="border w-full p-3" />
                    {errors.email?.type === 'required' && <p className="text-red-600">{errors.email.message}</p>}
                </div>

                {/* dateOfBirth */}
                <div className="mb-3">
                    <label htmlFor="#dateOfBirth">dateOfBirth</label>
                    <input type="date" name=" " {...register("dateOfBirth",{required:"DateOf Birth Required"})} 
                    id="dateOfBirth" 
                    className="border w-full p-3" />
                    {errors.dateOfBirth?.type === 'required' && <p className="text-red-600">{errors.dateOfBirth.message}</p>}
                </div>
                <button type="submit" className="border-2 p-2 bg-rose-500 text-center block mx-auto">Submit</button>
            </form>   
            </div>

            <div className="h-100 w-3xl mx-auto m-4 bg-red-500 rounded-2xl">
                <h2 className="text-center text-4xl p-2">List Of Users</h2>
                <table className="mx-auto">
                    <thead>
                        <tr className="">
                            <th className="p-2 border">FirstName</th>
                            <th className="p-2 border">Email</th>
                            <th className="p-2 border">DateOfBirth</th>
                        </tr>
                    </thead>
                    <tbody>
                    {userList.map((user, index) => (
                        <tr key={index}>
                        <td className="p-2 border">{user.firstName}</td>
                        <td className="p-2 border">{user.email}</td>
                        <td className="p-2 border">{user.dateOfBirth}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default Details