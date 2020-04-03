import { combineReducers } from 'redux';
import dashboard from './dashboard';
import authenticateUser from './authenticateUser';

const reducer = combineReducers({
    dashboard,
    authenticateUser
});

export default reducer;