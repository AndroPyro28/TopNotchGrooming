import styled from "styled-components";

export const AboutPageContainer = styled.section`
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
`

export const AboutBannerContainer = styled.div`
    width: 100%;
    height: 400px;
    padding-top: 100px;
    background: rgb(255,242,223);
    background: url("/images/carouselbg.png");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;

    & > .first__banner__content {
    align-self: center;
    transform: translateY(-50px);

    & > h1 {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    & > h1 > span:nth-child(1) {
        font-family: 'League Spartan', sans-serif;
    text-transform: uppercase;
    font-size: 0.9em;
    }

    & > h1 > span:nth-child(2) {
        color: rgb(210,149,129);
    font-size: 3em;
    font-family: 'Raleway', sans-serif;
    }
}
`

export const DogImage = styled.img`
    margin-top: 50px;
    width: 50%;
    height: 700px;

    @media (max-width:520px) {
        display: none;
    }
`

export const Mission_Vission = styled.div`
    width: 48%;
    margin-top: 40px;
    transform: translateX(100%);

    font-family: 'League Spartan', sans-serif;

    @media (max-width:520px) {

        & {
            transform: translateX(0);
            margin-inline: auto;
            width: 80%;
        }
        
    }
    & > .mission {
        margin-bottom: 50px;
        margin-top: 10px;
    }

    & > .mission h2, .vision h2 {
    text-transform: uppercase;
    font-family: 'League Spartan', sans-serif !important;
    font-size: 1em;
    }

    & > .mission p, .vision p  {
        margin: 10px;
        font-size: 0.9em;
    }

    & > .vision {
    margin-bottom: 50px;
    margin-top: 10px;
}
`

export const BestSellerSection = styled.section`
    margin-top: 100px;
    height: 300px;
    width: 95%;
    display: flex;
    padding: 20px;



    & div {
        flex: 1;
    }

    & > .deal__of__the__week {
    background: url('/images/bestSeller.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;

        & > .content {
            font-size: 20px;

            & > h1 {
                font-family: 'League spartan', sans-serif !important;
                margin: 20px;
            }

            & > button {
                padding: 10px 20px;
                font-size: 15px;
                border-radius: 20px;
                border: none;
                cursor: pointer;
            }
        }
    }

    & > .best__products {
        background: url("/images/bestCollection.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
    }

    @media (max-width:950px) {
        & {
            flex-direction: column;
            height: 1000px;
            width: 100%;
            padding: 0px;

        }
    }

    @media (max-width:650px) {
        & {
            height: 500px;
        }
    }
`