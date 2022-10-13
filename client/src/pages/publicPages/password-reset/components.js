import styled, { createGlobalStyle } from "styled-components"


export const GlobalStyles = createGlobalStyle`
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background: url('/images/dogbg2.png');
        background-size:cover;
        background-position: center;
    }
`
export const FindYourAccountContainer = styled.div`
    height: 85vh;
    width: 35vw;
    display: flex;
    flex-direction: column;
    background: white;
    align-items: center;
    border-radius: 10px;
    position: relative;

    @media screen and (max-width:900px) {
        width: 50vw;
    }

    @media screen and (max-width:680px) {
        width: 70vw;
    }

    @media screen and (max-width:550px) {
        width: 80vw;
    }

    @media screen and (max-width:400px) {
        width: 100vw;
    }

    & img {
        width: 100px;
        object-fit: cover;
        margin: 10px;
    }

    & i {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 1.5em;
        cursor: pointer;
    }
    & h1 {
        font-weight: 500;
        font-size: 2em;
        margin: 10px;
    }

    & p {
        font-size: 0.9em;
        margin: 10px;
    }

    & button {
        padding: 5px 15px;

    }
`

export const Field = styled.div`
    display: flex;
    & input {
        padding: 5px 15px;
        outline: none;
    }
    & button {
        padding: 5px 15px;
    }
`
export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin: 20px 0px;
    & input {
        padding: 5px 15px;
        outline: none;
    }
`

export const Message = styled.div`
    color: black;
    font-size: 0.8em;
    max-width: 100%;
`