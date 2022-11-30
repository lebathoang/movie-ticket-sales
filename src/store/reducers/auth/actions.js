export const authTypes = {
    LOGIN: 'LOGIN',
    TURN_OFF_LOGIN: 'TURN_OFF_LOGIN',
    SUCCESSFUL: 'SUCCESSFUL',
    LOGOUT: 'LOGOUT',
};

export const signIn = () => ({
    type: authTypes.LOGIN,
});

export const turnOff = () => ({
    type: authTypes.TURN_OFF_LOGIN,
});

export const successful = () => ({
    type: authTypes.SUCCESSFUL,
});

export const logOut = () => ({
    type: authTypes.LOGOUT,
});
