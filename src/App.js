import React from "react";
import styled from 'styled-components';

import {Top, Content, Modal, Alert} from './components';
import {combine} from "./helpers/combileProviders";
import {
  ProductsProvider,
  FilterBoxProvider,
  AlertProvider,
  ModalProvider
} from './providers'

function App() {

  const AllProviders = combine([
    [AlertProvider],
    [FilterBoxProvider],
    [ModalProvider],
    [ProductsProvider],
  ]);

  return (
    <AllProviders>
      <Wrapper>
        <Alert/>
        <Top />
        <Content/>
      </Wrapper>
      <Modal />
      </AllProviders>
  );
}

const Wrapper = styled.div`
  padding-top: 40px;
`

export default App;
