export const authenticationSuccess = (currentUser, isAuth) => {
    return {
        type: "AUTHENTICATIONSUCCESS",
        payload: {
            currentUser,
            isAuth
        }
    }
}

export const authenticationFailed = () => {
    return {
        type: "AUTHENTICATIONFAILED",
        payload: {}
    }
}