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
    
    <div className="title">
      <a href="/">
      <img src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0" alt="logo" />
      </a>
      
      <div className="nav-items">
        
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/Contact'}>Contact</Link></li>
        <li><Link to={'/Meals'}>Meals</Link></li>
        <li><Link to={'/AboutUs'}>About Us</Link></li>
        <li><Link to={'/instamart'}>InstaMart</Link></li>

        <li style={statusColor}>{isOnline ? "ONLINE" : "OFFLINE"}</li>
        {(isLoggedIn == true) ? <button className="LoginLogout" onClick={()=>{setIsLoggedIn(false)}}>Login</button>
      : <button className="LoginLogout" onClick={()=>{setIsLoggedIn(true)}}>Logout</button>}
      </ul>

      
    </div>
    </div>
    
    </>
   
  )
}

export default Header;