import React from  'react'
import styled  from 'styled-components';

import {useProducts} from '../../providers/ProductsProvider';
import {useModal} from "../../providers/ModalProvider";

const Top = () => {
  const {qty, sum} = useProducts();
  const {toggleModalForm} = useModal();

  return (
    <TopCard>
      <Container>
        <TopCardInfoContainer>
          <TopCardInfoItem>
            Товаров в корзине -
            <RedInfo> {qty}
            </RedInfo> на сумму:
            <RedInfo>{sum}</RedInfo>
          </TopCardInfoItem>
          <Button onClick={() => toggleModalForm()}>Оформить заказ</Button>
        </TopCardInfoContainer>
      </Container>
    </TopCard>
  )
}

const TopCard = styled.div`
    padding: 0.5rem 0;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: lightgray;
`

const TopCardInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

`

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`

const TopCardInfoItem = styled.span`
`

const RedInfo = styled.span`
  color: darkred;
`

const Button = styled.div`
  padding: 5px 12px;
  background: darkorange;
  color: white;
  text-transform: uppercase;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
;`

export default Top;
