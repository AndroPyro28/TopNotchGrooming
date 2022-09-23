import { combineReducers } from "redux";

import userSlice from './userSlice';
import cartSlice from './cartSlice';
import socketSlice from "./socketSlice";
import feedbackSlice from "./feedbackSlice";


const rootReducers = combineReducers({
    user: userSlice,
    cart: cartSlice,
    socket: socketSlice,
    feedback: feedbackSlice,
});

export default rootReducers;