import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ largeImageURL, tags, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    const handleBodyOverflow = () => {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'visible';
      };
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      handleBodyOverflow();
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <img src={largeImageURL} alt={tags} />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
