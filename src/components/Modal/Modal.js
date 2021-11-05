import React, {useEffect} from  'react'
import ReactDOM from "react-dom";

import ModalForm from './ModalForm'

const Modal = () => {
  const modalRoot = document.getElementById('modal');
  const modalElement = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(modalElement);
    return () => {
      modalRoot.removeChild(modalElement);
    };
  }, [modalElement]);

  return ReactDOM.createPortal(<ModalForm />, modalRoot);

};

export default Modal;