import styled from "styled-components";

export const AdminInventoryWrapper = styled.section`
    display: flex;
    height: 100vh;
    padding:10px;
`
export const InventoryProductSaleChart = styled.div`
    display: flex;
    flex-direction: column;  

    & > :is(h1, small) {
        margin: 5px 0;
    }

    & > h1 {
    font-weight: 500;
    }

    & > small { 
    color: gray;
    }
`
export const SearchItemContainer = styled.div`
     padding: 5px 10px;
    display: flex;
    align-items: center;
    border: solid 1px gray;
    border-radius: 10px;
    margin: 10px 0;
    background: white;

    & > i {
        font-size: 1.1;
        padding: 5px;
    }

    & > input {
        padding: 5px 10px;
    width: 90%;
    border: none;
    outline: none;
    background: none;
    }
`
export const ProductStatisticContainer = styled.div`
    padding: 10px;
    background: white;
    border-radius: 10px;


    & > .product__info {
        display: flex;
    justify-content: space-between;

    & > .product__label {
    font-size: .7em;

    }
    }
`

export const ProductStatistic = styled.div`
    width:100% ;
    height: 500px;
`