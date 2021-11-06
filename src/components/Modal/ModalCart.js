import React from 'react';
import styled  from 'styled-components';

import {useProducts, useModal} from "../../providers/hooks";

const ModalCart = () => {
  const {toggleModalCart, toggleModalForm} = useModal();
  const {savedProducts, sum, qty} = useProducts();

  const buyItems = () => {
    toggleModalForm();
    toggleModalCart();
  }

  const list =
    <>{savedProducts.map(item => <li key={Date.now()}>{item.title}</li>)}
      <Bottom>
        <Summary> Сумма: {sum}</Summary>
        <button onClick={buyItems}>Купить</button>
      </Bottom>
    </>
  const noList = <p>No items here</p>

  return (
    <Wrapper>
      <span onClick={toggleModalCart}>✕</span>
      {savedProducts.length > 0 ? list : noList}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 1rem;
  background: lightgray;
  margin-bottom: 1rem;
  position: fixed;
  width: 400px;
  height: 200px;
  top: 100px;
  left: calc(50% - 300px);

  span{
    position: absolute;
    right: -16px;
    top: -20px;
    cursor: pointer;
  }
`
const Summary = styled.div``
const Bottom = styled.div`
  position: absolute;
  bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 40px);
`

export default ModalCart;
