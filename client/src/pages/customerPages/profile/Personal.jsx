import React, { useEffect, useState } from "react";
import {UserInfo, RowInfo} from "./Personal"
import {useSelector} from "react-redux";
function Personal() {

  const {currentUser} = useSelector(state => state.userReducer);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser])
  
  return (
    <UserInfo>
      <RowInfo>
        <div class="info">
          <h3>FULL NAME</h3>
          <span>{`${user?.firstname} ${user?.lastname}`}</span>
        </div>

        <div class="info">
          <h3>ADDRESS</h3>
          <span>San Sebastian Hagonoy Bulacan</span>
        </div>
      </RowInfo>

      <RowInfo>
        <div class="info">
          <h3>AGE</h3>
          <span>---</span>
        </div>

        <div class="info">
          <h3>CONTACT</h3>
          <span>{`${user?.phoneNo}`}</span>
        </div>
      </RowInfo>

      <RowInfo>
        <div class="info">
          <h3>DATE OF BIRTH</h3>
          <span>{`${user?.birthdate}`}</span>
        </div>

        <div class="info">
          <h3>Email</h3>
          <span>{`${user?.email}`}</span>
        </div>
      </RowInfo>

      <RowInfo>
        <div class="info">
          <h3>SEX</h3>
          <span>---</span>
        </div>

        <div class="info">
          <h3>Verified</h3>
          <span>---</span>
        </div>
      </RowInfo>
    </UserInfo>
  );
}

export default Personal;
