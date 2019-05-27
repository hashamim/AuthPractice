import React from 'react';
import ReactDOM from 'react-dom';
import {login, logout, signup } from "./actions/session_actions";
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const root = document.getElementById('root');

    // TEST
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    //TEST


    
    ReactDOM.render(<Root store={store} />, root);
   

});

