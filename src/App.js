import styles from './App.module.css';
import SliderUpload from './Slider/SliderUpload'
import Slider from './Slider/Slider/Sliders';
import axios from 'axios';
import React, { useState, useRef } from 'react';

function App() {
  const [photos, setPhotos] = useState([]);
  const [changedPhotos, setChangedPhotos] = useState(["burlamask.png"]);
  const [errrorMessage, setErrorMessage] = useState('')
  let newPhotos = [];
  const handleFileUpload = async() => {
    for(let i = 1; i < photos.length; i++){
      const object = {
        faceUrl: photos[i].image.url,
        bodyUrl: photos[i-1].image.url,
        descriptionOne : photos[i].description,
        descriptionTwo:  photos[i-1].description
      }
      console.log(changedPhotos)
      console.log(object)
      const { data } = await axios.post("http://localhost:5001/changedImage/add", object );
      if (data.status === parseInt('401')) {
        setErrorMessage(data.response)
      } else {
        console.log(data)
      }
      newPhotos = [...newPhotos, data[0], data[1]];
    }
    setChangedPhotos(newPhotos);
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
      <div className={styles.wrapHeader}>
      <div className={styles.logo}><img className = {styles.burlaMaskImg} src="burlamask.png"/></div>
        <h1>BurlaMask</h1>
      </div>
      <div className={styles.inputFull}>
        <img className={styles.loopa} src = "loopa.png" onClick={focusInput}></img>
        <div className={styles.inputForm}>
          <form>
            <input className={styles.headerInput} id="myInput" type="text"></input>
          </form>
        </div>
      </div>
    </header>

    <div className={styles.background}>
        <div className={styles.slider}>
          <SliderUpload photos={photos} setPhotos={setPhotos} changedPhotos={changedPhotos} setChangedPhotos={setChangedPhotos}/>
        </div>
        <div className={styles.containerButton}>
         <div onClick={handleFileUpload}><img className={styles.swapIcon} src = "swap-icon.jpg"></img></div>
        </div>
        <div className={styles.slider}>
          <Slider changedPhotos={changedPhotos} setChangedPhotos={setChangedPhotos}/>
        </div>
    </div>
    
    <footer className={styles.footer}>
      <div className={styles.wrapFooter}>
        <div className={styles.logo}><img  className = {styles.burlaMaskImg} src="burlamask.png" width="120vh" height="120vh"/></div>
      </div>
      <p className={styles.text}>BurlaMask</p>
      
      <div className={styles.team}>
        <h2>Team</h2>
        <ul>
          <li>Tishik Vitalii</li>
          <li>Tkachenko Danil</li>
          <li>Kiriyak Nazarii</li>
          <li>Pan Stepan</li>
        </ul>
      </div>
    </footer>
    </div>
  );
}

function focusInput() {
  document.getElementById("myInput").focus();
}

export default App;
