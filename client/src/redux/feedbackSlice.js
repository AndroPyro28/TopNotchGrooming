import {createSlice, current} from "@reduxjs/toolkit";

const feedbackSlice = createSlice({
    name: "Feedback",
    initialState: false,

    reducers: {
        open: (state, action) => {
            return true;
        },
        close: (state, action) => {
            return false
        }
    }
})

export const {open, close} =  feedbackSlice.actions;

export default feedbackSlice.reducer;