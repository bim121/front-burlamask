import React, { useState, useRef } from 'react';
import style from './Search.module.css';
import axios from 'axios';

export const Search = ({setChangedPhotos, duplicateChangedPhotos, user}) => {
    const [text, setText] = useState("");
    const [errrorMessage, setErrorMessage] = useState('')

    const focusInput = async() => {
        document.getElementById("search").focus();
        if(text === ''){
            setChangedPhotos(duplicateChangedPhotos);
        }else{
            const { data } = await axios.get(`http://localhost:5001/changedImage?search=${text}`);
            if (data.status === parseInt('401')) {
                setErrorMessage(data.response)
            } else {
                console.log(data)
            }
            const newArray = data.filter((d) => d.username === user);
            setChangedPhotos(newArray);
        }
    }

    const handleChange = (e) => {
        setText(e.target.value);
    }
 
    return (
    <>
        <img src = "loop.png" className={style.loop} onClick={focusInput}></img>
        <input className={style.headerInput} id="search" value={text}
            onChange={handleChange} ></input>
    </>
  );
}

export default Search;