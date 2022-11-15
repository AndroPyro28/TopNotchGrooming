import styled from 'styled-components';

export const CancelOrderBackdrop = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.148);
    z-index: 10;
`

export const CancelForm = styled.div`
    /* height: 90vh; */
    height: fit-content;
    border-radius: 10px;
    width: 45vw;
    padding-inline: 35px;
    position: absolute;
    background: white;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    & > .closeBtn {
        position: absolute;
        top: 20px;
        right:20px;
        font-size: 1.5em;
        cursor: pointer;
    }
    & > h1 {
        margin: 20px;
        font-size: 1.5em;
    }

     & > textarea {
        height: 80px;
        width:95%;
        border-radius: 10px;
        border: solid 1px gray;
        margin: 20px auto;
        padding: 5px;
        outline: none;

     }

      & > button {
        border-radius: 10px;
        width: 100%;
        border: none ;
        padding: 10px 0px;
        background: rgb(255,231,147);
        margin: 30px auto;
        cursor: pointer;
        &:hover {
            background: black;
            color: white;
        }
      }
`

export const ChoiceContainer = styled.div`
    display: flex;
    margin-top: 50px;
    align-items: center;
`
export const ChoiceList = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 20px;
`

export const Choice = styled.div`
    display: flex;
    gap: 5px;
    font-size: 0.9em;
`
