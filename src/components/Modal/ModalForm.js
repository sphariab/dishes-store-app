import React from 'react';
import styled  from 'styled-components';

import {useModal, useAlert, useProducts} from "../../providers/hooks";

import TYPopup from "./ThankYouPopup";
import ModalCart from "./ModalCart"

const ModalForm = () => {
  const {modalCart, modalForm, toggleModalForm, toggleTYPopup, TYpopup} = useModal();
  const {setAlert} = useAlert();
  const {clearCart} = useProducts();

  function validateForm(e){
    e.preventDefault();
    let name = document.userForm.name,
      email = document.userForm.email;

    if (name.value === "" || !name.value.replace(/\s/g, '').length) {
      setAlert({visible: true, text:"Please enter correct name!"});
    }

    if (email.value === "" || !email.value.replace(/\s/g, '').length ) {
      setAlert({visible: true, text: "Please provide correct Email!"});
    } else {
      toggleModalForm();
      clearCart();
      toggleTYPopup();
    }
  }

  return (
    <>
      {modalCart && <ModalCart/>}
      {modalForm && <Wrapper>
        <span onClick={toggleModalForm}>✕</span>
        <Form  action="" name='userForm'>
          <input type="text" placeholder="Name" name="name"/>
          <input type="text" placeholder="Email" name="email"/>
          <Button  onClick={validateForm}>Send</Button>
        </Form>
        </Wrapper>}
      {TYpopup && <TYPopup/>}
    </>
  )
}

const Wrapper = styled.div`
  padding: 1rem;
  background: lightgray;
  margin-bottom: 1rem;
  position: fixed;
  top: 100px;
  left: calc(50% - 300px);
  
  span{
    position: absolute;
    right: -16px;
    top: -20px;
    cursor: pointer;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  
  input{
    width: 400px;
    height: 30px;
    margin-bottom: 15px;
    border: 0;
    border-radius: 4px;
    padding: 5px;
  }
`

const Button = styled.button`    
    background: #ffa;
    color: #000;
    font-size: 16px;
    height: 56px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`



export default ModalForm;
