import userReducer from './reducers/userReducer';

import { combineReducers } from "redux";

const rootReducers = combineReducers({
    userReducer,
});

export default rootReducers;