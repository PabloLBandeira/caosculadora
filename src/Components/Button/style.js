import styled from 'styled-components';

export const ButtonContainer = styled.button `
    width: 5rem;
    padding: 1.25rem; 
    border: 1px solid #CDCDCD;
    background-color:rgb(119, 125, 128);
    color: #FFFFFF;
    font-size: 1.75rem;
    font-weight: 700;
    boder: 0;
    border-radius: 1rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &:hover {
      opacity: .91;
  }
`