import {
    call,
    put
} from 'redux-saga/effects';
import Api from '../api';

// search users
export function* usersSearch( { payload } ) {
    // get results for search query
    const results = yield call( Api.searchUsers, payload.query );

    yield put( {
        type: 'USERS_SEARCH_RESPONSE',
        payload: { results },
    } );
}

// fetch single user
export function* userFetch( { payload } ) {
    // get user data
    const userData = yield call( Api.fetchUser, payload.userName );
    //retrieve repositories for user
    const repositories = yield call( Api.fetchRepositories, payload.userName );

    // save user data to state
    yield put( {
        type: 'USER_RESPONSE',
        payload: {
            //merge user and repositories data
            userData: {
                ...userData,
                repositories,
            },
        },
    } );
}
