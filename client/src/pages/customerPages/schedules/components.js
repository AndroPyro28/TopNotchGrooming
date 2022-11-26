import styled from "styled-components";

export const SchedulesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h1 {
        margin: 50px;
    }
`

export const ScheduleList = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 5px;
    align-items: center;
`

export const ScheduleContainer = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    border-radius: 5px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    &:nth-child(even) {
        background: #EAEAEA;
    }

    &:hover {
        background: #EAEAEA;
    }
    & > td {
        flex: 1;
        text-transform: capitalize;
        & > img {
            width: 50px;
            height: 50px;
            min-width: 50px;
            max-width: 50px;
            min-height: 50px;
            max-height: 50px;
            object-fit: cover;
            border-radius: 50%;
        }
    }

`