import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import MainPage from './MainPage/MainPage';
import Login from './FormComponents/LoginPage/Login';
import Register from './FormComponents/RegisterPage/Register';

function App() {
  const [user, setUser] = useState();
  const [role, setRole] = useState();
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Register />}/>
          <Route path="/login" element= {<Login setUser={setUser} setRole = {setRole}/>}/>
          <Route path="/mainpage" element= {<MainPage user={user} setUser={setUser} role = {role} setRole = {setRole}/>}/>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
