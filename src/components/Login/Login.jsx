<<<<<<< HEAD
import React from 'react'

function Login() {
  return (
    <div>
      
    </div>
  )
}

export default Login
=======


import './Login.css'
import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../validation/Loginvalidation'; 
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({
        email_address:'',
        password:''

});

const navigate = useNavigate();
const [errors, setErrors] = useState({

})

  const handleInput = (event) =>{
    setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
  }

  const handleSubmit =  (event) => {
    event.preventDefault();
   
    setErrors(Validation(values));

    if (errors.email_address==="" && errors.password==="") {
      axios
        .post('http://localhost:3000/login', values)
        .then(res => {
          if(res.data === "Login Success"){
            navigate('/Home')
          }else{
            alert("No record Exist")
          }
        })
        .catch(err=>console.log(err));

        }
       

      
  }



  return (
    <div className='login-form'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name='email_address'
          
          onChange={handleInput} 

        />

        {errors.email_address && <span>{errors.email_address}</span>}
        <input
          type="password"
          placeholder="Password"
          name='password'
          onChange={handleInput}
        />

{errors.password && <span>{errors.password}</span>}
        <button type="submit">Login</button>
      </form>
      <Link to="/Signup">Dont have an account? </Link>
    </div>
  );
}

export default Login;

>>>>>>> b645c92ec3426e76700e66bdef2ebd06dc8495b1
