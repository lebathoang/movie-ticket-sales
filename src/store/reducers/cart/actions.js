export const cartTypes = {
    UPDATE_TICKET: 'UPDATE_TICKET',
    ADD_TICKET: 'ADD_TICKET',
    REMOVE_TICKET: 'REMOVE_TICKET',
};

export const updateTicket = (numberTicket) => ({
    type: cartTypes.UPDATE_TICKET,
    numberTicket,
});
export const addTicket = (row, column, place, item) => ({
    type: cartTypes.ADD_TICKET,
    row,
    column,
    place,
    item,
});
export const removeTicket = (payload) => ({
    type: cartTypes.REMOVE_TICKET,
    payload,
});
