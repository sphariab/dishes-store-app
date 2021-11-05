import React, {createContext, useContext, useState} from "react";

export const AlertContext = createContext();

export const useAlert = () => {
  return useContext(AlertContext)
}

export const AlertProvider = ({children}) => {
  const [alert, setAlert] = useState({visible: false, text: ''});

  return (
    <AlertContext.Provider value={{alert, setAlert}}>
      {children}
    </AlertContext.Provider>
  )
}