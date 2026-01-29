import { authTypes } from './actions';

const initState = {
    isAuthenticated: false,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case authTypes.LOGIN:
            return { ...state, isAuthenticated: true };
        case authTypes.LOGOUT:
            return { ...state, isAuthenticated: false };
        default:
            return state;
    }
};

export default authReducer;
