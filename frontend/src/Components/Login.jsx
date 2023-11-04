import React,{ useState } from "react";
import axios from "axios";
import s1 from "../assets/social media/l1.svg";
import s2 from "../assets/social media/l2.svg";
import s3 from "../assets/social media/l3.svg";
import s4 from "../assets/social media/l4.svg";
import user from "../assets/icons/user.svg";
import lock from "../assets/icons/lock.svg";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {


  const [name, checkNamel] = useState();

  const [password, checkPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {

  
    e.preventDefault();
   
    axios
      .post("http://localhost:3001/check", { name, password })
      .then((result) => {
        console.log(result);
        if(result.data ==='sucess'){
 toast("Login sucessfull");
          navigate("/Blog");
        }
        else{
          toast("Username Or pass is incorrect")
        }
      })
      .catch((err) => {
        console.log(err);  
        ;
      });
  };

  return (
    <>
    <div className="flex flex-col h-full font-lato">
        <div className="flex  items-center justify-center   my-6">
          {" "}
          <div className=" bg-[#ffffff] w-1/2  text-center py-12 rounded">
            <div className="">
              <div className=" text-4xl font-bold  text-[#56B7C3] ">
                Login to Account
              </div>
              <div className="flex space-x-3 justify-center my-4">
                <img
                  className="w-12 bg-[#8EDCE5] border-2 rounded-full border-[#56B7C3] "
                  src={s1}
                  alt=""
                />
                <img
                  className="w-12 bg-[#8EDCE5] border-2 rounded-full border-[#56B7C3] "
                  src={s2}
                  alt=""
                />
                <img
                  className="w-12 bg-[#8EDCE5] border-2 rounded-full border-[#56B7C3] "
                  src={s3}
                  alt=""
                />
                <img
                  className="w-12 bg-[#8EDCE5] border-2 rounded-full border-[#56B7C3] "
                  src={s4}
                  alt=""
                />
              </div>

              <div className="my-4 text-[#8F8F8F]">
                or use your email to log in
              </div>
            </div>
            <div className="fome px-36  space-y-2 justify-center my-3 flex flex-col items-center">
              <div className="flex  drop-shadow-[-3px_3px_1px_rgba(0,85,73,0.05)] ">
                <img className="w-4 absolute my-4 mx-3" src={user} alt="" />
                <input
                  className=" bg-[#F9FFFE] w-96 p-4 px-12 rounded "
                  type="text"
                  placeholder="User-Name"
                  id="name"
                  onChange={(e) => {
                    checkNamel(e.target.value);
                  }}
                />{" "}
              </div>

              <div className="flex drop-shadow-[-3px_3px_1px_rgba(0,85,73,0.05)]">
                <img className="w-4 absolute my-4 mx-3" src={lock} alt="" />{" "}
                <input
                  className=" bg-[#F9FFFE] w-96 p-4 px-12 rounded "
                  type="password"
                  name="pass"
                  id=""
                  placeholder="Password"
                  onChange={(e) => {
                    checkPassword(e.target.value);
                  }}
                />{" "}
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className=" bg-[#56B7C3] text-white  px-20 py-2 rounded-xl  text-xl my-4 hover:bg-[#028292]"
            >
              Login
            </button>
            <ToastContainer />
            <div className=" ">
              Have account?{" "}
              <Link to="/Signup" className="text-[#028292]">
                Signup
              </Link>
            </div>
          </div>
          <div className="bg-[#56B7C3] flex  text-center self-stretch px-16 rounded-lg">
            <div className="flex flex-col justify-center align-middle  ">
              <p className=" text-white text-3xl my-3">Welcome Back!</p>
              <p className="text-white items-center w-40  	place-self-center text-sm">
                To keep connected with us please login with your personal info
              </p>
              <div> <Link to="/Signup">
                <button className=" text-white text-sm border-2 my-4 border-white p-2 px-7 rounded-3xl  hover:bg-[#028292] hover:text-white">
                 
                 
                Sign Up
             
                </button> </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
