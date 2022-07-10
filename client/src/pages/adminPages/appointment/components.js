import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    background: rgb(235, 235, 235);
    font-family: "Open Sans", sans-serif !important;
}
`;

export const AdminListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: start;
  & > h1 {
    margin: 40px 50px 30px 50px;
  }
`;
export const ListNavigationButton = styled.div`
  margin: 0px 20px 50px 50px;

  & > a {
    padding: 10px 20px;
    font-size: 0.9em;
    color: rgb(75, 74, 74);
    transition: all 0.3s ease-in-out;
    border-bottom: solid 2px rgb(235, 235, 235);

    &:hover {
      border-bottom: solid 2px rgb(99, 98, 98);
    }
  }
`;

export const ShiftScheduleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > select {
    height: 40px;
    padding: 10px 20px;
    margin-top: 10px;
    margin-inline: 50px;
    border-radius: 15px;
    border: none;
    text-align: center;
    outline: none;
  }
  
`;

export const Shifts = styled.div`
    display: flex;

    & > div {
    padding: 10px 40px;
    border-radius: 20px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    color: gray;
    background: gray;
    color: white;
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
    &.active {
      background: white;
      color: gray;
    }
  }

`

export const TableData = styled.div`
  padding: 15px 40px 15px 40px;
  color: rgb(19, 18, 18);
  height: 30px;
  font-size: 0.9em;
  cursor: pointer;
  display: flex;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #f1f1f1;
  }

  &:nth-child(even) {
    background: #f1f1f1;
  }

  & > div {
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > *:last-child {
    flex: 0.5 !important;
    & > i {
      padding: 10px;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s ease-in;

      &:hover {
        background: gray;
        color: white;
      }
    }
  }
`;

export const TableHeader = styled.div`
  font-size: 1.1em;
  font-weight: 600;
  display: flex;
  color: rgb(3, 3, 3);
  padding: 55px 40px 25px 40px;
  background: white;

  & > .header {
    font-family: "Open Sans", sans-serif;
  }
  & > div {
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > *:last-child {
    flex: 0.5 !important;
    & > i {
      padding: 10px;
      border-radius: 50%;
      cursor: pointer;

      &:hover {
        background: gray;
        color: white;
      }
    }
  }
`;

export const T_Data = styled.div`
text-transform: capitalize;
  & > img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin: 10px;
    object-fit: cover;
  }

  & > span {
    padding: 5px 20px;
    border-radius: 8px;

    &.onGoing,
    &.complete,
    &.pending {
      color: white;
    }

    &.onGoing {
      background: rgb(255, 207, 67);
    }
    &.complete {
      background: rgb(52, 168, 83);
    }
    &.pending {
      background: rgb(187, 187, 187);
    }
  }
`;

export const T_Head = styled.div``;
export const AdminListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  height: 450px;
  margin-bottom: 50px;
  padding: 0px 0px;
  overflow: auto;
`;

export const Pagination = styled.div`
  margin: auto;
  margin-top: -50px;
  /* margin-bottom: 5px; */

  & > i {
    padding: 10px;
    background: white;
    margin: 10px;
    cursor: pointer;
  }
`;
