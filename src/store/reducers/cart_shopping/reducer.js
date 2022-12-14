import { cartTypes } from './actions';

const initState = {
    openCart: false,
};

const CartReducer = (state = initState, action) => {
    switch (action.type) {
        case cartTypes.OPEN_CART_SHOPPING:
            return { ...state, openCart: true };
        default:
            return state;
    }
};

export default CartReducer;
