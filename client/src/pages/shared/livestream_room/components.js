import styled from "styled-components";

export const LiveStreamRoomContainer = styled.div`
    display: grid;
    grid-template-columns: ${({displayBoard}) => displayBoard ? "70% 30%" : "100%" };
    height: 100vh;
    overflow: hidden;
    background: rgb(234,237,250);
    transition: all .3s ease-in-out;
`