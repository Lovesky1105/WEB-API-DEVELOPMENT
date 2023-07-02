import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import Drinks from './Drinks'
import Food from './Food'
import Recipe from './Recipe'
import Update from './Update'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/home/:email' element={<Home />}></Route>
      <Route path='/drinks/:email/:favFood/:favDrinks' element={<Drinks />}></Route>
      <Route path='/food/:email/:favFood/:favDrinks' element={<Food />}></Route>
      <Route path='/recipe' element={<Recipe />}></Route>
      <Route path='/update/:email/:favFood/:favDrinks' element={<Update />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App