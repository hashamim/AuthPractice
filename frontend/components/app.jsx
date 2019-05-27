import React from 'react';
import Greeting from './greeting';
import { Switch, Route } from 'react-router-dom';
import Signup from './signup_form_container';
import Login from './login_form_container';
export default (props) => (
    <>
        <h1>Bench BnB</h1>
        <Greeting />
        <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
        </Switch>
    </>
);