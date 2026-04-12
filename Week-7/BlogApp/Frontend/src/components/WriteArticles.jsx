import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router";

import {
  formCard,
  formTitle,
  formGroup,
  labelClass,
  inputClass,
  submitBtn,
  errorClass,
  loadingClass,
} from "../styles/common";
import { useAuth } from "../store/authStore";

function WriteArticles() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth((state) => state.currentUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //save article
  const submitArticle = async (articleObj) => {
    setLoading(true);

    //add authorId to articleObj
    articleObj.author = currentUser._id;
    try {
      //set loading true
      setLoading(true);
      //make POST req to save new article
      let res = await axios.post("http://localhost:4000/author-api/article", articleObj, { withCredentials: true });
      //navigate to AuthorArticles
      if (res.status === 201) {
        toast.success("Article published successfully")
        navigate("../articles");
        // navigate("./author-profile/articles");
      }
    } catch (err) {
       toast.error(err.response?.data?.error || "Failed to publish article");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${formCard} !bg-fuchsia-800 !text-white !rounded-3xl`}>
      
      <h2 className={`${formTitle} !text-white`}>Write New Article</h2>
  
      <form onSubmit={handleSubmit(submitArticle)}>
        
        {/* Title */}
        <div className={formGroup}>
          <label className={`${labelClass} !text-purple-200`}>Title</label>
  
          <input
            type="text"
            className={`${inputClass} !bg-white/90 !text-black !rounded-xl`}
            placeholder="Enter article title"
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 5,
                message: "Title must be at least 5 characters",
              },
            })}
          />
  
          {errors.title && <p className={errorClass}>{errors.title.message}</p>}
        </div>
  
        {/* Category */}
        <div className={formGroup}>
          <label className={`${labelClass} !text-purple-200`}>Category</label>
  
          <select
            className={`${inputClass} !bg-white/90 !text-black !rounded-xl`}
            {...register("category", {
              required: "Category is required",
            })}
          >
            <option value="">Select category</option>
            <option value="technology">Technology</option>
            <option value="programming">Programming</option>
            <option value="ai">AI</option>
            <option value="web-development">Web Development</option>
          </select>
  
          {errors.category && <p className={errorClass}>{errors.category.message}</p>}
        </div>
  
        {/* Content */}
        <div className={formGroup}>
          <label className={`${labelClass} !text-purple-200`}>Content</label>
  
          <textarea
            rows="8"
            className={`${inputClass} !bg-white/90 !text-black !rounded-xl`}
            placeholder="Write your article content..."
            {...register("content", {
              required: "Content is required",
              minLength: {
                value: 50,
                message: "Content must be at least 50 characters",
              },
            })}
          />
  
          {errors.content && <p className={errorClass}>{errors.content.message}</p>}
        </div>
  
        {/* Submit */}
        <button
          className={`${submitBtn} !bg-white !text-fuchsia-800 !rounded-full hover:!bg-purple-100`}
          type="submit"
          disabled={loading}
        >
          {loading ? "Publishing..." : "Publish Article"}
        </button>
  
        {loading && <p className={loadingClass}>Publishing article...</p>}
      </form>
    </div>
  );
}

export default WriteArticles;