import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import MainPage from './MainPage/MainPage';
import Login from './FormComponents/LoginPage/Login';
import Register from './FormComponents/RegisterPage/Register';

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element= {<MainPage/>}/>
          <Route path="/login" element= {<Login/>}/>
          <Route path="/register" element= {<Register />}/>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
