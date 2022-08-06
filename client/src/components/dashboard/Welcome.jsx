import React from 'react'
import {WelcomeContainer} from "./components"
import {useSelector} from "react-redux";

function Welcome() {

    const {currentUser} = useSelector(state => state.user);
  return (
    <WelcomeContainer>
        <h1>Welcome, {currentUser?.firstname}</h1>

        <small>Here are your schedule today</small>
    </WelcomeContainer>
  )
}

export default Welcome