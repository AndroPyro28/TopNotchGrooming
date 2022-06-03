import styled from "styled-components";

export const UserInfo = styled.section`
display: flex;
    flex-direction: column;
    width: 100vw;
    background: white;
    padding: 40px 50px;
    overflow-x: hidden !important;

`

export const RowInfo = styled.div`
    display: flex;
    width: 60%;
    margin: 15px 90px;
    text-align: start;
    & > .info {
        display: flex;
        flex-direction: column;
        flex: 1;

        & > h3 {
            /* font-family: "Open Sans", sans-serif; */
            margin: 5px 0px;
        }

        & > span {
            font-size: 0.9em;
        }
    }
`