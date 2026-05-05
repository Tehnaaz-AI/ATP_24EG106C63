import { useForm } from "react-hook-form";

function FormDemo(){

    const {register,//to register form fields
        handleSubmit, // to handle form submissions
        formState:{errors} // to handle validations
    }=useForm()

    //form submit function
    const onFormSubmit=(obj)=>{
        console.log(obj)
    }
    
    return(
        <div>
            <h1 className="text-center text-5xl">Form Demo</h1>
            {/* form */}
            <form className="max-w-md mx-auto mt-10"
                onSubmit={handleSubmit(onFormSubmit)}>
                    {/* username */}
                <div className="mb-3">
                    <label htmlFor="#username">Username</label>
                    <input type="text" name=" " {...register("username",
                        {
                            required:"Username Required",
                            validate:(v)=>v.trim().length!==0 || "white space not allowed",
                            minLength:5
                        })} 
                    id="username" 
                    className="border w-full p-3" />
                    {errors.username?.type === 'required' && <p className="text-red-600">{errors.username.message}</p>}
                    {errors.username?.type === 'validate' && <p className="text-red-600">White Space is not allowed </p>}
                    {errors.username?.type === 'minLength' && <p className="text-red-600">Min Length of Username is 5 </p>}

                </div>

                    {/* email */}
                <div className="mb-3">
                    <label htmlFor="#email">Email</label>
                    <input type="email" name=" " {...register("email")} 
                    id="email" 
                    className="border w-full p-3" />
                </div>
                <button type="submit" className="border-2 p-2 text-center block mx-auto">Submit</button>
            </form>
        </div>
    )
}
export default FormDemo