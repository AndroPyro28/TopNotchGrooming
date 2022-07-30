import styled from "styled-components";

export const PurchasedItemContainer = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
`;

export const DeliveryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  color: rgb(142,126,88);
  width: 90%;
  margin: 0px 20px;
  font-style: italic;
  font-size: 0.8em;
  & > h1 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  color: #181818;
  word-spacing: 10px;

  @keyframes animateStatus {
    0% {
      opacity: 0.2;
    }

    100% {
      opacity: 1;
    }
  }

  & > .track {
    font-size: 10em;
    color: gray;
    margin: 30px 20px;
    animation: animateStatus infinite 700ms alternate ease-out;
  }
  & > small {
    font-size: 1em;
    color: gray;
    margin: 5px;
    font-style:italic;
  }

  & > h4 {
    color: gray;
    font-style: italic;

  }

  & > p {
    font-style: italic;
    font-weight: 600;
    font-size: 0.9em;
    color: gray;
    margin-top: 20px;
  }
`;

export const ItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #EAEAEA;


  & > h1 {
    color: rgb(142,126,88);
    margin: 20px;
    font-size: 1.5em;
    font-style: italic;
  }
`;

// list

export const OrderedItemContainer = styled.div`
  text-align: start;
  display: flex;
  max-height: 200px;
  margin:10px 0px;
  width: 90%;
  align-self:center ;
  border-radius: 10px;
  padding: 10px;
  background: white;
  color: gray;
  font-style: italic;

  & > div {
    flex: 1;
    font-size: 1em;
    display: flex;
    margin: 10px;
  }
`;

export const Img = styled.img`
  width: 100px;
  object-fit: cover;
  flex: 0.6;
`;

export const ProductName = styled.div`
  font-weight: bold;
  justify-content: center;
`;
export const ProductDescription = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.9em !important;
`;
export const ProductPrice = styled.div`
  justify-content: center;
  font-weight: 500;
`;
export const ProductQuantity = styled.div`
  justify-content: center;
  font-weight: 500;
`;
