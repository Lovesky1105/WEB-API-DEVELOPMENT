import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import Drinks from './Drinks'
import Food from './Food'
import Update from './Update'
import UpdateDrinks from './UpdateDrinks'
import Recipe from './Recipe'
import Delete from './Delete'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UpdateRecipe from './UpdateRecipe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/home/:email' element={<Home />}></Route>
      <Route path='/drinks/:email/:favFood/:favDrinks/:favRecipe' element={<Drinks />}></Route>
      <Route path='/food/:email/:favFood/:favDrinks/:favRecipe' element={<Food />}></Route>
      <Route path='/update/:email/:favFood/:favDrinks/:favRecipe' element={<Update />}></Route>
      <Route path='/updateDrinks/:email/:favFood/:favDrinks/:favRecipe' element={<UpdateDrinks />}></Route>
      <Route path='/recipe/:email/:favFood/:favDrinks/:favRecipe' element={<Recipe />}></Route>
      <Route path='/updateRecipe/:email/:favFood/:favDrinks/:favRecipe' element={<UpdateRecipe />}></Route>
      <Route path='/delete/:email/:favFood/:favDrinks/:favRecipe' element={<Delete />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
