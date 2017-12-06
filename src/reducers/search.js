export default function search( state = {
    query: '',
    results: [],
    requestInProgress: false,
}, {
    type,
    payload,
} ) {
    switch ( type ) {
        case 'USERS_SEARCH_REQUEST':
            return Object.assign( {}, state, {
                query: payload.query,
                requestInProgress: true,
                results: [],
            } );

        case 'USERS_SEARCH_RESPONSE':
            return Object.assign( {}, state, {
                requestInProgress: false,
                results: payload.results,
            } );
    }

    return state;
}