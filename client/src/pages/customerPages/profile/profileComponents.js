import styled from "styled-components";

export const ProfilePageContainer = styled.section`
  background: rgb(235, 236, 240);
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow-x: hidden !important;
  position: relative;
  & > i {
    position: relative;
    /* right: 50px; */
    margin: 10px;
    font-size: 1.5em;
    padding: 15px;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;
    width: fit-content;
    &:hover {
      background: lightgray;
    }

    @media (max-width: 400px) {
      position: relative;
      width: fit-content;
      margin: 10px;
      justify-self: end;
    }
  }
`;

export const ProfileAvatar = styled.div`
  display: flex;
  margin: 30px 50px;
  position: relative;
  @media (max-width: 430px) {
    margin: 30px 0px;
  }
  & > div {
    width: 80px;
    & > img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: solid 3px gray;
      object-fit: cover;
      display: flex;
      flex-direction: column-reverse;

      @media (max-width: 430px) {
        width: 70px;
        height: 70px;
      }
    }

    & > input {
      cursor: pointer;
      width: fit-content;
      padding: 5px;
      margin-top: 10px;
      background: rgb(192, 192, 192);
      border-radius: 10px;
    }
  }

  & > .full-name {
    font-size: 1.5em;
    margin: 10px;
    font-family: "Open Sans", sans-serif !important;
    display: flex;
    flex-direction: column;
    @media (max-width: 430px) {
    font-size: 1.3em;
      }

      & > .icons {
        display: flex;
        justify-content: space-between;
        & > .button-icons {
          & > button {
            margin: 5px;
            padding: 3px 5px;
            border-radius: 5px;
            cursor: pointer;
            color: white;
            border: none;
          }
        }
      }
  }
`;

export const ListNavigationButton = styled.div`
  margin: 0px 20px -55px 150px;
  text-align: start;

  @media (max-width: 430px) {
    margin: 20px auto;
  }

  & > a {
    text-align: start;

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

export const ActivitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

