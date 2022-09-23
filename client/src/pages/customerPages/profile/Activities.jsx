import React from "react";
import { useState } from "react";
import OrderActivities from "../../../components/activities/OrderActivities";
import AppointmentActivities from "../../../components/activities/AppointmentActivities"
import Switch from "../../../components/switch_button/SwitchButton";
import {
  ActivitiesContainer,
} from "./profileComponents";

function Activities() {
  const [toggleSwitch, setToggleSwitch] = useState(false);
  return (
    <ActivitiesContainer>
      <Switch setToggleSwitch={setToggleSwitch} toggleSwitch={toggleSwitch} />
      {
        toggleSwitch ? 
        <OrderActivities /> :
       <AppointmentActivities />
      }
    </ActivitiesContainer>
  );
}

export default Activities;
