import styled from "styled-components";

export const FooterContainer = styled.div`
    /* background: rgb(246,194,12); */

    background: ${({pathname}) => pathname.includes('admin') ? `rgb(8,81,114)` : `rgb(246,194,12)`};
    align-items: center;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-block: 30px;
    margin-top:${({giveMarginTop}) => giveMarginTop ? '200px' : '0px'};
    min-height:300px;
    & > img {
        width: 100px;
        object-fit: cover;
    }
`

export const Links = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    & > a {
        font-size: 1.3em;
        color: ${({pathname}) => pathname.includes('admin') ? `white` : `black`};
    }

    @media screen and (max-width:950px) {
        font-size: 1em;
    }

    @media screen and (max-width:850px) {
        font-size: 0.8em;
        flex-direction:column;
    }
`

export const Socials = styled.div`
    display: flex;
    justify-content: center;

    & > a {
        margin: 20px 50px;
        color: ${({pathname}) => pathname.includes('admin') ? `white` : `black`};
        font-size: 2em;


    }

    @media screen and (max-width:850px) {
        font-size: 1em;

        & > a {
        margin: 20px 20px;
        }
    }
`