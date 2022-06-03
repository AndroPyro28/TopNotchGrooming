const initialState = {};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case "AUTHENTICATIONSUCCESS" : {
            return action.payload;
        }
        case "AUTHENTICATIONFAILED" : {
            return action.payload;
        }

        default: return state;
    }
}

export default userReducer;