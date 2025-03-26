import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color:#d4d4d4;
  width: 100%;
  height: 100%;
  

  @media (min-width: 768px) {
  display: flex;
  flex-direction: column;
  width: 80%;
  height:auto;
  margin: 0 auto;
  }

  @media (min-width: 1024px) {
    width: 50%;
    max-width: 900px;
  }
  @media (max-height: 640px ) {
    transform: scale(0.8);
  }
`;

export const Display = styled.div `
  width: 100%;
  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;
  padding: .5rem;
  
`;
  
  export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
`;
    
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 6rem;    
  `;

