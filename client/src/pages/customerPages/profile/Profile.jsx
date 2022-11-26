import React, { useEffect, useState } from "react";
import {
  ProfilePageContainer,
  ProfileAvatar,
  ListNavigationButton,
} from "./profileComponents";
import { NavLink, Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/loader/Loader";
import CustomAxios from "../../../customer hooks/CustomAxios";
import { authenticationSuccess } from "../../../redux/userSlice";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const NavStyles = ({ isActive }) => {
    return {
      borderBottom: isActive ? "solid 2px rgb(99, 98, 98)" : "",
    };
  };
  const [allowChanges, setAllowChanges] = useState(false);

  // const updateInfo = async () => {
  //   try {
  //     const values = Object.values(user);
  //     const isFilled = values.every(value => value != "");

  //     if(!isFilled) {
  //       return toast('Fill up all the information to save the changes', { type: "warning" });
  //     }
  //     setLoading(true);
  //     const response = await CustomAxios({
  //       METHOD: "POST",
  //       uri: `/api/customer/updateInfo`,
  //       values: { user, profileImg },
  //     });

  //     const { success, msg } = response;

  //     if (msg?.includes("session expired") && !success) {
  //       toast(msg, { type: "error" });
  //       return window.location.reload();
  //     }

  //     if (!success) return toast(msg, { type: "error" });
  //    const { user: newUser } = response;
  //     dispatch(authenticationSuccess({ currentUser: newUser, isAuth: true }));
  //     setProfileImg(null);
  //     setAllowChanges(false);
  //     return toast(msg, { type: "success" });
  //   } catch (error) {
  //     console.log(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const [profileImg, setProfileImg] = useState(null);

  useEffect(() => {
    if (profileImg) {
      try {
        const reader = new FileReader();

        reader.readAsDataURL(profileImg);

        reader.onloadend = async () => {
          if (!reader.result.includes("image")) {
            return toast("Invalid File Type", { type: "warning" });
          }
          setProfileImg(reader.result);
        };
      } catch (error) {
        console.log(error.message);
      }
    }
  }, [profileImg]);
  const updateInfo = async () => {
    try {
      const values = Object.values(user);
      const isFilled = values.every((value) => value != "");

      if (!isFilled) {
        return toast("Fill up all the information to save the changes", {
          type: "warning",
        });
      }
      setLoading(true);
      const response = await CustomAxios({
        METHOD: "POST",
        uri: `/api/customer/updateInfo`,
        values: { user, profileImg },
      });

      const { success, msg } = response;

      if (msg?.includes("session expired") && !success) {
        toast(msg, { type: "error" });
        return window.location.reload();
      }

      if (!success) return toast(msg, { type: "error" });
      const { user: newUser } = response;
      dispatch(authenticationSuccess({ currentUser: newUser, isAuth: true }));
      setProfileImg(null);
      setAllowChanges(false);
      return toast(msg, { type: "success" });
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProfilePageContainer>
      {loading && <Loader bg="rgba(0,0,0,0.5)" />}

      <ToastContainer autoClose={1500} />

      <ProfileAvatar>
        <div>
          {profileImg ? (
            <img src={profileImg} alt="" />
          ) : (
            <img src={user?.profile_image_url} alt="" />
          )}

          {allowChanges && (
            <input
              type={"file"}
              accept="*/image"
              onChange={(e) => setProfileImg(e.target.files[0])}
            />
          )}
        </div>
        <span className="full-name">
          <span>
            {user?.firstname} {user?.lastname}
          </span>
          <span className="icons">
          {!allowChanges && (
              <div className="button-icons"> <button onClick={() => setAllowChanges(true)} className="edit" style={{background: 'rgb(249,166,2)'}} >Edit</button></div>
            )}
            {allowChanges && (
              <div className="button-icons">
                <button onClick={updateInfo} classNames="save" style={{background: 'green'}}>Save</button>
                <button onClick={() => setAllowChanges(false)} className="cancel" style={{background: 'maroon'}} >Cancel</button>
              </div>
            )}
           
          </span>
        </span>
      </ProfileAvatar>

      <ListNavigationButton>
        <NavLink to="personal" style={NavStyles}>
          Personal Info
        </NavLink>
        <NavLink to="activities" style={NavStyles}>
          Activities
        </NavLink>
      </ListNavigationButton>

      <Outlet
        context={{
          allowChanges,
          setUser,
          user,
          profileImg,
          setAllowChanges,
          setLoading,
          loading,
          toast,
          setProfileImg,
        }}
      />
    </ProfilePageContainer>
  );
}

export default Profile;
