import styled from "styled-components";

export const ProfilePageContainer = styled.section`
    background: rgb(235,236,240);
    display: flex;
    flex-direction: column;
    width: 100vw;
    overflow-x: hidden !important;
`

export const ProfileAvatar = styled.div`
    display: flex;
    margin: 30px 50px;

    & > img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: solid 3px gray;
        object-fit:contain;    
    }

    & > span {
        font-size: 1.5em;
        margin: 10px;
        font-family: "Open Sans", sans-serif !important;
    }
`

export const ListNavigationButton = styled.div`
    margin: 0px 20px -105px 150px;
    text-align: start;

    & > a {
    text-align: start;

        padding: 10px 20px;
        font-size: 0.9em;
        color: rgb(75, 74, 74);
        transition: all .3s ease-in-out;
        border-bottom: solid 2px rgb(235, 235, 235);

        &:hover {
            border-bottom: solid 2px rgb(99, 98, 98);
        }
    }
`