import React from  'react'
import styled  from 'styled-components';
import {useFilter} from "../../providers/hooks";

const FilterBox = () => {
  const {priceFilter, categoryFilter, setPriceFilter, setCategoryFilter } = useFilter();

  const onChange = (e) => {
    const {id, value} = e.target;
    id === 'category' ? setCategoryFilter(value) : setPriceFilter(Number(value));
  }

  return (
    <Wrapper>
      <SelectBox>
        <FilterLabel>Категория</FilterLabel>
        <SelectControl id="category" value={categoryFilter} onChange={(e) => onChange(e)}>
          <option value="0">Все</option>
          <option value="1">Завтраки</option>
          <option value="2">Первые блюда</option>
          <option value="3">Гарниры</option>
        </SelectControl>
      </SelectBox>
      <PriceSelectBox>
        <FilterLabel>Цена</FilterLabel>
        <SelectControl id="price" value={priceFilter} onChange={(e) => onChange(e)}>
          <option value="0">Все</option>
          <option value="30">До 30 грн</option>
          <option value="50">До 50 грн</option>
          <option value="100">До 100 грн</option>
          <option value="150">До 150 грн</option>
        </SelectControl>
      </PriceSelectBox>
    </Wrapper>

)
}

const Wrapper = styled.div`
  padding: 1rem;
  background: lightgray;
  margin-bottom: 1rem;
  display: flex;
`

const FilterLabel = styled.label`
  margin-right: 1rem
;`

const SelectControl = styled.select`    
  background: none;
  border: 1px solid navy;
  margin-right: 2rem
;`
const SelectBox = styled.div``
const PriceSelectBox = styled.div``


export default FilterBox;
