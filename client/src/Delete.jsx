import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Delete() {
  const [favFood, setFavFood] = useState('');
  const [favDrinks, setFavDrinks] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .delete('http://localhost:3001/delete')
      .then(() => {
        console.log('All rows deleted successfully');
        setSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className='navBar'>
      <div className="navbar-logo">
   
         <ul className='navbar-menu'>
         <li><Link to="/home/:email">Home</Link></li>
         <li><Link to="/drinks/:email/:favFood/:favDrinks">Drinks</Link></li>
         <li><Link to="/recipe/:email/:favFood/:favDrinks">Recipe</Link></li>
         <li><Link to="/food/:email/:favFood/:favDrinks">Food</Link></li>
         </ul>
      </div>
      </div>

      <div className='App'>
        <h1>Delete</h1>

        {submitted ? (
          <div>
            <p>Your favorite food, favorite drinks and recipe has been deleted! </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <button onClick={handleSubmit}  className='btn btn-success w-100 rounded-0'>
                Delete
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Delete;
