import styles from './App.module.css';
import SliderUpload from './Slider/SliderUpload'
import Slider from './Slider/Slider/Sliders';
import axios from 'axios';
import React, { useState, useRef } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function App() {
  const [photos, setPhotos] = useState([]);
  const [changedPhotos, setChangedPhotos] = useState([]);
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
      <Header />

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
    
      <Footer/>
    </div>
  );
}

function focusInput() {
  document.getElementById("myInput").focus();
}

export default App;
