import React, { useState, useRef } from 'react';
import Slider from 'react-slider';
import styles from '../SliderUpload.module.css'
import ImageModalComponent from '../../ModalComponent/imageModalComponent/ImageModalComponent';
import axios from 'axios';

const Sliders = ({changedPhotos, setChangedPhotos, user}) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [ImageModalIsOpen, setImageModalIsOpen] = useState(false);
  const sliderRef = useRef(null);

  const handleDelete = (id) => {
    const newArray = changedPhotos.filter((p) => p.id !== id);
    setChangedPhotos(newArray);
    axios.delete(`http://localhost:5001/changedImage/${id}`)
    .then(response => {
      console.log('Element was deleted');
    })
    .catch(error => {
      console.error('Error while deleting element:', error);
    });
  }

  const handleSliderChange = (value) => {
    setSliderValue(value);
    setCurrentPhotoIndex(value);
  };

  const openImageModal = (index) => {
    setPhotoIndex(index);
    setImageModalIsOpen(true);
  };

  const closeImageModal = () => {
    setImageModalIsOpen(false);
  };

  const handlePrevious = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
      setSliderValue(currentPhotoIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentPhotoIndex < changedPhotos.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
      setSliderValue(currentPhotoIndex + 1);
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={handlePrevious} disabled={currentPhotoIndex === 0} className={styles.button}>
      &lt;
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
            {changedPhotos.map((photo, index) => (
              <div
                key={index}
                style={{
                  width: `${100/(changedPhotos.length)}%`,
                  flexShrink: 1,
                }}
              >
                <img src={photo.image.url} alt={`Photo ${index}`} className={styles.image} onClick={() => openImageModal(index)}/>
              </div>
            ))}
            {changedPhotos.length > 0 ? <ImageModalComponent isOpen={ImageModalIsOpen} closeModal={closeImageModal} data={changedPhotos[photoIndex]} handleDelete={handleDelete}/> : null}
          </div>
        </div>
      </div>
      <button onClick={handleNext} disabled={currentPhotoIndex === changedPhotos.length - 1} className={styles.button}>
        &gt;
      </button>

      <Slider
        ref={sliderRef}
        min={0}
        max={changedPhotos.length - 1}
        value={sliderValue}
        onChange={handleSliderChange}
        ariaLabel={['Slider', 'Slider']}
      />
    </div>
  );
};

export default Sliders;