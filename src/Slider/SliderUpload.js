import React, { useState, useRef } from 'react';
import Slider from 'react-slider';
import ModalComponent from '../ModalComponent/ModalComponent';
import styles from './SliderUpload.module.css'

const SliderUpload = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const sliderRef = useRef(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSliderChange = (value) => {
    setSliderValue(value);
    setCurrentPhotoIndex(value);
  };

  const handlePrevious = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
      setSliderValue(currentPhotoIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentPhotoIndex < photos.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
      setSliderValue(currentPhotoIndex + 1);
    }
  };

  const handleFileUpload = (e) => {
    const uploadedPhoto = e.target.files[0];
    const newPhotos = [...photos, URL.createObjectURL(uploadedPhoto)];
    setPhotos(newPhotos);
    setCurrentPhotoIndex(newPhotos.length - 1);
    setSliderValue(newPhotos.length - 1);
  };

  return (
    <div className={styles.container}>
      <button onClick={handlePrevious} disabled={currentPhotoIndex === 0} className={styles.button}>
        Previous
      </button>
      <div className={styles.wrapper}>
        <div
          style={{
            display: 'flex',
            transition: 'transform 0.5s',
            transform: `translateX(-${sliderValue * (100 / 2)}%)`,
          }}
        >
          <div className={styles.slider}>
            <div className={styles.upload} onClick={openModal}></div>
            <ModalComponent isOpen={modalIsOpen} closeModal={closeModal} handleFileUpload={handleFileUpload} />
            {photos.map((photo, index) => (
              <div
                key={index}
                style={{
                  width: `${100/(photos.length+1)}%`,
                  flexShrink: 1,
                }}
              >
                <img src={photo} alt={`Photo ${index}`} className={styles.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <button onClick={handleNext} disabled={currentPhotoIndex === photos.length - 1} className={styles.button}>
        Next
      </button>

      <Slider
        ref={sliderRef}
        min={0}
        max={photos.length - 1}
        value={sliderValue}
        onChange={handleSliderChange}
        ariaLabel={['Slider', 'Slider']}
      />
    </div>
  );
};

export default SliderUpload;