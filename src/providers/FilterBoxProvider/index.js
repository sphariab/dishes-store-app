import React, {createContext, useContext, useState} from "react";

export const FilterBoxContext = createContext();

export const useFilter = () => {
  return useContext(FilterBoxContext)
}

export const FilterBoxProvider = ({children}) => {
  const [categoryFilter, setCategoryFilter] = useState('1');
  const [priceFilter, setPriceFilter] = useState(0);

  return (
    <FilterBoxContext.Provider value={{categoryFilter, priceFilter, setCategoryFilter, setPriceFilter}}>
      {children}
    </FilterBoxContext.Provider>
  )
}