import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import styles from './ImageModalComponent.module.css'

const ImageModalComponent = ({ isOpen, closeModal, data, handleDelete}) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = data.image.url;
    link.click();
  };

  const handleClick = () => {
    handleDelete(data.id);

  };

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
          <div className={styles.buttons}>
            <button onClick={handleDownload} className={styles.buttonModalDownload}>Download</button>
            <button onClick={handleClick} className={styles.buttonModalDelete}>Delete</button>
            <button onClick={closeModal} className={styles.buttonModalClose}>Close</button>
          </div>
      </div>
    </Modal>
  );
};
export default ImageModalComponent;
