import styled from "styled-components";

export const SalesInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 90%;
  height: 100%;
  align-items: center;
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: solid 1px #eaeaea;
  margin: 5px;
  background: white;
  flex: 1;
  background: white;
  color: #a6b7f1;
  font-weight: 500;

  & > i {
    padding: 10px;
    background: #f1f5fb;
    border-radius: 5px;
    width: fit-content;
    margin: 5px;
    font-size: 1.5em;
  }

  & > span {
    color: rgb(25, 19, 2);
    margin: 5;
    text-transform: capitalize;
    font-size: 1.5em;
    @media (max-width: 500px) {
      font-size: 1em;
    }
  }

  & > p {
    color: black;
    margin: 5px;
    font-size: 1em;
    @media (max-width: 500px) {
      font-size: 0.8em;
    }
    /* font-style: italic; */
  }
`;

export const SalesDataContainer = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-columns: 20% 80%;
  margin: 20px 20px;
  /* height: 550px; */
  position: relative;
  border-radius: 20px;
  @media (max-width:800px) {
    grid-template-columns: 100%;
    width: 95%;
  }
`;

export const DataContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  padding: 10px;

  @media (max-width:800px) {
  }
`;

export const DataContainer2 = styled.div`
  width: 96.5%;
  height: 100%;
  padding: 10px;
  background: white;
  display: flex;
  align-items: center;
  padding: 10px;
  color: white;
  max-height: 550px;
  & > canvas {
    object-fit: cover;
    margin-bottom: 50px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  margin: 25px;
  width: 100%;
  justify-content: flex-end;
  flex: 1;
  align-items: center;

@media (max-width:800px) {
  justify-content: center;
}
@media (max-width:600px) {
      font-size: 0.8em;
    }

  & > input[type="datetime-local"] {
    padding: 10px 20px;
    border-radius: 10px;
    margin-inline: 20px;
    border: solid 1px lightgray;
    outline: none;
    cursor: pointer;

    @media (max-width:700px) {
      padding: 5px;
      margin: 5;
      font-size: 0.9em;
    }

  }
`;

export const SaleOrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 40px;
  width: 98%;
  background: white;
  border-radius: 10px;
`;

export const TableRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &.header {
    padding: 10px;
    margin: 20px;
    color: rgb(24, 41, 62);
    font-weight: 500;
  }

  &.data {
    margin: 5px;
    padding: 15px;
    color: dimgray;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
      background: #eaeaea;
    }

    .status {
      width: fit-content;
      padding: 0px 1px;
      border-radius: 5px;
    }

    .status__complete {
      background: rgb(235, 249, 244);
      color: rgb(159, 220, 198);
    }

    .status__pending {
      background: rgb(255, 247, 230);
      color: rgb(255, 205, 98);
    }

    .status__onGoing {
      background: rgb(242, 244, 248);
      color: rgb(64, 101, 149);
    }

    .status__cancelled {
      color: rgb(229, 111, 139);
      background: rgb(253, 244, 246);
    }
  }
`;
export const DataList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 350px;
  overflow: auto;

  & > h1 {
    margin: 20px;
    color: rgb(166,183,241);
    font-size: 1.5em;

    @media (max-width:700px) {
      font-size: 1em;
    }
  }
`;
export const Col = styled.div`
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-transform: capitalize;
  position: relative;
  max-height: 100px;
 
`;