import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 

function Login() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate  = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/login', {email, password})
    .then(result => {
      console.log(result)
      if(result.data ==="Success"){
        navigate("/home")
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
            
            <div className='mb-3'>
                <label htmlFor='email'>
                  <strong>Email</strong>
                </label>
                <input
                    type="email"
                    placeholder='Enter Email'
                    autoComplete='off'
                    name='email'
                    className='form-control rounded-0'
                    onChange={(e) => setEmail(e.target.value)}
                    />
            </div>

            <div className='mb-3'>
                <label htmlFor='email'>
                  <strong>Password</strong>
                </label>
                <input
                    type="password"
                    placeholder='Enter Password'
                    autoComplete='off'
                    name='password'
                    className='form-control rounded-0'
                    onChange={(e) => setPassword(e.target.value)}
                    />
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-0 '>
                Login
            </button>
            <p>Dont have account?</p>
            <Link to ="/register" >
                Register
            </Link>

        </form>

        </div>
  )
}

export default Login;