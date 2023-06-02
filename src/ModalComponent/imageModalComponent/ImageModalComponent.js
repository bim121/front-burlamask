import React, { useState, useRef } from 'react';
import Modal from 'react-modal';

const ImageModalComponent = ({ isOpen, closeModal, data}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
    >
      <div>
          <h1>Photo Details</h1>
          <img src={data.image.url} alt={`Photo`} />
          <p>Description: {data.description}</p>
          <button onClick={closeModal}>Close</button>
      </div>
    </Modal>
  );
};

export default ImageModalComponent;
