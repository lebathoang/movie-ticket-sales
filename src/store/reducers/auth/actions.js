export const authTypes = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
};

export const signIn = () => ({
    type: authTypes.LOGIN,
});

export const logOut = () => ({
    type: authTypes.LOGOUT,
});
