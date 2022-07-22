import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
    }
`
export const PaymentSuccessContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 85vh;
    & > i {
        font-size: 5em;
        padding: 0.2em;
        background: rgb(193,239,218);
        width: fit-content;
        border-radius: 50%;
        color: rgb(32,190,121);
        margin: 10px 50px 50px 50px;
    }
`

export const Title = styled.div`
    text-align: center;
    color: gray;
    & > :is(p, small) {
        margin: 5px;
    }

    & > h1 {
        color: rgb(32,190,121);
        margin: 15px;
        font-weight: normal;
    }
`

export const Line = styled.div`
    height: 1px;
    background-color: lightgray;
    width: 60%;
    margin: 20px;
`

export const TransactionNumber = styled.div`
color: rgb(108,157,240);
margin-top: 10px;
margin-bottom: 50px;
`

export const PaymentData = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    text-transform: uppercase;
    & > span {
        color: gray;
        display: block;
        text-transform: uppercase;
    }

    & > strong {
        color: dimgray;
    }
`

export const ProceedButton = styled.button`
	background-color:rgb(32,190,121);
	border-radius:28px;
	border:1px solid #18ab29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	padding:16px 31px;
	text-decoration:none;
	text-shadow:0px 1px 0px #2f6627;
&:hover {
	background-color:#5cbf2a;
}
&:active {
	position:relative;
	top:1px;
}

        
`