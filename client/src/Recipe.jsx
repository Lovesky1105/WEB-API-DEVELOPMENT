import './App.css'
import { Link } from "react-router-dom"; 
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


function Recipe() {

  const edamamAppId = '6f5d7e13';
  const edamamAppKey = 'bf25f92c6194a2eab0d58d5027401859';
  const recipeQuery = 'chicken';
  
  const recipeQueryUrl = `https://api.edamam.com/searchq=${recipeQuery}&app_id=${edamamAppId}&app_key=${edamamAppKey}`;

  useEffect(() => {
    fetch(recipeQueryUrl)
      .then(response => response.json())
      .then(data => setRecords(data.drinks)) // Extract drinks array from the response
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
    <h1>Recipe</h1>
    <ul>
        {records.map((recipe, index) => (
          <li key={index}>
            {recipe.idDrink} | {recipe.strDrink}
          </li>
        ))}
      </ul>
    </div>
    

    </div>
  )
}

export default Recipe