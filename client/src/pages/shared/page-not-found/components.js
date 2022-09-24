import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background:white;
    }
`
export const PageNotFoundContainer = styled.h1`
    box-shadow: 5px 10px 15px gray;
    color: black;
    font-size: 5em;
`