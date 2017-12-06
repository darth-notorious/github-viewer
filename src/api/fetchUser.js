export default function fetchUser( userName ) {
    return fetch( `https://api.github.com/users/${ userName }` )
        .then( res => res.json() );
}