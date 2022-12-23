import React, { useEffect } from 'react'
import {Form,Input, message} from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../axios';

import { useState } from 'react'
import Spinner from '../components/Spinner'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';





const Login = () => {
  const[loading, setLoading] = useState(false);
  const navigate = useNavigate();

     //on submitting the form
     const submitHandler = async(values)=>{
        try {
          setLoading(true)
          const {data} = await axios.post('/users/login', values)
          message.success('User login successfully')
          setLoading(false)

          localStorage.setItem('user', JSON.stringify({...data.user, password:''}))
          navigate('/')
        } catch (error) {
          setLoading(false)
           message.error('Invalid Credentials');
        }
    }
   
    //prevent for login user
    
    useEffect(() => {
      if (localStorage.getItem("user")) {
        navigate("/");
      }
    }, [navigate]);
  return (
    <>
    
    <div className='navbarContainer'>
      <div className="navbarLeft">
        <span className='logo'>Expense Management</span>
        <img  className='logo_img' src="https://e7.pngegg.com/pngimages/13/299/png-clipart-money-management-expense-android-angle-personal-finance.png" alt="" />
      </div>
      <div className="navbarRight">
        <div className="navbarRightContainer">
         <AccountCircleRoundedIcon className='icon'/>
           <span className='navbarRightText'>Hello, User</span>
        </div>
      </div>
     </div> 
     <div className="login">
    <div className='login-page'>
    <div className="login_heading">
      <h1>Expense Management System</h1>
      
    </div>
    <div className="login_data">
        <div className="login_left">
        <img className='img-fluid' src="https://www.livetecs.com/wp-content/uploads/2019/05/Time-Expense-Tracking-.png" alt='' />
        </div>
        
        <div className="login_left">
      
          <Form layout='vertical' onFinish={submitHandler} className='form p-5 mb-5'>
         <h1>Login</h1>

            <Form.Item label='Email' name='email'> 
                <Input type='email' autoComplete='on' required='on'/>
            </Form.Item>
            <Form.Item label='Password' name='password'> 
                <Input type='password' required='on'/>
            </Form.Item>
            <div className="d-flex justify-content-between flex-column">
                <button className='btn btn-primary'> {loading ? <Spinner className='spinner' /> : 'Login'}</button>
                <Link to='/register'>New user? Click here to register</Link>

            </div>
         </Form>
   

         </div>
         </div> 
    </div>
    </div>
    </>

  )
}

export default Login