import styled, {createGlobalStyle} from "styled-components";


export const GlobalStyles = createGlobalStyle`
    body {
        background: #EAEAEA;
    }
`
export const OrderContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70vh;
    background: #EAEAEA;
    overflow-y: auto;
    overflow-x: hidden;
    & > h1 {
        color: gray;
        margin: 10px;
    }
`

export const Order = styled.div`
    background: white;
    width: 80%;
    display: grid;
    grid-template-columns: 150px 100%;
    padding: 10px 20px;
    border-radius: 10px;
    margin: 10px;

    & > img {
        align-self:center;
        width: 100%;
        height: 190px;
        border-radius: 10px;
        object-fit: cover;
    }

`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
`

export const Row = styled.div`
    display: flex;
    padding-inline: 10px;
    margin: 5px;
    & > h1 {
        color: rgb(101, 104, 87);

        & > span {
        font-weight: normal;

            color: rgb(141, 124, 87);
        }
    }

    & > h3 {
        color: #181818;
        font-size:1em;
        font-weight: normal;
    }

    & > h4 {
        color: #181818;
        font-size:0.9em;
        font-weight: normal;
    }

    & > button {
        cursor: pointer;
        margin: 10px;
        color: white;
        padding: 10px 20px;
        border-radius: 10px;
        border: none;
    }
`

export const CancelButton = styled.button`
        background: red;
`
export const ViewButton = styled.button`
        background: green;
`