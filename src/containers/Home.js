import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

import Layout from '../components/Layout';
import Loader from '../components/Loader/index';
import SearchField from '../components/SearchField';
import SearchResults from '../components/SearchResults';

function mapStateToProps( state ) {
    return {
        requestInProgress: state.search.requestInProgress,
        results: state.search.results,
        resultsCount: state.search.results ? state.search.results.length : 0,
        query: state.search.query,
    };
}

function mapDispatchToProps( dispatch ) {
    return {
        onSearch( query ) {
            return dispatch( {
                type: 'USERS_SEARCH_REQUEST',
                payload: { query },
            } );
        },
    };
}

// Home page component
class Home extends React.Component {

    render() {
        let content = false;

        if ( !this.props.requestInProgress && !this.props.resultsCount && this.props.query ) {
            //request completed and returned no results, show warning
            content = <Alert
                bsStyle='warning'
            >
                No results for <strong>`{ this.props.query }`</strong>
            </Alert>;
        } else if ( this.props.requestInProgress ) {
            //request in progress, show loader
            content = <Loader/>;
        } else if ( this.props.resultsCount ) {
            //request completed, display retrieved results
            content = <SearchResults
                results={ this.props.results }
                query={ this.props.query }
            />;
        }

        return ( <Layout
            pageHeader='Enter github username'
        >
            <SearchField
                onSearch={ this.props.onSearch }
            />
            { content }
        </Layout> );
    }

}

export default connect( mapStateToProps, mapDispatchToProps )( Home );
