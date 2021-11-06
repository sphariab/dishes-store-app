import React, {createContext, useContext, useState} from "react";

export const ModalContext = createContext();

export const useModal = () => {
  return useContext(ModalContext)
}

export const ModalProvider = ({children}) => {
  const [modalForm, setModalForm] = useState(false);
  const [TYpopup, setTYPopup] = useState(false);
  const [modalCart, setModalCart] = useState(false);
  const toggleTYPopup = () => {setTYPopup(!TYpopup);}
  const toggleModalForm = () => setModalForm(!modalForm);
  const toggleModalCart = () => setModalCart(!modalCart);

  return (
    <ModalContext.Provider value={{TYpopup, modalForm, toggleModalForm, toggleTYPopup, modalCart, toggleModalCart}}>
      {children}
    </ModalContext.Provider>
  )
}