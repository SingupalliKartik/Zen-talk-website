import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Blogmodle from "../Components/Blog_model";
import axios from "axios";
const Blog = () => {
  const [datas, setData] = useState([]);
  async function getData() {
    await axios
      .get("http://localhost:3001/blog")
      .then((result) => {
        setData(result.data);
        console.log(datas);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" bg-[#1d1d1d] ">
      {}
      <div className="fome px-30  space-y-2 justify-center my-3 flex flex-col items-center">
        <div className=" text-4xl font-bold  text-[#56B7C3] ">Blogs</div>
        <div className="flex justify-center flex-wrap ">
          {datas.map((Data, key) => {
            console.log(Data);
            return <Blogmodle data={Data} key={key + 1} />;
          })}
        </div>
      </div>
      <div className="  bottom-0 right-0 sticky">
        <Link to="/Blogform"> 
        <button className=" bg-[#56B7C3] text-white  px-10 py-2 rounded-xl  my-2 hover:bg-[#028292]">
          Creat a blog
        </button></Link>
      </div>
    </div>
  );
};

export default Blog;
