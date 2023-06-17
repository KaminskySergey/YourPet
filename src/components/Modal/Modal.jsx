import { useEffect } from 'react';
import { createPortal } from 'react-dom';


import { Backdrop, ModalContainer } from './Modal.styled';

const rootModal = document.querySelector('#root_modal');

const Modal = ({ children }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === `Escape`) {
        // onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, 
//   [onClose]
  );

  const handleClose = e => {
    if (e.target === e.currentTarget) {
    //   onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleClose}>
      <ModalContainer>
        {children}
      </ModalContainer>
    </Backdrop>,
    rootModal
  );
};

export default Modal;