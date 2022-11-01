import { dataTypes } from './action';

const initState = {
    bannerSelected: 0,
};

const globalReducer = (state = initState, action) => {
    switch (action.type) {
        case dataTypes.GLOBAL:
            return { ...state, bannerSelected: action.index };
        default:
            return state;
    }
};

export default globalReducer;
