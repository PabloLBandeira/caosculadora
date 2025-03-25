import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 1.25rem; 
    border: 1px solid #CDCDCD;
    background-color: ${({ isEqual }) => isEqual ? '#FFA500' : '#F5F5F5'}; 
    color: ${({ isEqual, isOperator, isNumber }) =>
      isEqual ? '#F5F5F5' : 
      ([ 'clear', 'backspace', 'operator' ].includes(isNumber) || isOperator) ? '#FFA500' : '#525151'};
    font-size: 1.75rem;
    font-weight: 700;
    border: 0;
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    &:hover {
      opacity: .91;
    }
`;


