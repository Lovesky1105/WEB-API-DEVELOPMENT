import React, { useState, useEffect } from 'react';
import './App.css'
import { Link } from "react-router-dom"; 
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function Drinks() {

  var drinkVar = "vodka";

  const [records, setRecords] = useState([]);

   

  const drinksQuery = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkVar}`;

  useEffect(() => {
    fetch(drinksQuery)
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
    <h1>Drinks</h1>
    <ul>
        {records.map((drink, index) => (
          <li key={index}>
            {drink.strDrink} | {drink.strCategory} | {drink.strInstructions}
          </li>
        ))}
      </ul>
    </div>
    
    </div>
  )
}

export default Drinks