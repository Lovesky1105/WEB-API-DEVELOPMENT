import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 

function Food() {

  var food = "chicken";

  const recipeQueryUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;

  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch(recipeQueryUrl)
      .then(response => response.json())
      .then(data => setRecords(data.meals)) // Extract drinks array from the response,  meals is the term from  api
      .catch(err => console.log(err));
  }, []);


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
        <h1>Food</h1>
        <ul>
        {records.map((food, index) => (
          <li key={index}>
            {food.strMeal} | {food.strArea} | {food.strInstructions}
          </li>
        ))}
      </ul>
    </div>
    
    </div>
  )
}

export default Food