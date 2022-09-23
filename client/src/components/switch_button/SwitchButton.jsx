import React from "react";
import { SwitchButton, Slider, Switch1, Switch2 } from "./components";
function Switch({toggleSwitch, setToggleSwitch}) {
    const handleToggleSwitch = () => {
        setToggleSwitch(prev => !prev)
    }
  return (
    <SwitchButton onClick={handleToggleSwitch}>
      <Slider toggleSwitch={toggleSwitch} />
      <Switch1 toggleSwitch={toggleSwitch}>Orders</Switch1>
      <Switch2 toggleSwitch={toggleSwitch}>Appointments</Switch2>
    </SwitchButton>
  );
}

export default Switch;
