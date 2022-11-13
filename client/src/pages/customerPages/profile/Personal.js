import styled from "styled-components";

export const UserInfo = styled.section`
    display: flex;
    flex-direction: column;
    width: 100vw;
    background: white;
    padding: 40px 50px;
    overflow-x: hidden !important;

    @media (max-width:430px) {
        padding: 10px 10px;
    }
    & > .button-icons {
        width: fit-content;
        align-self: flex-start;
        & > i {
            margin: 10px;
            font-size: 1.5em;
            cursor: pointer;
        }
    }

`

export const RowInfo = styled.div`
    display: flex;
    width: 60%;
    margin: 15px 90px;
    text-align: start;

    @media (max-width:900px) {
    margin: 15px 0px;
    width: 100%;
    }
    & > .info {
        display: flex;
        flex-direction: column;
        flex: 1;
        
        @media (max-width:900px) {
            margin: 0 10px;
        }

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        & > input {
            padding:10px;
            border-radius: 10px;
            width: 70%;
            border: solid 1px gray;
            outline: none;
        }

        & > h3 {
            /* font-family: "Open Sans", sans-serif; */
            margin: 5px 0px;
        }

        & > span {
            font-size: 0.9em;
        }
    }
`