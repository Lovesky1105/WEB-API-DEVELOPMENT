import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom"; 

function Home(props) {
  const [favFood, setFavFood] = useState('');
  const [favDrinks, setFavDrinks] = useState('');
  const [favRecipe, setFavRecipe] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate  = useNavigate();
  const { email } = useParams(); 
   

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/home', { favFood, favDrinks, email, favRecipe})
      .then(result => {
        console.log(result);
        setSubmitted(true);
        navigate(`/food/${email}/${favFood}/${favDrinks}/${favRecipe}`);
      })
      .catch(err => console.log(err));
  };



  return (
    <div>
      <div className='navBar'>
        <div className="navbar-logo">
        <ul className='navbar-menu'>
         <li><Link to="/home/:email">Home</Link></li>
         <li><Link to="/drinks/:email/:favFood/:favDrinks/:favRecipe">Drinks</Link></li>
         <li><Link to="/recipe/:email/:favFood/:favDrinks/:favRecipe">Recipe</Link></li>
         <li><Link to="/food/:email/:favFood/:favDrinks/:favRecipe">Food</Link></li>
         </ul>
        </div>
      </div>
    
      <div className='App'>
        <h1>Home</h1>

       
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='favFood'>
                <strong>Your favorite food</strong>
              </label>
              <input
                type="text"
                placeholder='Enter your favorite food'
                autoComplete='off'
                name='favFood'
                className='form-control rounded-0'
                value={favFood}
                onChange={(e) => setFavFood(e.target.value)}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='favDrinks'>
                <strong>Your favorite drinks</strong>
              </label>
              <input
                type="text"
                placeholder='Enter your favorite drinks'
                autoComplete='off'
                name='favDrinks'
                className='form-control rounded-0'
                value={favDrinks}
                onChange={(e) => setFavDrinks(e.target.value)}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='favRecipe'>
                <strong>Your favorite food recipe</strong>
              </label>
              <input
                type="text"
                placeholder='Enter your favorite Recipe'
                autoComplete='off'
                name='favRecipe'
                className='form-control rounded-0'
                value={favRecipe}
                onChange={(e) => setFavRecipe(e.target.value)}
              />
            </div>

            <button type='submit' className='btn btn-success w-100 rounded-0'>
              Submit
            </button>
          </form>
        
      </div>
    </div>
  );
}

export default Home;