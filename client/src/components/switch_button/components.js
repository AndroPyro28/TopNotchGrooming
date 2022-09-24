import styled from "styled-components";

export const SwitchButton = styled.div`
  width: 200px;
  height: 35px;
  position: relative;
  align-self: flex-end;
  box-shadow: 1px 3px 5px gray;
  top: 50px;
  right: 50px;
  border-radius: 10px;
  overflow: hidden;
  background: #EAEAEA;
  display: flex;
  cursor: pointer;
    transition: all .3s ease-in-out;
    position: relative;
    @media (max-width:600px) {
      width: 170px;
    }
`

export const Switch1 = styled.div`
  width:50%;
  font-size: 0.7em;
  display:flex;
  align-items:center;
  text-align:center;
  justify-content:center;
  /* background: ${({toggleSwitch}) => toggleSwitch ? "black" : "white"}; */
  color: ${({toggleSwitch}) => toggleSwitch ? "white" : "black"};
  transition: all .3s ease-in-out;
  z-index: 1;
  /* font-weight: 400; */
  
`
export const Switch2 = styled.div`
  width:50%;
  font-size: 0.7em;
  display:flex;
  align-items:center;
  text-align:center;
  justify-content:center;
  color: ${({toggleSwitch}) => !toggleSwitch ? "white" : "black"};
  transition: all .3s ease-in-out;
  z-index: 1;
  /* font-weight:400; */
  
`

export const Slider = styled.div`
  width:50%;
  height: 100%;
  background:black ;
  transition: all .3s ease-in-out;
  position: absolute;
  left: ${({toggleSwitch}) => toggleSwitch ? "0px" : "100px"};

  @media (max-width:600px) {
  left: ${({toggleSwitch}) => toggleSwitch ? "0px" : "85px"};
  }
`