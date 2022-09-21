import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    background: rgb(235, 235, 235);
    /* background: #EAEAEA; */
    font-family: "Open Sans", sans-serif !important;
}
`;

export const AdminListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: start;
  & > h1 {
    margin: 50px 60px 50px 60px;
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
    
    @media (max-width:800px) {
      padding: 10px 0px;
      font-size: 0.7em;
      margin-inline: 0px;

    }
  }
  
`;

export const Shifts = styled.div`
    display: flex;

    @media (max-width:520px) {
      flex-wrap: wrap;
    }

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
    /* @media (max-width:800px ) {
    flex-wrap: wrap;
    } */


    @media (max-width:800px) {
      padding: 10px 20px;
      font-size: 0.8em;
    }

    @media (max-width:520px) {
      border-radius: 10px;
      margin: 10px;
    }
    &.active {
      background: white;
      color: gray;
    }
  }

`

export const TableData = styled.div`
 @media (max-width:500px) {
    & > .table__id {
      display: none;
    }

    & > .table__service {
      display: none;
    }
    
    & > .table__petname {
      display: none;
    }
    & > .table__time {
      display: none;
    }
  }
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
    display: flex;
    justify-content: center;
    align-items: center;
    text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  }

  & > div:nth-child(1) {
     font-weight:bold;
     flex: 0.5;
  }

  & > *:last-child {
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

    @media (max-width:500px) {
    & > .table__id {
      display: none;
    }

    & > .table__service {
      display: none;
    }
    
    & > .table__petname {
      display: none;
    }
    & > .table__time {
      display: none;
    }
  }


  & > .header {
    font-family: "Open Sans", sans-serif;
  }
  & > div {
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  }

   & > div:nth-child(1) {
    flex: 0.5;
    font-style: italic;
  } 

  & > *:last-child {
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
    min-width: 35px;
    max-width: 35px;
    height: 35px;
    border-radius: 50%;
    margin: 10px;
    object-fit: cover;
  }

  & > span {
    padding: 5px 20px;
    border-radius: 8px;
    color: white;

    &.approved {
      background:lightblue;
    }
    &.onGoing {
      background: rgb(57,130,228);
    }
    &.completed {
      background: rgb(52, 168, 83);
    }
    &.pending {
      background: rgb(255, 207, 67);
    }
    &.rejected {
      background: maroon;
    }
    &.interrupted {
      background: black;
    }
   
  }
`;

export const T_Head = styled.div`
`;
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
