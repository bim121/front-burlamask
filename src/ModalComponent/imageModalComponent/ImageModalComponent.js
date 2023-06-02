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
          <img src={data} alt={`Photo`} className={styles.modalImage}/>
          <div className={styles.modalDescription}> <p className={styles.descriptionText}>Description:</p>{data.description}Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.

Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности.</div>
          </div> 
          <button onClick={closeModal} className={styles.buttonModalClose}>Close</button>
      </div>
    </Modal>
  );
};
export default ImageModalComponent;
