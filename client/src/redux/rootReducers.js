import { combineReducers } from "redux";

import userSlice from './userSlice';
import cartSlice from './cartSlice';
import socketSlice from "./socketSlice";


const rootReducers = combineReducers({
    user: userSlice,
    cart: cartSlice,
    socket: socketSlice
});

export default rootReducers;