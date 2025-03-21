import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    width: 100%;
    height: 100vh;
`;


export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 7rem;
`;
