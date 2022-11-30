import { authTypes } from './actions';

const initState = {
    loggedIn: false,
    successful: false,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case authTypes.LOGIN:
            return { ...state, loggedIn: true };
        case authTypes.TURN_OFF_LOGIN:
            return { ...state, loggedIn: false };
        case authTypes.SUCCESSFUL:
            return { ...state, successful: true, loggedIn: false };
        case authTypes.LOGOUT:
            return { ...state, successful: false };
        default:
            return state;
    }
};

export default authReducer;
