import { combineReducers } from "redux";

import userSlice from './userSlice';
import cartSlice from './cartSlice';


const rootReducers = combineReducers({
    user: userSlice,
    cart: cartSlice
});

export default rootReducers;