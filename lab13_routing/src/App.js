import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbars from './components/Navbars';


function App() {
 return (
   <>
     <h1 className='title'>React routing by Kenneth Soriano</h1>


     <BrowserRouter>
       <Navbars />


       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/contact' element={<Contact />} />
       </Routes>
     </BrowserRouter>
   </>
 );
}


export default App;


