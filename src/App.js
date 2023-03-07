// import logo from './logo.svg';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import About from './components/About';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  const navInfo = {
    logo : 'TextUtilis',
    home :  'Home',
    about : 'About Us',
    search : 'Search',
    publish:  'PublishedBy'
  };
return(
  <>

<Router>
<Navbar  navInfo = {navInfo} />
  <Routes>
    <Route path='/' element={<TextForm heading="Enter the text"/>} />
    <Route path='/about' element={<About/>} />
  </Routes>
</Router>


  </>


)







}
export default App;
