import styled from "styled-components";

export const StorePageContainer = styled.section`
    display:flex;
    flex-direction: column;
`

export const Banner = styled.section`
    width: 100%;
    height: 500px;
    background: url('/images/storePicEdited2.png');
    position: relative;

    
`

export const Content = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    width: fit-content;
    height: fit-content;
    margin: auto auto auto auto;
    font-size: 20px;
    color: white;
    text-align: center;
    text-shadow: 1px 3px 5px black;

        & > h1 {
            font-family:  'league spartan', sans-serif;
            text-transform: uppercase;
            opacity: 0.7;
        }
`

export const PetFilterWrapper = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin: 50px;
    box-shadow: 3px 0px 26px -10px rgba(0,0,0,0.75);
    -webkit-box-shadow: 3px 0px 26px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 3px 0px 26px -10px rgba(0,0,0,0.75);
    border-radius: 20px;
    /* width: ; */
    padding: 50px;

    & > h1 {
    margin-top: 60px;
    margin-bottom: 50px;
    
    color: rgb(141,124,87);
    font-size: 30px;
    font-family:  'league spartan', sans-serif;
    text-transform: uppercase;
    }
`

export const PetFilterContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`

export const PetContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    position: relative;
    width: 300px;
    height: 450px;
    overflow: hidden;
    cursor: pointer;
    transition: all .3s ease-in-out;

    box-shadow: ${({active}) => active ? "1px 3px 5px gray" : "none"} ;

    &:hover {
        box-shadow: 1px 3px 5px gray;
    }

    

    & > h3 {
        z-index: 2;
        color: rgb(141, 124, 87);
        margin: 10px;
    }

    & > img {
        width: 100%;
        height: 50%;
        z-index: 2;
        object-position: top;
        object-fit: cover;
    }

    & > p {
        color: gray;
        font-size: 100%;
        z-index: 2;
    }
`

export const CircleBackground = styled.div`
        border-radius: 50%;
        position: absolute;
        height: 200px;
        width: 200px;
        margin: auto;
        background: lightgoldenrodyellow;
`

export const ProductsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    margin-top: 80px;
    position: relative;

    & > h1 {
        
        color: rgb(141,124,87);
        font-size: 30px;
        font-family:  'league spartan', sans-serif;
        text-transform: uppercase; 
        margin-bottom:50px; 
    }

    & > .left, .right {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: fit-content;
        height: fit-content;
        padding: 15px 20px ;
        border-radius: 50%;
        background: rgb(216, 216, 216);
        cursor: pointer;
        transition: all .3s ease-in-out;
        z-index: 5;
    }

    & > .left {
    margin: auto auto auto 20px;
    }
    & > .right {
        margin: auto 20px auto auto;
    }

    & > :is(.left, .right):hover {
    background: black;
    color: white;
}
`

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-auto-rows: auto;
    grid-gap: 20px;
    position: relative;
    padding: 20px;

`
// produc item

export const ProductItem = styled.div`
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 30px;
    & > .add__to__cart {
        border-radius: 10px;
    border: solid 1px black;
    background: white;
    color: black;
    padding: 5px 10px;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover {
        background: gray;
        color: white;
    }

    &:active {
        transition: all .0s ease-in-out;

    background: black !important;
    }
    }
`
export const ProductItemImg = styled.img`
    width: 60%;
    height: 60%;
    object-fit: contain;
    object-position: center;
    border-radius: 20px;
`

export const ProductItemName = styled.h3`
    font-size: 15px;
    color: rgb(54, 54, 54);
    margin: 5px;
    text-transform: capitalize;
`

export const ProductItemPrice = styled.h4`
    font-size: 15px;
    color: rgb(94, 94, 94);
    margin: 5px;
`

export const ProductItemDescription = styled.p`
    color: gray;
    font-size: 0.9em;
`