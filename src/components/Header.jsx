import { useState } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";

function Header() {

  const [isLoggedIn,setIsLoggedIn] = useState(true);
  //Custom Hook
  const isOnline =useIsOnline();

  const statusColor = {
    color: isOnline ? 'green' : 'red',
  };

  return (
    <>
    
    <div className="title flex justify-between bg-[#0A0C0B] ">
      <a href="/">
      <img className="w-24 h-10" src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0" alt="logo" />
      </a>
      
      <div className="nav-items ">
        
      <ul className="flex text-[#E4AE74] ">
        <li className="px-2 "><Link to={'/'}>Home</Link></li>
        <li className="px-2 "><Link to={'/Contact'}>Contact</Link></li>
        <li className="px-2 "><Link to={'/Meals'}>Meals</Link></li>
        <li className="px-2 "><Link to={'/AboutUs'}>About Us</Link></li>
        <li className="px-2 "><Link to={'/instamart'}>InstaMart</Link></li>

        <li className="px-4 " style={statusColor}>{isOnline ? "ONLINE" : "OFFLINE"}</li>
        {(isLoggedIn == true) ? <button className="LoginLogout hover:text-red-500" onClick={()=>{setIsLoggedIn(false)}}>Login</button>
      : <button className="LoginLogout" onClick={()=>{setIsLoggedIn(true)}}>Logout</button>}
      </ul>

      
    </div>
    </div>
    
    </>
   
  )
}

export default Header;