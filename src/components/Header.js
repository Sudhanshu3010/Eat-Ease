import { useState } from "react";
import Logo from "../Images/Logo1.png";
import { Link } from "react-router-dom";
 
//  const LoggedIn=()=>{
//   //Api call to authenticate user
//     return true;
//  }
 
 const Title =()=>(
  
    <a href="/"> 
      <img className="logo" alt="logo" 
      // src="https://api.logo.com/api/v2/images?logo=logo_6a279f71-1a22-4152-921c-312bdaa11287&u=1702204414&width=500&height=400&fit=contain&margins=100&format=webp&quality=60"
      
       src={Logo} 
      />
       
     </a>
     
  );


  const Header=()=>{

     const [isLoggedin,setIsLoggedin] = useState(false);

    return (
      <div className="header">
        {/* {title} */}
        <Title/>
        {/* we can also use <Title()> */}
        {/* we can also use <Title></Title> */}
        <div className="nav-items">
          <ul>
           
            <li><Link to="/">Home </Link></li>
           
          
            <li>  <Link to="/about">About  </Link> </li>
          
            <Link to="/contact">
            <li>Contact</li>
            </Link>
            <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                Login
              </button>
            )}
          </li>
          </ul>
        </div>
      </div>
    );
  }; 

  export default Header;
