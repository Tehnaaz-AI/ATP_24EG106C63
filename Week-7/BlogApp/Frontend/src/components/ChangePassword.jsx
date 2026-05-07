import {
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
  import { useState } from "react";
  import axios from "axios";
  import { toast } from "react-hot-toast";
  import { useNavigate } from "react-router";
  
  const BASE_URL = "https://atp-24eg106c63.onrender.com";
  
  function ChangePassword() {
  
    const navigate = useNavigate();
  
    const {
      register,
      handleSubmit,
      watch,
      reset,
      formState: { errors },
    } = useForm();
  
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState(null);
  
    const newPassword = watch("newPassword");
  
    // submit handler
    const onChangePassword = async (data) => {
  
      setApiError(null);
  
      try {
  
        setLoading(true);
  
        let res = await axios.put(
          `${BASE_URL}/auth/password`,
          {
            currentPassword: data.currentPassword,
            newPassword: data.newPassword,
          },
          {
            withCredentials: true,
          }
        );
  
        if (res.status === 200) {
  
          toast.success(res.data.message);
  
          reset();
  
          setTimeout(() => {
            navigate(-1);
          }, 1500);
        }
  
      } catch (err) {
  
        console.log(err);
  
        setApiError(
          err.response?.data?.message || "Failed to change password"
        );
  
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div className={`${pageBackground} flex items-center justify-center py-16 px-4`}>
  
        <div className={`${formCard} !bg-fuchsia-800 !text-white !rounded-3xl`}>
  
          {/* TITLE */}
          <h2 className={`${formTitle} text-white`}>
            Change Password
          </h2>
  
          <p className={`${mutedText} text-center !text-purple-200 mb-6`}>
            Secure your account with a new password
          </p>
  
          {/* API ERROR */}
          {apiError && (
            <p className={errorClass}>
              {apiError}
            </p>
          )}
  
          <form onSubmit={handleSubmit(onChangePassword)}>
  
            {/* CURRENT PASSWORD */}
            <div className={formGroup}>
  
              <label className={`${labelClass} !text-purple-200`}>
                Current Password
              </label>
  
              <input
                type="password"
                placeholder="Enter current password"
                className={`${inputClass} !bg-white/90 !text-black`}
                {...register("currentPassword", {
                  required: "Current password is required",
                })}
              />
  
              {errors.currentPassword && (
                <p className={errorClass}>
                  {errors.currentPassword.message}
                </p>
              )}
  
            </div>
  
            {/* NEW PASSWORD */}
            <div className={formGroup}>
  
              <label className={`${labelClass} !text-purple-200`}>
                New Password
              </label>
  
              <input
                type="password"
                placeholder="Enter new password"
                className={`${inputClass} !bg-white/90 !text-black`}
                {...register("newPassword", {
                  required: "New password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters required",
                  },
                })}
              />
  
              {errors.newPassword && (
                <p className={errorClass}>
                  {errors.newPassword.message}
                </p>
              )}
  
            </div>
  
            {/* CONFIRM PASSWORD */}
            <div className={formGroup}>
  
              <label className={`${labelClass} !text-purple-200`}>
                Confirm Password
              </label>
  
              <input
                type="password"
                placeholder="Confirm new password"
                className={`${inputClass} !bg-white/90 !text-black`}
                {...register("confirmPassword", {
                  required: "Please confirm password",
                  validate: (value) =>
                    value === newPassword || "Passwords do not match",
                })}
              />
  
              {errors.confirmPassword && (
                <p className={errorClass}>
                  {errors.confirmPassword.message}
                </p>
              )}
  
            </div>
  
            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className={`${submitBtn} !bg-white !text-fuchsia-800 hover:!bg-purple-100 disabled:opacity-60`}
            >
              {loading ? "Updating..." : "Update Password"}
            </button>
  
          </form>
        </div>
      </div>
    );
  }
  
  export default ChangePassword;