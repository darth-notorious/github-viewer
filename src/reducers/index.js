import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import search from './search';
import users from './users';


// main reducers
export const reducers = combineReducers( {
    routing: routerReducer,
    search,
    users,
} );
