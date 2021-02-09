import React from 'react'
import SignUp from '../pages/SignUp'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';

export default function Routes() {
    return (
        <Router>
            <div>
                <Switch>
                    <PrivateRoute exact path="/">
                        <Dashboard />
                    </PrivateRoute>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
