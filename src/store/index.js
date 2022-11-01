import reducer from './reducers';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
    reducer,
});

export default store;
