import styled from "styled-components"


// welcome component
export const WelcomeContainer = styled.div`
    text-align: start;
    padding: 10px 20px;
    background: white;
    border-radius: 10px;
    
    & > h1 {
        font-weight: 700;
    }

    & > small {
        color: gray;
        font-weight: 500;
    }
`


// dashboard charts component

export const DashboardChartsContainer = styled.section`
    display: grid;
    grid-template-columns: 75% 25%;
    margin: 10px 0;
    grid-column-gap: 10px;

    @media (max-width:1000px) {
        grid-template-columns: 100%;
    }
`
export const MonthlySalesChartsContainer = styled.div`
    height: 300px;
    display: flex;
    padding: 10px 30px 50px 30px;
    border-radius: 10px;
    justify-content: center;
    display: block;
    position: relative;
    z-index: 1;
    background: white;
    & > canvas {
        align-self: center;

        @media (max-width:500px) {
            margin-top: -20px;
        }
    }

    @media (max-width:500px) {
           width: 100%;
           padding: 0;
        }

    & > h1 {
        text-align: start;
        margin: 10px 10px 0px 10px;
        @media (max-width:500px) {
            font-size: 1.2em;
        }
    }

    & > span {
        position: absolute;
        width: fit-content;
        height: fit-content;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

`
export const FeedbackList = styled.div`
    padding: 50px 10px 20px 10px;
    display: flex;
    flex-direction: column;
    background:white;
    border-radius: 10px;
    max-height: 460px;
    height: 460px;
    overflow: auto;
    position: relative;
    @media (max-width:1000px) {
        display: none;
    }
    & > h1 {
        font-size: 1.5em;
        position: absolute;
        top: 20px;
        left: 0;
        right: 0;
    }


    & > h2 {
        margin: 50px;
        color: gray;
        font-size: 1em;
        & > span {
        font-size: 3em;
        font-weight: 1000;
        padding: 20px ;
        border-radius: 50%;
    }
    } 

    & > p {
        color: black;
        font-weight: 500;
    }

`

export const DataInformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    width: fit-content;
    align-items: center;
    padding: 10px 5px;
    border-radius: 10px;
    margin: 10px 10px;
    height: fit-content;
    /* flex: 1.3; */
    flex: 1;
    background: white;
    color: #a6b7f1;
    font-weight: 500;

    
    & > i {
        padding: 10px;
        background: #F1F5FB;
        border-radius: 5px;
        width: fit-content;
        margin: 5px;
        font-size: 1.5em;
    }

    & > span {
        color: rgb(25,19,2);
        margin: 5;
        text-transform: capitalize;
        font-size: 1.5em;
        @media (max-width:500px) {
            font-size: 1em;
        }
    }

    & > p {
        color: black;
        margin: 5px;
        font-size: 1em;
        @media (max-width:500px) {
            font-size: 0.8em;
        }
        /* font-style: italic; */
    }
`

export const SalesAndProductsData = styled.div`
    display: flex;
    flex-direction: column;
    /* background: white; */

`
export const DataContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;
border-radius: 10px;

@media (max-width:700px) {
    & > div:nth-child(3) {
        display: none;
    }
}
`
export const AppointmentListContainer = styled.div`
background: white;
    & > h1 {
        text-align: start;
        margin: 20px;
        font-size: 1.5em;
    }
`

export const TableHeader = styled.div`
    display: flex;
    margin-block: 30px 20px;
    font-weight: 600;
    color: black;
    border-bottom: solid 3px #EAEAEA;
    padding: 20px;
    
`

export const T_Head = styled.div`
    flex: 1;

    @media (max-width:700px) {
    &.appointment__type,
    &.date,
    &.pet__name {
       display: none;
    }

    &.time {
        flex: 0.7;
    }
 }
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`


export const TableData = styled.div`
    display: flex;
    color: dimgray;
    padding: 20px;
    font-weight: 600;
    margin:10px ;
    border-radius: 20px;
    cursor: pointer;
    transition: all .2s ease;
    &:hover {
        background: rgb(234,234,234);
        color: black;
    }
`
export const T_Data = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    @media (max-width:700px) {
    &.appointment__type,
    &.date,
    &.pet__name {
       display: none;
       font-size: 0.8em;
    }

    &.time {
        flex: 0.7;
    }
 }

    &.customer {
        justify-content: flex-start;
    }
    
    & > img {
        /* min-width: 50px; */
        /* max-height: 50px; */
        height: 50px;
        width: 50px;
        margin-right: 10px;
        border-radius: 50%;
        object-fit: cover;

        @media (max-width:650px) {
        min-width: 40px;
        height: 40px;
        }
    }
`

export const FeedbackdataContainer = styled.div`
    display: flex;
    min-height: 100px;
    max-height: 100px;
    overflow: hidden;
    margin: 10px;
    & > img {
        max-width: 50px !important;
        max-height: 50px !important;
        border-radius: 50%;
        object-fit: cover;
        object-position: 50% 50%;
        flex: 0.8;
        margin: 10px;
    }

    & > div {
        display: flex;
        flex-direction: column;
        flex: 1;
        text-align: start;

        & > span {
            font-size: 1em;
            margin: 10px;
        }
        & > p {
            font-size: 0.7em;
            color: gray;
        }
        
    }
`