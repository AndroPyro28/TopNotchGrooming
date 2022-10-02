import React, { useEffect, useState } from "react";
import { UserInfo, RowInfo } from "./Personal";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import GetDateToday from "../../../helpers/DateToday";
import AppointmentLogic from "../appointment/appointmentLogic";
function Personal() {
  const {allowChanges, setUser, user,} = useOutletContext();
  const { currentUser } = useSelector((state) => state.user);
  
const {dateTodayFormatter} = AppointmentLogic({})
  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const setProps = (e) => {
    setUser(prev => ({...prev, [e.target.name] : e.target.value}))
  }

  return (
    <UserInfo>
      <RowInfo>
        <div class="info">
          <h3>FIRST NAME</h3>
          {allowChanges ? <input value={user?.firstname} name="firstname" onChange={setProps} /> : <span>{`${user?.firstname}`}</span>}
        </div>

        <div class="info">
          <h3>LAST NAME</h3>
          {allowChanges ? <input value={user?.lastname} name="lastname" onChange={setProps} /> : <span>{`${user?.lastname}`}</span>}
        </div>
      </RowInfo>

      <RowInfo>
        <div class="info">
          <h3>ADDRESS</h3>
          {allowChanges ? <input value={user?.address} name="address" onChange={setProps} /> : <span>{`${user?.address}`}</span>}
        </div>

        <div class="info">
          <h3>CONTACT</h3>
          {allowChanges ? <input type="number" value={user?.phoneNo} name="phoneNo" onChange={setProps} /> : <span>{`${user?.phoneNo}`}</span>}
        </div>
      </RowInfo>

      <RowInfo>
        <div class="info">
          <h3>DATE OF BIRTH</h3>
          {allowChanges ? <input type="date" min={dateTodayFormatter({})} value={user?.birthdate} name="birthdate" onChange={setProps} /> : <span>{`${user?.birthdate}`}</span>}
        </div>

        <div class="info">
          <h3>Email</h3>
          {allowChanges ? <input value={user?.email} name="email" onChange={setProps} /> : <span>{`${user?.email}`}</span>}
        </div>
      </RowInfo>

      {/* <RowInfo>
        <div class="info">
          <h3>SEX</h3>
          <span>---</span>
        </div>

        <div class="info">
          <h3>Verified</h3>
          <span>---</span>
        </div>
      </RowInfo> */}
    </UserInfo>
  );
}

export default Personal;
