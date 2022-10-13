import styled from "styled-components";

export const FooterContainer = styled.div`
    /* background: rgb(246,194,12); */

    background: ${({pathname}) => pathname.includes('admin') ? `rgb(8,81,114)` : `rgb(246,194,12)`};
    align-items: center;
    display: flex;
    padding-block: 30px;
    justify-content: space-between;
    margin-top:${({giveMarginTop}) => giveMarginTop ? '200px' : '0px'};
    min-height:300px;
    background: rgb(54,61,71);
    & > img {
        width: 100px;
        object-fit: cover;
    }

    @media screen and (max-width:850px) {
        flex-direction:column;
    }
`

export const Links = styled.div`
    display: flex;
    /* justify-content: space-evenly; */
    flex-direction: column;
    align-self: flex-start;
    justify-content: space-evenly;
    min-height: 300px;
    text-align: start;

    & > a {
        font-size: 1.1em;
        color: ${({pathname}) => pathname.includes('admin') ? `white` : `black`};
        color:white;
        margin: 10px 80px;

    }

    @media screen and (max-width:950px) {
        font-size: 1em;
    }

    @media screen and (max-width:850px) {
        font-size: 0.8em;
        flex-direction:column;
        align-self: center;
        text-align: center;
    }
`

export const Socials = styled.div`
    display: flex;
    /* justify-content: center; */
    /* background: black; */
    text-align: start;
    justify-content: space-evenly;
    & > a {
        color: ${({pathname}) => pathname.includes('admin') ? `white` : `black`};
        font-size: 2em;
        color:white;
    }

    @media screen and (max-width:850px) {
        font-size: 1em;

        & > a {
        margin: 20px 20px;
        }
    }
`

export const Socials2 = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    margin: 10px 50px;
    color: white;
    /* text-transform: capitalize; */
    & > span {
        text-align: start;
        font-weight: 400 !important;
        margin: 10px;

        & > i {
            color: gray;
            font-size: 1.5em;
        }
    }

    @media screen and (max-width:850px) {
        margin: 10px 0px;
        align-self: center;

        & > span {
            font-size: 0.9em;
            margin: 10px 0px;
        }

        & > i {
            color: gray;
            font-size: 1em;
        }
    }
`