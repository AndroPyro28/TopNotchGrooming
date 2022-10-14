import styled, { createGlobalStyle } from "styled-components";

export const TermsAndConditionContainer = styled.div`
    height: 70vh;
    width: 50vw;
    background: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width:800px) {
        width: 60vw;
    }

    @media screen and (max-width:550px) {
        width: 70vw;
    }

    @media screen and (max-width:400px) {
        width: 90vw;
    }
`;

export const GlobalStyles = createGlobalStyle`
body {
    background: url('/images/dogbg2.png');
    height:100vh;
    width:100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;


export const Head = styled.div`
    padding: 10px;
    width: 100%;
    text-align: center;
& > h1 {
        font-weight: 100;
        font-size: 1.5em;
    }
`

export const Body = styled.div`
    overflow: auto;
    padding: 0px 20px;
    text-align: start;
    overflow-x: hidden;
    & > h5 {
        margin: 10px 0px;
        font-size: 1em;
    }

    & > li {
        font-size: 0.9em;
        margin: 5px;
    }
`

export const Foot = styled.div`
    padding: 20px;
    
    & > button {
        padding: 5px 50px;
    }
`
