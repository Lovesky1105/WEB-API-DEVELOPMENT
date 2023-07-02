import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom"; 

function Update() {
  const { email } = useParams(); 
  const { favFood } = useParams(); 
  const { favDrinks } = useParams(); 

  
  
  
  const updateData = async (email, favFood, favDrinks) => {
    try {
      const response = await axios.put(`http://localhost:3001/update/${email}`, favFood, favDrinks);
      return response.data;
    } catch (error) {
      console.error('Failed to update data:', error);
      throw error;
    }
  };

  updateData(email, favFood, favDrinks)
  .then(favFood, favDrinks => {
    console.log('Data updated successfully:', favFood, favDrinks);
    // Handle the updated data as needed
  })
  .catch(error => {
    console.error('Failed to update data:', error);
    // Handle the error
  });

  // const handleUpdate = (e) => {
  //   e.preventDefault();
  //   axios.post('http://localhost:3001/update', { favFood, favDrinks, email})
  //     .then(result => {
  //       console.log(result);
  //       setSubmitted(true);
  //       navigate(`/home/${email}}`);
  //     })
  //     .catch(err => console.log(err));
  // };

  return (
    <div>
    

    <form onSubmit={updateData}>
      <h2>Submitted Values:</h2>
      <p>Your email: {email}</p>
      <p>Your favFood: {favFood}</p>
      <p>Your favDrinks: {favDrinks}</p>
      <p>You sure you want to update ?</p>
      <button type='submit' className='btn btn-success w-100 rounded-0'>
        Confirm
      </button>

      
    </form>
    </div>
  )
}

export default Update