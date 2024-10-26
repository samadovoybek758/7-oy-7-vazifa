import React from 'react';
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Cart from './components/Cart';
import Main from './components/Main';


function App() {
  
  return (
    
          <Routes>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='/' element={<Main></Main>}></Route>
          </Routes>
   
  )
}

export default App