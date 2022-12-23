import React, { useEffect } from 'react'
import {Form, Input, message} from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import axios from '../axios';

import { useState } from 'react'
import Spinner from '../components/Spinner'

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
 
const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  

    //on submitting the form
    const submitHandler = async(values)=>{
        try {
          setLoading(true);
          await axios.post('/users/register', values)
          message.success('Registration Successful')
          setLoading(false);
          navigate('/login')
        } catch (error) {
          setLoading(false)
          message.error('Something went wrong');
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
      <div className="register-page">
         <Form className='form p-5 mb-auto mt-4' layout='vertical' onFinish={submitHandler}>
         <h1>Registration Form</h1>

            <Form.Item label='Name' name='name'> 
                <Input required='on'/>
            </Form.Item>
            <Form.Item label='Email' name='email'> 
                <Input type='email' required='on'/>
            </Form.Item>
            <Form.Item label='Password' name='password'> 
                <Input type='password' required='on'/>
            </Form.Item>
            <div className="d-flex justify-content-between flex-column">
      
                <button className='btn btn-primary'>{loading ? <Spinner /> : 'Register'}</button>
                <Link to='/login'>Already Registered? Click here to login</Link>

            </div>
         </Form>
      </div>


    </>
  )
}

export default Register