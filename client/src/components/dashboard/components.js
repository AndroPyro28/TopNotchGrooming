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
`
export const MonthlySalesChartsContainer = styled.div`
    height: 300px;
    display: flex;
    padding: 10px;
    padding: 50px;
    border-radius: 10px;
    justify-content: center;
    background: white;
    display: block;
    position: relative;

    & > h1 {
        text-align: start;
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
export const NewClients = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    background:white;
    justify-content: space-between;
    border-radius: 10px;

    & > h1 {
        font-size: 1.5em;
    }


    & > h2 {
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

    &.customer {
        justify-content: flex-start;
    }
    & > img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        border-radius: 50%;
        object-fit: cover;
    }
`