import styled from "styled-components";


export const LoginSignupPageContainer = styled.section`
    background: url('/images/login&signupBody.png');
    background-size: cover;
    /* height: 100vh; */
    /* width: 100vw; */
    text-align: start;
    overflow-x:hidden;
`

export const LoginSignupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

export const LoginSignupContainer = styled.div`
    display: flex;
    justify-content: center;
    /* background: white; */
    margin-top: 90px;
    /* height: 80%; */
    width: 70%;
    /* overflow: auto; */
    /* flex-direction: column; */
    /* background: black; */
    /* border: solid 1px rgb(122, 122, 57); */
    padding: 0px 35px;
    border-radius: 20px;
    @media(max-width:800px) {
        & {
            padding: 5px 10px;
            width: 90%;
            height: 75%;
        }
    }

    & > .form__inputs {
        display: flex;
        /* overflow: hidden; */
        width: 30vw;
        margin: 10px;

        @media(max-width:800px) {
            & {
                width:35vw;
            }
        }

        @media(max-width:600px) {
            & {
                width:45vw;
            }
        }

        @media(max-width:450px) {
            & {
                width:80vw;
            }
        }

        & > .form__content {
            display: flex;
            flex-direction: column;
            width:100%;
            /* overflow: hidden; */
            align-self: center;
            & > h1 {
                margin-top: 5px;
                margin-bottom: 25px;
                font-size:40px;
                color: rgb(122, 122, 57);
                text-transform: capitalize;

                @media(max-width:1000px) {
                    & {
                        margin-top: 0;
                        margin-bottom: 0;
                        font-size:30px; 
                    }
                }
            }

            & > h3 {
                margin: 10px 0px;
                color: rgb(122, 122, 57);
                font-size: 18px;
            }

            & > p {
                font-size: 13px;
                margin-bottom: 25px;
                color: gray;

                @media(max-width:900px) {
                    & {
                        display:none
                    }
                }
            }

            & > a {
                color: gray;
                font-size: 0.9em;
                margin: 5px 0 5px 0;

                    &:hover {
                        color: rgb(122, 122, 57);
                    }
            }

            & > .input__container {
                display: flex;
                flex-direction: column;
                margin-top: 10px;
                margin-bottom: 10px;
                & > .error__message {
                    color: #ff4949;
                    font-size:0.9em;
                }
                & > label {
                    font-weight: 500;
                    /* font-size: 100%; */
                    font-size: 0.9em;
                    color: rgb(112, 112, 74);
                }

                & > input {
                    border: none;
                    border-bottom: solid 2.5px #cacaca;
                    outline: none;
                    padding-top: 5px;
                    padding-bottom: 10px;
                    font-size: 0.9em;
                    transition: all .3s ease-in-out;
                    color: gray;

                    &:focus {
                        color: rgb(112, 112, 74);
                        border-bottom: solid 2.5px rgb(112, 112, 74);
                    }
                }
            }

            & > .button__container {
                display: flex;
                flex-direction: row;
                align-items: center;
                width: 100%;
                justify-content: space-between;

                & > span {
                    justify-self:center;
                    color: rgb(114, 114, 2);
                    font-size: 0.8em;
                }
                & > button {
                    padding: 10px 40px;
                    width: fit-content;
                    height: fit-content;
                    background: rgb(114, 114, 2);
                    border: none;
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    @media(max-width:600px) {
                        & {
                            padding: 10px 30px;
                        }
                    }

                    &:disabled {
                        background: rgb(56, 56, 1);
                        cursor:default;
                    }
                }

                & > .prevBtn {
                    border: solid 2px rgb(112, 112, 74);
                    background: white;
                    color: rgb(112, 112, 74);
                    justify-self: flex-start  !important;
                }

                & > .nextBtn {
                    justify-self: flex-end  !important;
                }
            }
        }  
    }
`

export const LoginBgFrom = styled.div`
flex: 2;
background: url('/images/loginBG.png');
background-size: contain;
background-repeat: no-repeat;
background-position: center;
@media(max-width:800px) {
    & {
        flex: 1
    }
}

@media(max-width:450px) {
    & {
        display:none
    }
}
`