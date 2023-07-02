import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom"; 

function Food() {
  const { email } = useParams(); 
  const { favDrinks } = useParams(); 

  const { favFood } = useParams(); 
  //const food = "chicken";

  const recipeQueryUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${favFood}`;

  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch(recipeQueryUrl)
      .then(response => response.json())
      .then(data => setRecords(data.meals)) // Extract drinks array from the response,  meals is the term from  api
      .catch(err => console.log(err));
  }, []);


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post('http://localhost:3001/home', { favFood, favDrinks })
  //     .then(result => {
  //       console.log(result);
  //       setSubmitted(true);
  //       //navigate("/food");
  //     })
  //     .catch(err => console.log(err));
  // };

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
    <p>Your favorite food: {favFood}</p>
            <ul>
        {records.map((food, index) => (
          <li key={index}>
            <table >
              <tr>
                <td>
                  {food.strMeal} 
                </td>
                </tr>

                <tr>
                <td>
                  {food.strArea} 
                </td>
                </tr>

                <tr>
                <td>
                  {food.strInstructions} 
                </td>
              </tr>

              <tr>
                <td>
                  <Link to={`/update/${email}/${food.strMeal}/${favDrinks}`}>
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

export default Food