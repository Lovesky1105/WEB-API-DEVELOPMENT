import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom"; 


function Recipe() {
  const { email } = useParams(); 
  const { favDrinks } = useParams(); 
  const { favFood } = useParams(); 
  const { favRecipe } = useParams(); 

    const api_url = `https://forkify-api.herokuapp.com/api/search?q=${favRecipe}`;
    
    const [records, setRecords] = useState([]);
    

  useEffect(() => {
    fetch(api_url)
      .then(response => response.json())
      .then(data => setRecords(data.recipes)) // Extract drinks array from the response
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
    <div className='navBar'>
    <div className="navbar-logo">
   
         <ul className='navbar-menu'>
         <li><Link to="/home/:email">Home</Link></li>
         <li><Link to="/drinks">Drinks</Link></li>
         <li><Link to="/recipe">Recipe</Link></li>
         <li><Link to="/food">Food</Link></li>
         </ul>
    </div>
    </div>
    
    <div className='App'>
    <h1>Recipe</h1>
    <ul>
        {records.map((recipes, index) => (
          <li key={index}>
            <table>
              <tr><td>{recipes.title}</td></tr>
              <tr><td>{recipes.source_url}</td></tr>
              <tr>
              <td>
                <Link to={`/updateRecipe/${email}/${favFood}/${favDrinks}/${recipes.title}`}>
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

export default Recipe