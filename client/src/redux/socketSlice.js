import {createSlice, current} from "@reduxjs/toolkit";

const socketSlice = createSlice({
    name: "Socket",
    initialState: {},

    reducers: {
        connection: (state, action) => {
            return action.payload;
        },
        disconnection: (state, action) => {
            return {}
        }
    }
})

export const {connection, disconnection} =  socketSlice.actions;

export default socketSlice.reducer;