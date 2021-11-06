import React, {useState} from 'react'
import styled  from 'styled-components';

import {useProducts} from "../../providers/hooks";

const ProductItem = ({item}) => {
  const {title, imageUrl, price} = item;
  const {handleSetQty, handleSetSum, updateList} = useProducts();
  const [currentQty, setCurrentQty] = useState('');

  const onChange = (e) => {
    setCurrentQty(Number(e.target.value))
  }

  const addToCart = (item) => {
    if(currentQty){
      handleSetSum(currentQty*price);
      handleSetQty(currentQty);
      updateList(item);
      clear()
    }
  }
  const clear = () => {
    setCurrentQty('')
  }

  return (
    <Wrapper>
     <Title>
       {title}
     </Title>
      <Image><img src={imageUrl} alt=""/></Image>
      <Meta>
       <p>{price}</p>грн.
        <Qty>
          <input min="0" type="number" value={currentQty} onChange={(e)=> onChange(e)}/>
          Кол.
        </Qty>
        <Button onClick={() => addToCart(item)}>Добавить</Button>
      </Meta>
    </Wrapper>

  )
}

const Wrapper = styled.div`display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    border: 1px dotted #ff3adc;
    padding: 8px;
`

const Title = styled.h3`    
  text-align: center;
  margin-bottom: 1rem;
;`

const Image = styled.div`
  margin-top: auto;
  margin-bottom: 20px;
  
  img{
    max-width: 100%;
    width: 100%;
    height: auto;
  }
`
const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Qty = styled.div`
  input{
    width: 50px;
    padding: 3px;
  }
`

const Button = styled.div`
  border: 0;
  padding: 4px 8px;
  background-color: #1674d1;
  border-color: #1674d1;
  color: #fff;
  transition: transform 0.3s ease;
  will-change: transform;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;

  &:hover {
    background-color: #1261ae;
    border-color: #115aa3;
  }
`

export default ProductItem;
