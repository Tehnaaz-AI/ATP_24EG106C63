import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";


import {
  formCard,
  formTitle,
  formGroup,
  labelClass,
  inputClass,
  submitBtn,
  errorClass,
  articlePageWrapper,
} from "../styles/common";

function EditArticle() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const article = location.state;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // prefill form
  useEffect(() => {
    if (!article) return;

     setValue("title", article.title);
     setValue("category", article.category);
     setValue("content", article.content);
  }, [article]);

  const updateArticle = async (modifiedArticle) => {
  
    //add articleId to modified article
    modifiedArticle.articleId=article._id;
    //make PUT req to update article
    let res=await axios.put("http://localhost:4000/author-api/articles",
      modifiedArticle,
      {withCredentials:true})
    //naviagte to articleById component
   if(res.status===200){
    navigate(`/article/${article._id}`,{state:res.data.payload})
   }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-gradient-to-br from-purple-100 via-white to-fuchsia-100 min-h-screen">
      
      <div className="bg-white border border-fuchsia-300 rounded-3xl shadow-lg p-6 md:p-10">
        
        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-semibold text-fuchsia-800 mb-8 text-center">
          Edit Article
        </h2>
  
        <form onSubmit={handleSubmit(updateArticle)} className="space-y-6">
  
          {/* Title */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-fuchsia-700">
              Title
            </label>
  
            <input
              className="w-full px-4 py-3 rounded-xl border border-fuchsia-200 bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              {...register("title", { required: "Title required" })}
            />
  
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title.message}</p>
            )}
          </div>
  
          {/* Category */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-fuchsia-700">
              Category
            </label>
  
            <select
              className="w-full px-4 py-3 rounded-xl border border-fuchsia-200 bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              {...register("category", { required: "Category required" })}
            >
              <option value="">Select category</option>
              <option value="technology">Technology</option>
              <option value="programming">Programming</option>
              <option value="ai">AI</option>
              <option value="web-development">Web Development</option>
            </select>
  
            {errors.category && (
              <p className="text-sm text-red-500">{errors.category.message}</p>
            )}
          </div>
  
          {/* Content */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-fuchsia-700">
              Content
            </label>
  
            <textarea
              rows="14"
              className="w-full px-4 py-3 rounded-xl border border-fuchsia-200 bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
              {...register("content", { required: "Content required" })}
            />
  
            {errors.content && (
              <p className="text-sm text-red-500">{errors.content.message}</p>
            )}
          </div>
  
          {/* BUTTON */}
          <button className="w-full md:w-auto px-6 py-3 bg-fuchsia-800 text-white rounded-full hover:bg-purple-700 transition shadow-md">
            Update Article
          </button>
  
        </form>
      </div>
    </div>
  );
}

export default EditArticle;