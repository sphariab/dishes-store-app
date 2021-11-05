import React from  'react'
import styled  from 'styled-components';

import {FilterBox, ProductsBox} from "../index";

const Content = () => {

  return (
    <>
      <Container>
        <Title>
          Welcome to our site
        </Title>
        <FilterBox/>
        <ProductsBox/>
      </Container>
    </>
  )
}

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`

const Title = styled.h1`
  font-weight: 500;
`



export default Content;
