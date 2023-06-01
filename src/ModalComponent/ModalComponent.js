import React from 'react';
import Modal from 'react-modal';

const ModalComponent = ({ isOpen, closeModal, handleFileUpload}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
    >
      <input type="file" accept="image/*" onChange={handleFileUpload} />
      <button onClick={closeModal}>Закрыть</button>
    </Modal>
  );
};

export default ModalComponent;
