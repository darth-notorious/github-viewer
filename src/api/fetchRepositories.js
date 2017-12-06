export default function fetchRepositories( userName ) {
    return fetch( `https://api.github.com/users/${ userName }/repos` )
        .then( res => res.json() );
}