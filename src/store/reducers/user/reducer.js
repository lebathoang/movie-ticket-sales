import { valueTypes } from './action';

const initState = {
    fullName: '',
    email: '',
    password: '',
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case valueTypes.SET_ACCOUNT:
            // action payload sẽ là 1 object chứa cả email và password {}
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default userReducer;
