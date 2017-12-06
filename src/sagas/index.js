import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import {
    usersSearch,
    userFetch
} from './users';

// main saga generators
export function* sagas() {
    yield [
        fork( takeLatest, 'USERS_SEARCH_REQUEST', usersSearch ),
        fork( takeLatest, 'USER_REQUEST', userFetch )
    ];
}