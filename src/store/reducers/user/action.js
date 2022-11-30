export const valueTypes = {
    SET_ACCOUNT: 'SET_ACCOUNT',
};

export const setAccount = (payload) => ({
    type: valueTypes.SET_ACCOUNT,
    payload,
});
