import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom"; 


function Drinks() {
  const { email } = useParams(); 
  const { favDrinks } = useParams(); 
  const { favFood } = useParams(); 
  const { favRecipe } = useParams(); 

  //var drinkVar = "vodka";


  const drinksQuery = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${favDrinks}`;

  const [records, setRecords] = useState([]);

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
         <li><Link to="/home/:email">Home</Link></li>
         <li><Link to="/drinks/:email/:favFood/:favDrinks/:favRecipe">Drinks</Link></li>
         <li><Link to="/recipe/:email/:favFood/:favDrinks/:favRecipe">Recipe</Link></li>
         <li><Link to="/food/:email/:favFood/:favDrinks/:favRecipe">Food</Link></li>
         </ul>
    </div>
    </div>
    
    <div className='App'>
    <h1>Drinks</h1>
    <p>Your favorite drinks: {favDrinks}</p>
            <ul>
        {records.map((drink, index) => (
          <li key={index}>
            <table>
              <tr><td>{drink.strDrink}</td></tr>
                <tr><td>{drink.strCategory}</td></tr>
                <tr><td>{drink.strInstructions}</td></tr>

                <tr>
                <td>
                  <Link to={`/updateDrinks/${email}/${favFood}/${favDrinks}/${favRecipe}`}>
                    Update
                    </Link>
                </td>
              </tr>
              
            </table>
            
          </li>

        ))}
      </ul>

    </div>
    
    </div>
  )
}

export default Drinks