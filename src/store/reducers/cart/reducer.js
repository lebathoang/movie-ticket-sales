import { cartTypes } from './actions';

const initState = {
    booked: ['D9', 'C8', 'C10', 'B7', 'B11', 'C6', 'C12', 'D6', 'D12', 'E7', 'E11', 'F8', 'F10', 'G9'],
    customerSeats: [],
    ticket: [
        // { ...filmDetail, code }
    ],
};

const CartReducer = (state = initState, action) => {
    switch (action.type) {
        case cartTypes.ADD_TICKET:
            return {
                ...state,
                ticket: [...state.ticket, { ...action.filmDetail, code: action.code }],
                customerSeats: [...state.customerSeats, action.code],
            };
        case cartTypes.REMOVE_TICKET:
            return {
                ...state,
                ticket: state.ticket.filter(
                    (item) => item.code != action.code || (item.code == action.code && item.Id != action.filmDetail.Id),
                ),
                customerSeats: state.customerSeats.filter((item) => item != action.code),
            };
        default:
            return state;
    }
};

export default CartReducer;
