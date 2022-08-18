import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-columns: 65% 35%;

    @media (max-width:930px) {
        grid-template-columns: 100%;
        
    }
`




