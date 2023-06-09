import styles from './MainPage.module.css';
import SliderUpload from '../Slider/SliderUpload'
import Slider from '../Slider/Slider/Sliders';
import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ContentStartPage from '../ContentStartPage/ContentStartPage';

function MainPage({user, setUser, role, SetRole}) {
  const [photos, setPhotos] = useState([]);
  const [changedPhotos, setChangedPhotos] = useState([]);
  const [duplicateChangedPhotos, setDuplicateChangedPhotos] = useState([]);
  const [errrorMessage, setErrorMessage] = useState('')
  let newPhotos = [];

  useEffect(() => {
    (async () => {
      if (user) {

        const object = {
          username: user
        }
        const { data } = await axios.post("http://localhost:5001/changedImage/username", object);
        if (data.status === parseInt('401')) {
          setErrorMessage(data.response)
        } else {
          console.log(data)
        }
        setChangedPhotos(data);
        setDuplicateChangedPhotos(data);
      }
    })();
  }, []);


  const handleFileUpload = async() => {
    for(let i = 1; i < photos.length; i++){
      const object = {
        faceUrl: photos[i].image.url,
        bodyUrl: photos[i-1].image.url,
        descriptionOne : photos[i].description,
        descriptionTwo:  photos[i-1].description,
        username: user
      }
      const { data } = await axios.post("http://localhost:5001/changedImage/add", object );
      if (data.status === parseInt('401')) {
        setErrorMessage(data.response)
      } else {
        console.log(data)
      }
      newPhotos = [...newPhotos, data[0], data[1]];
    }
    setChangedPhotos(newPhotos);
    setDuplicateChangedPhotos(newPhotos);
  };

  return (
    <div className={styles.app}>
      <Header changedPhotos={changedPhotos} setChangedPhotos={setChangedPhotos} duplicateChangedPhotos={duplicateChangedPhotos} user={user} role={role}/>
      <ContentStartPage />
      <div className={styles.colorBg}>
        <div className={styles.background}>
          <div className={styles.slider}>
            <SliderUpload photos={photos} setPhotos={setPhotos} changedPhotos={changedPhotos} setChangedPhotos={setChangedPhotos} user={user}/>
          </div>
          <div className={styles.containerButton}>
          <div onClick={handleFileUpload}><img className={styles.swapIcon} src = "swap-icon.jpg"></img></div>
          </div>
          <div className={styles.slider}>
            <Slider changedPhotos={changedPhotos} setChangedPhotos={setChangedPhotos} user={user}/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default MainPage;
