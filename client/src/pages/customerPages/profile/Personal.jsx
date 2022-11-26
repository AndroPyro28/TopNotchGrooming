import React, { useEffect, useState } from "react";
import { UserInfo, RowInfo } from "./Personal";
import { useSelector, useDispatch } from "react-redux";
import { useOutletContext } from "react-router-dom";
import GetDateToday from "../../../helpers/DateToday";
import AppointmentLogic from "../appointment/appointmentLogic";
import CustomAxios from "../../../customer hooks/CustomAxios";
import { ToastContainer } from "react-toastify";
import { authenticationSuccess } from "../../../redux/userSlice";

function Personal() {
  const dispatch = useDispatch();

  const {allowChanges, setUser, user, profileImg, setAllowChanges, setLoading, toast, setProfileImg} = useOutletContext();
  const { currentUser } = useSelector((state) => state.user);
  
const {dateTodayFormatter} = AppointmentLogic({})
  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  useEffect(() => {
    const birthdate = document.querySelector('#birthdate');

    if(birthdate) {
      birthdate.max = dateTodayFormatter({year:18});
    }
  }, [allowChanges])

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
          {allowChanges ? <input type="date"  value={user?.birthdate} id="birthdate" name="birthdate" onChange={setProps} /> : <span>{`${user?.birthdate}`}</span>}
        </div>

        <div class="info">
          <h3>Email</h3>
          {allowChanges ? <input value={user?.email} name="email" onChange={setProps} /> : <span>{`${user?.email}`}</span>}
        </div>
      </RowInfo>
    </UserInfo>
  );
}

export default Personal;
