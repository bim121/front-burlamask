import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import styles from './ImageModalComponent.module.css'

const ImageModalComponent = ({ isOpen, closeModal, data}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
      className={styles.modalWindow}
    >
      <div>
          <h1>Photo Details</h1>
          <div className={styles.info}>
            <img src={data.image.url} alt={`Photo`} className={styles.modalImage}/>
            <div className={styles.modalDescription}> 
              <p className={styles.descriptionText}>
                Description:
              </p>
              {data.description}
            </div>
          </div> 
          <button onClick={closeModal} className={styles.buttonModalClose}>Close</button>
      </div>
    </Modal>
  );
};
export default ImageModalComponent;
