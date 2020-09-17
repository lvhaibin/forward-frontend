import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import cookies from '../../utils/cookies';

export default withRouter(props => {
    if (!cookies.get('access_token') && props.path === '/login') {
        return <Route {...props} />;
    } else if (!cookies.get('access_token')) {
        return <Redirect to="/login" />;
    } else if (cookies.get('access_token') && props.path === '/login') {
        return <Redirect to="/" />;
    }

    return <Route {...props} />;
});
