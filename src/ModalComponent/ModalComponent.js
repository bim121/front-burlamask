import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import styles from './ModalComponent.module.css'

const ModalComponent = ({ isOpen, closeModal, handleFileUpload, selectedFile}) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
    >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.customFileUpload}>
            <label for="file-upload" className={styles.fileUploadLabel}>
              <span className={styles.uploadText}>Выбрать файл</span>
              <span className={styles.fileName}>{selectedFile ? selectedFile.name : 'Файл не выбран'}</span>
            </label>
            <input id="file-upload" class={styles.fileUpload} type="file" accept="image/*" onChange={handleFileUpload} />
          </div>
        

          <textarea
            rows={5}
            cols={50}
            value={text}
            onChange={handleChange}
            className={styles.text}
          />
        </div>
        <div className={styles.buttons}>
          <button onClick={closeModal}>Закрыть</button>
          <button>Отправить</button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalComponent;
