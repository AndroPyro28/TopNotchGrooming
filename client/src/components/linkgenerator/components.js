import styled from "styled-components";

export const LinkInput = styled.div`
    width: 90%;
    border: solid 1px gray;
    border-radius: 10px;
    align-self:center;
    display: grid;
    grid-template-columns: 90% 10%;
    padding-inline: 10px;

    & > input {
        width: 90%;
        padding: 10px 0;
        outline: none;
        background: transparent;
        border: none;
        color: rgb(5, 32, 59);
    }

    & > .copyClip {
        cursor: pointer;
        padding: 10px;
        font-size: 1.3em;
        color: rgb(3, 18, 34);

        &:hover {
            color: gray;
        }
        &:active {
            cursor: default;
        }
    }
`
export const LinkGeneratorContainer = styled.div`
display: flex;
flex-direction: column;

& > label {
    text-align: start;
    margin: 10px 30px;
    font-weight: 600;
    color: rgb(5, 32, 59);
}
`

export const Notify = styled.div`
    text-align:end;
    margin:5px 35px;
    color:rgb(5, 32, 59);
    font-weight: 600;
`   