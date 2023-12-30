import { useState } from "react";

function Header() {

  const [isLoggedIn,setIsLoggedIn] = useState(true);


  return (
    <>
    
    <div className="title">
      <img src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0" alt="logo" />
      <div className="nav-items">
        
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>Meals</li>
        <li>About Us</li>

        {(isLoggedIn == true) ? <button className="LoginLogout" onClick={()=>{setIsLoggedIn(false)}}>Login</button>
      : <button className="LoginLogout" onClick={()=>{setIsLoggedIn(true)}}>Logout</button>}
      </ul>
      
      
      
    </div>
    </div>
    
    </>
   
  )
}

export default Header;