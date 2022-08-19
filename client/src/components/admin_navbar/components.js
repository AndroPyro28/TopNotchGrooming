import styled from "styled-components";

export const AdminNavbarContainer = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    background: white;
    color: rgb(20,29,53);
    padding-inline:20px ;
    background: white;
    border-radius: 20px;

box-shadow: 0px -1px 26px -8px rgba(0,0,0,0.7);
-webkit-box-shadow: 0px -1px 26px -8px rgba(0,0,0,0.7);
-moz-box-shadow: 0px -1px 26px -8px rgba(0,0,0,0.7);

`

export const LeftNav = styled.div`
flex: 1;
display: flex;

@media (max-width:577px) {
    flex: 0;
}
`

export const RightNav = styled.div`
display:flex;
flex: 0.5;
justify-content: flex-end;
align-items: center;
@media (max-width:577px) {
    flex: 1;
}

& > .admin__logout {
        font-size: 0.9em;
        font-weight: 500;
        padding: 10px;
        margin: 10px;
        background:rgba(0, 0, 0, 0.336);
        color: white;
        border-radius: 10px;
        cursor: pointer;
        @media (max-width:950px) {
            font-size: 0.8em;
            padding: 5px;
            margin: 5px;

        }
    }

`
export const HamburgerMenu = styled.i`
    font-size: 1.5em;
    display: none;
    color: rgb(20,29,53);
    padding: 5px;
    cursor: pointer;
    @media (max-width:950px) {
        display: block;
    }
`

export const NavPages = styled.div`
    display: flex;

    @media (max-width:950px) {
        display: none;
    }
   
    & > a {
        color: white;
        color: rgb(20,29,53);
        font-size: 0.8em;
        padding: 10px;
        border-radius: 10px;

        
        &:hover {
            background: white;
            color: black;
        }
    }
`

export const AdminAvatar = styled.div`
    display: flex;
    justify-self: flex-end;
    width: fit-content;
    align-items: center;
    border-radius: 20px;
    border: solid 1px #EAEAEA;
    padding: 5px 10px;
    text-transform: capitalize;
    & > .admin__name {
        margin: 10px;
        font-size: 0.9em;
        font-weight: 500;
        @media (max-width:950px) {
            font-size: 0.8em;
            margin: 5px;

        }
    }
    
    & > img {
        width: 25px;
        object-fit: contain;
        padding: 5px;
        border-radius: 50%;
        /* background: rgb(255,231,147); */
    }

    & > .dropDownBtn {
        display:flex;
        flex-direction: column;
        cursor: pointer;
        padding: 10px;
        border-radius: 50%;
        &:hover {
            background: gray;
            color: white;
        }

        & > .dropdowncontent {
            padding: 10px 20px;
            position: absolute;
            margin-top: 30px;
            margin-left: -60px;

            & > a {
                padding: 10px 20px;
                color: rgb(20,29,53);
                border-radius:10px;
                font-weight: normal;
            }
        }
    }
`