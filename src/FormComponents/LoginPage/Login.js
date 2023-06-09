import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Header from '../../Header/Header';

const Login = ({setUser, setRole}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errrorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const form = {
      username: formData.get('username'),
      password: formData.get('password')
    };
    const { data } = await axios.post("http://localhost:5001/auth/login", form);
    if (data.status === parseInt('401')) {
      setErrorMessage(data.response)
    } else {
      localStorage.setItem('token', data.token);
      setUser(data.username);
      setRole(data.roles);
      navigate('/mainpage')
    }
  };

  const gotoSignUpPage = () => navigate("/");
  
  return (
    <>
        <Header isMainPage = {false}/>
        <div className='login__container'>
          <h2> Login </h2>
          <form className='login__form' onSubmit={handleSubmit}>
            <label htmlFor = 'username'>username</label>
            <input
              type = "text"
              id = 'username'
              name = 'username'
              value = {username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor='password'>Password</label>
            <input
              type = 'password'
              name = 'password'
              id = 'password'
              minLength={8}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='loginBtn'>SIGN UP</button>
            <p>
              Don't have an account?{" "}
              <span className='link' onClick={gotoSignUpPage}>
                Sign up
              </span>
            </p>
          </form>
        </div>
    </>
  );
}

export default Login;