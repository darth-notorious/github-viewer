import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { history } from './store.js';
import App from './containers/App';
import Home from './containers/Home';
import User from './containers/User';
import NotFound from './containers/NotFound';

// build the routes list
const router = (
    <Router
        onUpdate={ () => window.scrollTo( 0, 0 ) }
        history={ history }
    >
        <Route
            path='/'
            component={ App }
        >
            <IndexRoute
                component={ Home }
            />
            <Route
                path='user/:userName'
                component={ User }
            />
            <Route
                path='*'
                component={ NotFound }
            />
        </Route>
    </Router>
);

export { router };
