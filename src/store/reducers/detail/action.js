export const detailTypes = {
    GET_ID: 'GET_ID',
};

export const getId = (id) => ({
    type: detailTypes.GET_ID,
    id,
});
