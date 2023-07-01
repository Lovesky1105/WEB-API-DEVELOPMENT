import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 




function Signup() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate  = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/register', {name, email, password})
    .then(result => {console.log(result)
    navigate("/login")
    })
    .catch(err => console.log(err))
  }
  
  return (
    <div>
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email'>
                    <strong>Name</strong> 
                    </label>
                    <input
                    type="text"
                    placeholder='Enter Name'
                    autoComplete='off'
                    name='name'
                    className='form-control rounded-0'
                    onChange={(e) => setName(e.target.value)}
                    />
            </div>

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
                Register
            </button>
            <p>Already have an account?</p>
            <Link to ="/login" className='btn btn-success w-100 rounded-0 '>
            Login
            </Link>

        </form>

        </div>
  )
}

export default Signup