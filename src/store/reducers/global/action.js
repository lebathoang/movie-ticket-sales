export const dataTypes = {
    GLOBAL: 'CHANGE_INDEX',
};

export const bannerChange = (index) => ({
    type: dataTypes.GLOBAL,
    index,
});
