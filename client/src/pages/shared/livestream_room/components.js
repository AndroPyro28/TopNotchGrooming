import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        overflow:hidden;
    }
`
export const LiveStreamRoomContainer = styled.div`
    display: grid;
    grid-template-columns: ${({displayBoard}) => displayBoard ? "70% 30%" : "100%" };
    height: 100vh;
    overflow: hidden;

    background: rgb(234,237,250);

    @media (max-width:1000px) {
        grid-template-columns:100%
    }
`