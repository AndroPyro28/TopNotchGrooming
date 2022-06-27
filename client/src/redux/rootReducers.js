import userSlice from './userSlice';

import { combineReducers } from "redux";

const rootReducers = combineReducers({
    userReducer: userSlice
});

export default rootReducers;