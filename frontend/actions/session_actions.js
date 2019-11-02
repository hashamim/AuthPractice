import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = (currentUser) => {
    return {type: RECEIVE_CURRENT_USER,
    user: currentUser,};
};

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const signup = formUser => dispatch => APIUtil.signup(formUser)
    .then(user => dispatch(receiveCurrentUser(user)), ({responseJSON}) => { return dispatch(receiveErrors(responseJSON.error)); });

export const logout = () => dispatch => APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()), ({responseJSON}) => dispatch(receiveErrors(responseJSON.error)));

export const login = formUser => dispatch => APIUtil.login(formUser)
    .then(user => dispatch(receiveCurrentUser(user)), ({responseJSON}) => { return dispatch(receiveErrors(responseJSON.error));});