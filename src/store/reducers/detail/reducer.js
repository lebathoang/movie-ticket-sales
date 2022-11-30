import { detailTypes } from './action';

const initState = {
    id: 0,
};

const detailReducer = (state = initState, action) => {
    switch (action.type) {
        case detailTypes.GET_ID:
            return { ...state, id: action.id };
        default:
            return state;
    }
};

export default detailReducer;
