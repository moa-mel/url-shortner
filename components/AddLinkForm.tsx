import React from 'react'
import { useForm } from "react-hook-form";
import axios, { AxiosRequestConfig } from "axios"

  type Link = {
    link: string;
  }

const AddLinkForm = ({setLinkId}) => {

    const { register, handleSubmit, formState: {errors}   } = useForm<Link>();
    const onFormSubmit = async (values: Link)=>{
      const config: AxiosRequestConfig = {
       url: "/api/addlink",
       headers:{
         "Content-Type": "application/json"
       },
       data: values,
       method: "post", 
     }
     const res = await axios(config);
       if(res.status === 200){
           setLinkId(res.data.link)
       }
    };
    return (
        <form onSubmit={handleSubmit(onFormSubmit)}>
        <input 
        {...register("link", {
          required: {
            value: true,
            message: "You must provide a URL",
          },
          pattern:{
            value: RegExp(`((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)`, 
             ),
            message: "You must submit a URL with the correct format."
          }
        } 
        )}
        type="text" 
        className={`bg-gray-100 w-full px-2 h-12 placeholder-gray-600 mt-8 focus:outline-none focus:ring-2
        focus:ring-indigo-700 rounded-lg ${errors?.link ? "ring-2 ring-red-500" : "null" }`} 
        placeholder="Enter long URL"/>
          <div className="mt-2 text-red-600 text-sm"> {errors?.link?.message} </div>

        <button type="submit" className="mt-4 px-3 py-1 bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg" >
            Shorten
            </button>
        </form>
    )
}

export default AddLinkForm
