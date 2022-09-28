import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyles =  createGlobalStyle`
    body {
        background: rgb(240,248,255);
        height: 100vh;
    }
`
export const SaleContainerPage = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    height: 100%;
`

export const Title = styled.h2`
    font-size: 1.5em;
    color: rgb(166,183,241);
    flex: 1;
    text-align: start;
    padding-inline: 20px;
`
export const FilterDataContainer = styled.div`
    width: 97%;
    margin: -0px 20px 20px 20px;
    border-radius: 10px;
    background: white;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width:800px) {
    flex-direction: column-reverse;
    }
`