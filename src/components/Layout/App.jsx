import React from 'react';
import { Spin } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ValideRoute from './ValideRoute';
import './style';

const Dashboard = React.lazy(() => import('./Dashboard'));
const Login = React.lazy(() => import('../User/Login'));

export function App() {

    return (
        <React.Suspense fallback={<Spin />}>
            <Router>
                <Switch>
                    <ValideRoute sensitive exact path="/login" component={Login} />
                    <ValideRoute path="/" render={() => <Dashboard />} />
                </Switch>
            </Router>
        </React.Suspense>
    );
}