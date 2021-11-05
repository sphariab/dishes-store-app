import React from  'react'
import styled  from 'styled-components';
import {useAlert} from "../../providers/AlertProvider/index";

const Alert = () => {
  const {alert, setAlert} = useAlert();

  if (!alert.visible) return null

  return (
    <Wrapper>
      {alert.text}
      <span onClick={() => setAlert({visible: false, text:''})}>✕</span>
    </Wrapper>

  )
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  padding: 20px;
  width: calc(100% - 50px);
  background: #d9534f;
  color: #fff;
  opacity: 0.8;
  margin: 5px;
  border-radius: 10px;
  
span{
  position: absolute;
  right: 20px;
  top: 18px;
  cursor: pointer;
}
`

export default Alert;
