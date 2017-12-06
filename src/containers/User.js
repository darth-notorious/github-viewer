import React from 'react';
import { connect } from 'react-redux';

import Layout from '../components/Layout';
import Loader from '../components/Loader';
import Profile from '../components/Profile';
import RepositoriesList from '../components/RepositoriesList';

function mapStateToProps( state, ownProps ) {
    const userName = ownProps.params.userName;
    const user = state.users[ userName ];
    return {
        user,
        userName,
    };
}

function mapDispatchToProps( dispatch ) {
    return {
        fetchUser( userName ) {
            return dispatch( {
                type: 'USER_REQUEST',
                payload: { userName },
            } );
        },
    };
}


// User profile page component
class User extends React.Component {

    componentDidMount() {
        if ( !this.props.user )
            this.props.fetchUser( this.props.userName );
    }

    render() {
        const {
            user,
            userName,
        } = this.props;

        return ( <Layout
            pageHeader={ `User: @${ userName }` }
        >
            {
                !user && <Loader />
            }
            {
                !!user && <Profile
                    user={ this.props.user }
                />
            }
            {
                !!user && <RepositoriesList
                    repositories={ user.repositories }
                />
            }
        </Layout> );
    }

}

export default connect( mapStateToProps, mapDispatchToProps )( User );