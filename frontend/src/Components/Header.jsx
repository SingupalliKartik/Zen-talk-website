import React from 'react'
import logo from '../assets/loco.svg'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';

const Header = () => {
//   const cookies = new Cookies();

//   const Logout = ()=>{
// cookies.remove("Token")
    
//   }
  return (
    <div className=' sticky text-xl bg-[#1B7F8B]    top-2  px-9 py-3 mx-12 rounded-md my-0 flex justify-between align-middle items-cente '>
    <div className="  font-one">
<img src={logo} alt="" /> 
    </div>

    <ul className='flex space-x-4 text-white align-middle items-center  ml-40'>
   <li > <Link to="/Home">Home </Link></li>
   <li> <a href="#">About</a> </li>
   <li> <a href="#">Docs</a> </li>
   <li>|</li>
   <li> <Link to="/Blog">Blogs </Link></li>
   {/* <li> <button onClick={Logout()}>Logout </button> </li> */}
    <li> <a href="#">Contact us</a> </li>
    </ul>
    

<div className="flex space-x-4   items-center">
    <div><button className=' text-white text-sm border-2  border-blue-500 p-2 px-7 rounded-3xl  hover:bg-blue-500 hover:text-white'>Download app</button></div>
    <div><Link to="/"> <button className=' text-sm bg-[#5fbff9] rounded-3xl text-white p-2 px-7 hover:bg-green-500 '>Login</button></Link></div>
</div>

    </div>
  )
}

export default Header