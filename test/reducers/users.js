import assert from 'assert';
import users from '../../src/reducers/users';

// unit tests for the users reducers
describe( 'Users reducer', () => {
    describe( 'USER_RESPONSE', () => {
        it( 'should return users hash', () => {
            assert.deepEqual(
                users( {}, {
                    type: 'USER_RESPONSE',
                    payload: {
                        userData: {
                            id: 1,
                            login: 'testlogin',
                        },
                    },
                } ), {
                    testlogin: {
                        id: 1,
                        login: 'testlogin',
                    },
                },
            );
        } );
    } );
} );
