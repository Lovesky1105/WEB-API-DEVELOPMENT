import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 



function Home(props) {

  const [favFood, setFavFood] = useState()
  const [favDrinks, setFavDrinks] = useState()
  const navigate  = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/home', {favFood, favDrinks})
    .then(result => {console.log(result)
    navigate("/food")
  
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
    <div className='navBar'>
    <div className="navbar-logo">
   
         <ul className='navbar-menu'>
         <li><Link to="/home">Home</Link></li>
         <li><Link to="/drinks">Drinks</Link></li>
         <li><Link to="/recipe">Recipe</Link></li>
         <li><Link to="/food">Food</Link></li>
         </ul>
    </div>
    </div>
    
    <div className='App'>
    <h1>Home</h1>

    <form onSubmit={handleSubmit}>
            
            <div className='mb-3'>
                <label htmlFor='email'>
                  <strong>Your favorite food</strong>
                </label>
                <input
                    type="text"
                    placeholder='Enter you favorite food'
                    autoComplete='off'
                    name='favFood'
                    className='form-control rounded-0'
                    onChange={(e) => setFavFood(e.target.value)}
                    />
            </div>

            <div className='mb-3'>
                <label htmlFor='email'>
                  <strong>Your favorite drinks</strong>
                </label>
                <input
                    type="text"
                    placeholder='Enter you favorite drinks'
                    autoComplete='off'
                    name='favDrinks'
                    className='form-control rounded-0'
                    onChange={(e) => setFavDrinks(e.target.value)}
                    />
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-0 '>
                Submit
            </button>
            
        </form>


    </div>
    
    </div>
  )
}

export default Home