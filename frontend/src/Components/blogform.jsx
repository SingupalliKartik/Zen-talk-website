import { useState, React } from "react"; 

import { useNavigate } from "react-router-dom";
import axios from "axios";

import user from "../assets/icons/user.svg";

import bcontent from "../assets/icons/content.svg";
import image from "../assets/icons/image.svg";
import btitle from "../assets/icons/title.svg";
import blogsvg from "../assets/icons/blogills.svg";
import { ToastContainer, toast } from 'react-toastify';

const Blogform = () => {
 


  const [writename, setname] = useState();
  const [title, settitle] = useState();
  const [imgurl, seturl] = useState();

  const [content, setcontent] = useState();
  const navigate = useNavigate();



//   setInterval(() => {
//     updatedtime(date.getFullYear().toString())
//     console.log(date.getFullYear().toString())
//     console.log(date.getMonth().toString())
//     console.log(date.getDate().toString())
//   }, 1000);

  const handleSubmit = (e) => {

// console.log(typeof(url))
// console.log(typeof(content))
// console.log(typeof(title))
console.log(title)
    if(writename == undefined||title ==undefined||imgurl ==undefined||content ==undefined||writename ===""||title ===""||imgurl ===""||content ===""){
        e.preventDefault();
        toast("All fields are required")
    }
else{
    const date = new Date()
    const time = date.getDate().toString() + "/"+((date.getMonth()) +1) .toString() + "/"+date.getFullYear().toString()
    e.preventDefault();
   
    axios
      .post("http://localhost:3001/blog", { imgurl, writename, title,time, content })
      .then((result) => {
        console.log(result);
       navigate("/Blog")
        
      })
      .catch((err) => {
        console.log(err);  
      
      });
    }
  };
 

  return (
    <div>
      <div className="fome px-36  space-y-2 justify-center my-3 flex flex-col items-center">
        <div className=" text-4xl font-bold  text-[#56B7C3] ">
          Blog form
          <img className="w-40  my-4 mx-3" src={blogsvg} alt="" />
        </div>
        <div className="flex  drop-shadow-[-3px_3px_1px_rgba(0,85,73,0.05)] ">
          <img className="w-6 absolute my-4 mx-3" src={image} alt="" />
          <input
            className=" bg-[#F9FFFE] w-96 p-4 px-12 rounded "
            type="text"
            placeholder="Image url"
            id="name"
            onChange={(e) => {
              seturl(e.target.value);
            }}
          />{" "}
        </div>
        <div className="flex  drop-shadow-[-3px_3px_1px_rgba(0,85,73,0.05)] ">
          <img className="w-4 absolute my-4 mx-3" src={user} alt="" />
          <input
            className=" bg-[#F9FFFE] w-96 p-4 px-12 rounded "
            type="text"
            placeholder="Name of writer"
            id="name"
            onChange={(e) => {
              setname(e.target.value);
            }}
          />{" "}
        </div>
        <div className="flex  drop-shadow-[-3px_3px_1px_rgba(0,85,73,0.05)] ">
          <img className="w-4 absolute my-4 mx-3" src={btitle} alt="" />
          <input
            className=" bg-[#F9FFFE] w-96 p-4 px-12 rounded "
            type="text"
            placeholder="Title for blog"
            id="name"
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />{" "}
        </div>

        <div className="flex drop-shadow-[-3px_3px_1px_rgba(0,85,73,0.05)]">
          <img className="w-6 absolute my-4 mx-3" src={bcontent} alt="" />{" "}

          <textarea
          className=" bg-[#F9FFFE] w-96 p-4 px-12 rounded "
          type="textarea"
          name="pass"
          id=""
          placeholder="Content"
          onChange={(e) => {
            setcontent(e.target.value);
          }}
          
          
          />
          <ToastContainer />
        </div>
        <button
  onClick={handleSubmit}
              className=" bg-[#56B7C3] text-white  px-20 py-2 rounded-xl  text-xl my-12 hover:bg-[#028292]"
            >
              Create-Blog
            </button>
     
      </div>
    </div>
  );
};

export default Blogform;
