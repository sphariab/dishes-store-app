import React, {createContext, useContext, useState} from "react";

export const ProductsContext = createContext();

export const useProducts = () => {
  return useContext(ProductsContext)
}

export const ProductsProvider = ({children}) => {
  const [qty, setQty] = useState(0);
  const [sum, setSum] = useState(0);
  const handleSetQty = (currentQty) => {
    setQty(qty + currentQty);
  }
  const handleSetSum = (currentCurrentSum) => {
    setSum(sum + currentCurrentSum)
  }
  const clearCart = () => {
    setQty(0);
    setSum(0);
  }

  return (
    <ProductsContext.Provider value={{qty, sum, handleSetSum, handleSetQty, clearCart}}>
      {children}
    </ProductsContext.Provider>
  )

}

export default ProductsProvider