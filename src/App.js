import React from 'react';
import ContentComponent from './Components/Content';
import { Container } from './style';
import GlobalStyle from './global';


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ContentComponent />
      </Container>
    </>
  );
};

export default App;


