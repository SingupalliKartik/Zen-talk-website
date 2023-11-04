import React from "react";
import logo from "../assets/loco.svg";
import l1 from "../assets/social media/l1.svg";
import l2 from "../assets/social media/l2.svg";
import l3 from "../assets/social media/l3.svg";
import l4 from "../assets/social media/l4.svg";

const Footer = () => {
  return (
    <>
      <footer className="  bg-[#219fad] text-white py-4 font-lato  leading-8">
        <div className="flex justify-evenly">
          <div>
            <div className="flex py-3 ">
              <img className="w-9" src={logo} alt="" />{" "}
              <p className="  font-one">Zen tech</p>
            </div>
            <div className=" w-[50%] leading-5">
            
              is wale dabe me kuch to batanyege app ke bare me
            </div>

            <div className="flex space-x-4 py-3">
              <img
                className="  bg-black rounded-full  hover:bg-blue-400 w-6"
                src={l1}
                alt=""
              />
              <img
                className="  bg-black rounded-full  hover:bg-blue-400 w-6"
                src={l2}
                alt=""
              />
              <img
                className="  bg-black rounded-full  hover:bg-blue-400 w-6"
                src={l3}
                alt=""
              />
              <img
                className="  bg-black rounded-full  hover:bg-blue-400 w-6"
                src={l4}
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="text-xl font-bold">Company</div>
            <div>
              <a href="#">About</a>
            </div>

            <div>
              <a href="#">Features</a>
            </div>

            <div>
              <a href="#">Works</a>
            </div>
            <div>
              <a href="#">Career</a>
            </div>
          </div>
          <div>
            <div className="text-xl font-bold">Help</div>
            <div>
              <a href="#">Customer Support</a>
            </div>

            <div>
              <a href="#">Delivery Details</a>
            </div>

            <div>
              <a href="#">Terms & Conditions</a>
            </div>
            <div>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
          <div>
            <div className="  text-xl font-bold">Resources</div>
            <div>
              <a href="#">Free eBooks</a>
            </div>

            <div>
              <a href="#">Development Tutorial</a>
            </div>

            <div>
              <a href="#">How to - Blog</a>
            </div>
            <div>
              <a href="#">Youtube Playlist</a>
            </div>
          </div>
        </div>
        <hr className="my-3" />
        <div className=" text-center text-white pt-4">
       
          © Copyright 2022, All Rights Reserved by ZenTalk
        </div>
      </footer>
    </>
  );
};

export default Footer;
