import styled from "styled-components";

export const ModalLoader = styled.div`
    position: fixed;
    background: ${({bg}) => bg};
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index:10;
    & > .loader {
        width: 10px;
        height: 10px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        position: absolute;
        border-radius: 50%;
        background: #fff;
    }
`