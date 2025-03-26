import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #000;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

     @media (min-width: 1024px) {
        display: flex;
        flex-direction: column;
    }

`