import auth from './auth/reducer';
import global from './global/reducer';
import user from './user/reducer';
import detail from './detail/reducer';

const { combineReducers } = require('redux');

const reducer = combineReducers({
    auth,
    global,
    user,
    detail,
});

export default reducer;
