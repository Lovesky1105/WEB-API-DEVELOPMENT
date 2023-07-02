import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom"; 

function Home(props) {
  const [favFood, setFavFood] = useState('');
  const [favDrinks, setFavDrinks] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate  = useNavigate();
  const { email } = useParams(); 
   

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/home', { favFood, favDrinks, email})
      .then(result => {
        console.log(result);
        setSubmitted(true);
        navigate(`/food/${email}/${favFood}/${favDrinks}`);
      })
      .catch(err => console.log(err));
  };

      //food api
        // const recipeQueryUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${favFood}`;

        // const [records1, setRecords1] = useState([]);

        // useEffect(() => {
        //   fetch(recipeQueryUrl)
        //     .then(response1 => response1.json())
        //     .then(data1 => setRecords1(data1.meals)) // Extract drinks array from the response,  meals is the term from  api
        //     .catch(err1 => console.log(err1));
        // }, []);
        // end food api

        //drinks api
        // const drinksQuery = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${favDrinks}`;

        // const [records2, setRecords2] = useState([]);

        // useEffect(() => {
        //   fetch(drinksQuery)
        //     .then(response => response.json())
        //     .then(data => setRecords2(data.drinks)) // Extract drinks array from the response
        //     .catch(err => console.log(err));
        // }, []);
        // end drinks api




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
            <button type='submit' className='btn btn-success w-100 rounded-0'>
              Submit
            </button>
          </form>
        
      </div>
    </div>
  );
}

export default Home;