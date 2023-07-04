import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom"; 

function UpdateRecipe() {
    const { email } = useParams(); 
    const { favFood } = useParams(); 
    const { favDrinks } = useParams(); 
    const { favRecipe } = useParams(); 

    const food = favFood;
    const drink = favDrinks;
    const mail = email;
    const recipe = favRecipe;

    const navigate = useNavigate();

    const updateData = async (email, updatedData) => {
        try {
        const response = await axios.put(`http://localhost:3001/updateRecipe`, updatedData);
        return response.data;
        } catch (error) {
        console.error('Failed to update data:', error);
        throw error;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const updatedData = {
          email: mail,
          favFood: food,
          favDrinks: drink,
          favRecipe: recipe
        };
    
        updateData(email, updatedData)
          .then(updatedData => {
            console.log('Data updated successfully:', updatedData);
            navigate(`/delete/${email}/${favFood}/${favDrinks}/${favRecipe}/`);
            // Handle the updated data as needed
          })
          .catch(error => {
            console.error('Failed to update data:', error);
            // Handle the error
          });
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

      <form onSubmit={handleSubmit}>
        <h2>Submitted Values:</h2>
        <p>Your email: {email}</p>
        <p>Your favFood: {favFood}</p>
        <p>Your favDrinks: {favDrinks}</p>
        <p>Your favFoodRecipe: {favRecipe}</p>
        <p>Are you sure you want to update?</p>
        <button type='submit' className='btn btn-success w-100 rounded-0'>
          Confirm
        </button>
      </form>
    </div>
  )
}

export default UpdateRecipe