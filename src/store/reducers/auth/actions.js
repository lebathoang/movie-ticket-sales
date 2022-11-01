export const authTypes = {
    LOGIN: 'LOGIN',
    TURN_OFF_LOGIN: 'TURN_OFF_LOGIN',
};

export const signIn = () => ({
    type: authTypes.LOGIN,
});

export const turnOff = () => ({
    type: authTypes.TURN_OFF_LOGIN,
});
