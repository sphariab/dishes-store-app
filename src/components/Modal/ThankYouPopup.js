import React from 'react'
import styled  from 'styled-components';

import {useModal} from "../../providers/hooks";

const TYPopup = () => {
const {toggleTYPopup} = useModal();

  return (
    <>
      <WrapperTY>
        <span onClick={toggleTYPopup}>✕</span>
        Thank you!
      </WrapperTY>
    </>
  )
}

const WrapperTY = styled.div`
  padding: 1rem;
  background: lightgray;
  margin-bottom: 1rem;
  position: fixed;
  left: calc(50% - 300px);
  width: 400px;
  height: 200px;
  top: 100px;
  font-size: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  span{
    position: absolute;
    top: -20px;
    right: -20px;
    cursor: pointer;
  }
`

export default TYPopup;
