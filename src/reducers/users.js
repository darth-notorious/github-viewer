export default function users( state = {}, {
    type,
    payload,
} ) {
    switch ( type ) {
        case 'USER_RESPONSE':
            return {
                ...state,
                [ payload.userData.login ]: payload.userData,
            };
    }

    return state;
}