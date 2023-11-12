import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './layout/header-footer/NavBar';
import Footer from './layout/header-footer/Footer';
import HomePage from './layout/HomePage/HomePage';

function App() {
  return (
    <div className="App">
       <NavBar/>

       <HomePage/>

       <Footer/>
    </div>
  );
}

export default App;
