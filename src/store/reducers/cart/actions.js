export const cartTypes = {
    ADD_TICKET: 'ADD_TICKET',
    REMOVE_TICKET: 'REMOVE_TICKET',
};

export const addTicket = (code, filmDetail) => ({
    type: cartTypes.ADD_TICKET,
    code,
    filmDetail,
});
export const removeTicket = (code, filmDetail) => ({
    type: cartTypes.REMOVE_TICKET,
    code,
    filmDetail,
});
