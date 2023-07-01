import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import Drinks from './Drinks'
import Food from './Food'
import Recipe from './Recipe'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/drinks' element={<Drinks />}></Route>
      <Route path='/food' element={<Food />}></Route>
      <Route path='/recipe' element={<Recipe />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
