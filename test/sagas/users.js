import { call, put } from 'redux-saga/effects';
import assert from 'assert';

import {
    usersSearch,
    userFetch,
} from '../../src/sagas/users';
import Api from '../../src/api';

// unit tests for the users saga
describe( 'Users saga', () => {
    describe( 'usersSearch()', () => {
        const testQuery = 'query';
        const action = {
            payload: {
                query: testQuery,
            },
        };
        const generator = usersSearch( action );

        it( 'should return the Api.searchUsers call', () => {
            assert.deepEqual( generator.next().value, call( Api.searchUsers, testQuery ) );
        } );

        it( 'should return the `USERS_SEARCH_RESPONSE` action', () => {
            assert.deepEqual( generator.next().value, put( {
                type: 'USERS_SEARCH_RESPONSE',
                payload: {
                    results: undefined
                },
            } ) );
        } );

        it( 'should be finished', () => {
            assert.equal( generator.next().done, true );
        } );
    } );

    describe( 'userFetch()', () => {
        const testUserName = 'userName';
        const action = {
            payload: {
                userName: testUserName,
            },
        };
        const generator = userFetch( action );

        it( 'should return the Api.fetchUser call', () => {
            assert.deepEqual( generator.next().value, call( Api.fetchUser, testUserName ) );
        } );

        it( 'should return the Api.fetchRepositories call', () => {
            assert.deepEqual( generator.next().value, call( Api.fetchRepositories, testUserName ) );
        } );

        it( 'should return the USER_RESPONSE action', () => {
            assert.deepEqual( generator.next().value, put( {
                type: 'USER_RESPONSE',
                payload: {
                    userData: {
                        repositories: undefined,
                    },
                },
            } ) );
        } );

        it( 'should be finished', () => {
            assert.equal( generator.next().done, true );
        } );
    } );
} );
