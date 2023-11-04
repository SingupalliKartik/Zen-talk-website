import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const NewPage = () => {
  // const location = useLocation()
  const [content, setcontent] = useState([]);
  const [title, setTitle] = useState([]);
  const [writername, setwriteranme] = useState([]);
  const [date, setDate] = useState([]);
  const [image, setImage] = useState([]);
  const { id } = useParams();

  const getData = async () => {
    const response = await axios.post("http://localhost:3001/blogone", {
      kuch: id,
    });
    setcontent(response.data.content);
    setTitle(response.data.title);
    setwriteranme(response.data.writename);
    setImage(response.data.imgurl);
    setDate(response.data.time);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="my-4 ">
      <div className="text-center">

      <div className=" text-[2.7rem] font-bold  text-[#56B7C3] ">{title}</div>

      <div className="  justify-around align-middle flex my-3">
        <div className="  font-bold">By- {writername}</div>

        <div className="font-bold">{date}</div>
      </div>
      </div>
<div className=" px-48 my-5">

      
        <img className="w-56 h-65  float-left my-5 mx-6" src={image} alt="" />
     

      <div className="     clear-right text-[17px] font-Cormorant font-semibold text-xl ">{content}</div>
</div>
    </div>
  );
};

export default NewPage;
