export default function ( query ) {
    return fetch( `https://api.github.com/search/users?q=${ encodeURIComponent( query ) }+in:login` )
        .then( res => res.json() )
        .then( json => json.items );
}