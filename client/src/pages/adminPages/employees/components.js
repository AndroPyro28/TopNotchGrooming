import styled from "styled-components";

export const EmployeesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h1 {
        margin: 50px;
    }

    & > .month {
        gap:10px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        & > select {
            padding: 5px 8px;
            border-radius: 10px;
            outline: none;
        }

        & > button {
            padding: 5px 8px;
            border-radius: 10px;
            cursor: pointer;
        }
    }
`

export const EmployeeList = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
    min-height: 40vh;
    max-height: 50vh;
    overflow-y: auto;
    margin-bottom: 50px;
    gap: 20px;
`
export const Header = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-evenly;
`