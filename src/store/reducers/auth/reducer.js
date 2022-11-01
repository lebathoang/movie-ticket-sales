import { authTypes } from './actions';

const initState = {
    loggedIn: false,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case authTypes.LOGIN:
            return { ...state, loggedIn: true };
        case authTypes.TURN_OFF_LOGIN:
            return { ...state, loggedIn: false };
        default:
            return state;
    }
};

export default authReducer;
