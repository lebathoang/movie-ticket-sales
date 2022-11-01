import auth from './auth/reducer';
import global from './global/reducer';

const { combineReducers } = require('redux');

const reducer = combineReducers({
    auth,
    global,
});

export default reducer;
