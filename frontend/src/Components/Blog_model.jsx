import React,{ useEffect, useState } from "react";
import Newpage from './newpage'
import { useNavigate } from "react-router-dom";
const Blog_model = ({data}) => {
  const navigate = useNavigate();
 const nextpage=()=>{
  navigate(`/NewPage/${data._id}`)

}
  return (
    <div className="">
      <div className="  bg-[#ebefef4c] rounded-lg border p-4 w-60  place-content-center max-h-[23rem] min-h-[23rem] my-1 mx-2">
        {console.log(data.imgurl)}
        <img
          src={data.imgurl}
          alt="Placeholder Image"
          className="w-full h-48 rounded-md object-cover text-white"
        />
        <div className="px-1 py-4">
          <div className="font-bold text-[1.1rem] mt-2 truncate text-white ">{data.title}</div>
        </div>
        <div className="flex  justify-between text-xl">
          <p className="text-sm text-white">By {data.writename} </p> <p className="text-sm text-white">{data.time} </p>
        </div>
        <button onClick={nextpage}  className=" bg-[#398b44] text-white  px-10 py-2 rounded-xl  my-2 hover:bg-[#028292]">
          Read more
        </button>
      </div>
    </div>
  );
};

export default Blog_model;

