import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { message } from "antd";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


const Header = () => {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate("/login");
  };
  return (
    <>
<nav className="navbar navbar-expand-lg navbar_Header">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to='/' className="navbar-brand" >
       <div className="navbar_headerRight">
         <h3>Expense Management</h3>
         <img className='logo_img mb-2' src="https://e7.pngegg.com/pngimages/13/299/png-clipart-money-management-expense-android-angle-personal-finance.png" alt="" />
       </div>
        
      </Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
      <div className="nav_right m-2">
      {" "}
                <AccountCircleRoundedIcon className='icon'/>
                <p className="nav_rightText">Welcome, <span>{loginUser && loginUser.name}</span></p>{" "}
      </div>
                
              </li>
              <li className="nav-item">
                <button className="btn btn-primary mt-4" onClick={logoutHandler}>
                  Logout
                </button>
              </li>
      </ul>
      
    </div>
  </div>
</nav>


    </>
  )
}

export default Header