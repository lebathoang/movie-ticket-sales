import { cartTypes } from './actions';

const initState = {
    // cart: false,
    // count: 0,
    ticket: [
        // {
        //     row: '',
        //     column: '',
        //     place: '',
        //     item: [],
        // },
    ],
};

const CartReducer = (state = initState, action) => {
    switch (action.type) {
        case cartTypes.UPDATE_TICKET:
            return { ...state, count: action.numberTicket };
        case cartTypes.ADD_TICKET:
            return {
                ...state,
                ticket: [
                    ...state.ticket,
                    { row: action.row, column: action.column, place: action.place, item: action.item },
                ],
            };
        case cartTypes.REMOVE_TICKET:
            const listTicket = state.ticket;
            return { ...state, ticket: listTicket.filter((item) => item.place != action.payload.place) };
        default:
            return state;
    }
};

export default CartReducer;
