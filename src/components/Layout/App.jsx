import React from 'react';
import './style';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Spin } from 'antd';


const Dashboard = React.lazy(() => import('./Dashboard'));
const Login = React.lazy(() => import('./Login'));

export function App() {

    return (
        <React.Suspense fallback={<Spin />}>
            <Router>
                <Switch>
                    <Route sensitive path="/login" exact component={Login} />
                    <Route path="/" render={() => <Dashboard />} />
                </Switch>
            </Router>
        </React.Suspense>
    );
}