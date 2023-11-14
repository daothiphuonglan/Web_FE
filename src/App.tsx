import React from 'react';

import './App.css';
import NavBar from './layout/header-footer/NavBar';
import Footer from './layout/header-footer/Footer';
import HomePage from './layout/HomePage/HomePage';
import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './layout/about/About';
function App() {
  const [tuKhoaTimKiem, setTuKhoaTimKiem] = useState('');
  return (
    <div className="App">

      <BrowserRouter>

      <NavBar  tuKhoaTimKiem={tuKhoaTimKiem} setTuKhoaTimKiem={setTuKhoaTimKiem}/>


      <Routes>
         <Route path="/" element={<HomePage tuKhoaTimKiem={tuKhoaTimKiem}></HomePage>}/>
         <Route path="/:maTheLoai" element={<HomePage tuKhoaTimKiem={tuKhoaTimKiem}></HomePage>}/>
         <Route path="/about" element={<About></About>}/>
      </Routes>

      

      <Footer/>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
