import {
  divider,
  errorClass,
  formCard,
  formGroup,
  formTitle,
  inputClass,
  labelClass,
  pageBackground,
  submitBtn,
  mutedText,
} from "../styles/common";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [preview, setPriview] = useState(null);
  const navigate = useNavigate();

  //When user registration submitted
  const onUserRegister = async (userObj) => {
    console.log(userObj);
    let {profileImageUrl}=userObj
    // file + userObj -->FormData
    //create ForMData object
    const formData = new FormData();
    //add all user properties and file to this formdata object
    formData.append("role", userObj.role);
    formData.append("firstName", userObj.firstName);
    formData.append("lastName", userObj.lastName);
    formData.append("email", userObj.email);
    formData.append("password", userObj.password);
    //Append if image is exists
    if (profileImageUrl?.[0]) {
      formData.append("profileImageUrl", profileImageUrl[0]);
    }
   console.log(profileImageUrl)
    try {
      //start loading
      setLoading(true);
      //make HTTP POST req to create User in backend
      let res = await axios.post("http://localhost:4000/auth/users", formData,{withCredentials:true});

      if (res.status === 201) {
        //navigate to Login
        navigate("/login");
      }
    } catch (err) {
      console.log("err in registration", err);
      setApiError(err.response?.data?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
  };


return (
  <div className={`${pageBackground} flex items-center justify-center py-16 px-4`}>
    
    <div className={`${formCard} !bg-fuchsia-800 !text-white !rounded-3xl`}>
      <h2 className={`${formTitle} text-white`}>Create an Account</h2>

      {/* API Error */}
      {apiError && <p className={errorClass}>{apiError}</p>}

      <form onSubmit={handleSubmit(onUserRegister)}>

        {/* ROLE */}
        <div className="mb-5">
          <p className={`${labelClass} !text-purple-200`}>Register as</p>

          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="USER"
                {...register("role", { required: "Please select a role" })}
                className="accent-purple-300 w-4 h-4"
              />
              <span className="text-sm text-white">User</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value="AUTHOR"
                {...register("role", { required: "Please select a role" })}
                className="accent-purple-300 w-4 h-4"
              />
              <span className="text-sm text-white">Author</span>
            </label>
          </div>

          {errors.role && <p className={errorClass}>{errors.role.message}</p>}
        </div>

        <div className={divider} />

        {/* NAME */}
        <div className="sm:flex gap-4 mb-4">
          <div className="flex-1">
            <label className={`${labelClass} !text-purple-200`}>First Name</label>
            <input
              type="text"
              className={`${inputClass} !bg-white/90 !text-black`}
              placeholder="First name"
              {...register("firstName", {
                required: "First name is required",
                minLength: { value: 2, message: "At least 2 characters required" },
                maxLength: { value: 30, message: "Max 30 characters allowed" },
                validate: (v) => v.trim().length > 0 || "Cannot be empty",
              })}
            />
            {errors.firstName && <p className={errorClass}>{errors.firstName.message}</p>}
          </div>

          <div className="flex-1">
            <label className={`${labelClass} !text-purple-200`}>Last Name</label>
            <input
              type="text"
              className={`${inputClass} !bg-white/90 !text-black`}
              placeholder="Last name"
              {...register("lastName", {
                maxLength: { value: 30, message: "Max 30 characters allowed" },
              })}
            />
            {errors.lastName && <p className={errorClass}>{errors.lastName.message}</p>}
          </div>
        </div>

        {/* EMAIL */}
        <div className={formGroup}>
          <label className={`${labelClass} !text-purple-200`}>Email</label>
          <input
            type="email"
            className={`${inputClass} !bg-white/90 !text-black`}
            placeholder="you@example.com"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>

        {/* PASSWORD */}
        <div className={formGroup}>
          <label className={`${labelClass} !text-purple-200`}>Password</label>
          <input
            type="password"
            className={`${inputClass} !bg-white/90 !text-black`}
            placeholder="Min. 8 characters"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <p className={errorClass}>{errors.password.message}</p>}
        </div>

        {/* PROFILE IMAGE */}
        <div className={formGroup}>
          <label className={`${labelClass} !text-purple-200`}>Profile Image</label>

          <input
            type="file"
            className={`${inputClass} !bg-white/90 !text-black`}
            accept="image/png, image/jpeg"
            {...register("profileImageUrl", {
              validate: {
                fileType: (files) => {
                  if (!files?.[0]) return true;
                  return ["image/png", "image/jpeg"].includes(files[0].type) || "Only JPG/PNG allowed";
                },
                fileSize: (files) => {
                  if (!files?.[0]) return true;
                  return files[0].size <= 2 * 1024 * 1024 || "Max size 2MB";
                },
              },
            })}
            onChange={(event) => {
              let file = event.target.files[0];
              if (file) setPriview(URL.createObjectURL(file));
            }}
          />

          {errors.profileImageUrl && <p className={errorClass}>{errors.profileImageUrl.message}</p>}

          {preview && (
            <div className="mt-4 flex justify-center">
              <img
                src={preview}
                alt="preview"
                className="w-24 h-24 rounded-full object-cover border-2 border-white/30"
              />
            </div>
          )}
        </div>

        {/* SUBMIT */}
        <button type="submit" className={`${submitBtn} !bg-white !text-fuchsia-800 hover:!bg-purple-100`}>
          Create Account
        </button>
      </form>

      {/* FOOTER */}
      <p className={`${mutedText} text-center mt-6 !text-purple-200`}>
        Already have an account?{" "}
        <NavLink to="/login" className="text-white font-medium underline">
          Sign in
        </NavLink>
      </p>
    </div>
  </div>
);
}

export default Register;