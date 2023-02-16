import auth from './auth/reducer';
import global from './global/reducer';
import user from './user/reducer';
import detail from './detail/reducer';
import cart from './cart/reducer';

const { combineReducers } = require('redux');

const reducer = combineReducers({
    auth,
    global,
    user,
    detail,
    cart,
});

export default reducer;
