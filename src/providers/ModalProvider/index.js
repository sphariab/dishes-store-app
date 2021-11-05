import React, {createContext, useContext, useState} from "react";

export const ModalContext = createContext();

export const useModal = () => {
  return useContext(ModalContext)
}

export const ModalProvider = ({children}) => {
  const [modalForm, setModalForm] = useState(false);
  const [TYpopup, setTYPopup] = useState(false);
  const toggleTYPopup = () => {
    setTYPopup(!TYpopup);
  }
  const toggleModalForm = () => setModalForm(!modalForm);

  return (
    <ModalContext.Provider value={{TYpopup, modalForm, toggleModalForm, toggleTYPopup}}>
      {children}
    </ModalContext.Provider>
  )
}