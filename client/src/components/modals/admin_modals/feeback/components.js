import styled from "styled-components";

export const FeedbackContainer = styled.div`
    position: absolute;
    background: white;
    width: 80vw;
    height: 80vh;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 20px 20px;

    & > i {
        margin: 0px 20px 20px 20px;
        font-size: 1.5em;
        /* color: rgb(166,183,241); */
        color: black;
        cursor: pointer;
    }
`

export const FeedbackListContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;

    & >h1 {
        color: gray;
        margin: 20px;
    }
`

export const FeedbackDataContainer = styled.div`
    width: 98%;
    display: grid;
    grid-template-columns: 90% 10% ;
    max-height: ${({view}) => view ? '100%' : '150px'};// toggle this on
    min-height:${({view}) => view ? '70%' : '150px'}; // toggle this off
    overflow: hidden;
    border-radius: 10px;
    transition: all .3s ease-in-out;
    margin: 10px;
    &:hover {
        box-shadow: 1px 3px 5px gray;
    }
`

export const ProfileUser = styled.div`
    width: 100%;
    display: flex;
    

    & > span {
        width: 50%;
    }
`

export const Rate = styled.div`
    display: flex;
    margin: 5px;
    align-items: center;

    & > i {
        color: rgb(248,173,62);
        margin: 5px;
    }
    & > span {
        color: gray;
        font-size: 0.8em;
        margin-right:5px;
    }
`

export const Comments = styled.div`
    width: 100%;
    margin: 10px 20px;
    text-overflow: ellipsis;
    white-space: pre-wrap;
    overflow: hidden;
    display: flex;
    padding: 10px;
    & > img {
        width: 50px;
        height: 50px;
        float: left;
        border-radius: 50%;
    }

    & > p {
        font-size: 0.9em;
        color: gray;
        text-align: start;
        margin: 0px 20px;
    }
    &:hover {
        cursor: zoom-in;
    }
`

export const Actions = styled.div`
    display: flex;
    justify-content: space-evenly;

    & > i {
        margin: 20px 5px;
        font-size: 1.3em;
        height: fit-content;
        padding: 8px 10px;
        border-radius: 50%;
        transition: all .2s ease-in-out;
        cursor: pointer !important;;
        &:hover {
            background: #EAEAEA;
        }
        &.pin {
            rotate: 40deg;
            color: ${({isPinned}) => isPinned ? "rgb(248,173,62)" : "rgb(166,183,241)"};
        }
        &.delete {
            color: maroon;
        }
    }
    
`