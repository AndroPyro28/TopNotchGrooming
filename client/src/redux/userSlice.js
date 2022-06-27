import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "User",
    initialState: {},

    reducers: {
        authenticationSuccess: (state, action) => {
             return action.payload
        },
        authenticationFailded: (state, action) => {
            return {}
        }
    }
})

export const {authenticationSuccess, authenticationFailed} =  userSlice.actions;

export default userSlice.reducer;