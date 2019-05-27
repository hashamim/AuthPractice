import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/session_actions';
import {Link} from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout(){
        this.props.greetingLogout();
    }

    render(){
        const user = this.props.currentUser ? (
            <>
                <h1>Greetings, {this.props.currentUser.username}</h1> 
                <button onClick={this.handleLogout}>Logout</button>
            </>
            )
            :(
                <>
                    <Link to="/signup">Sign Up!</Link>
                    &nbsp;
                    <Link to="/login">Log In!</Link>
                </>
            );
        return (
            <header>
                {user}
            </header>
        )
    }
    
}

const msp = (state, ownProps) => {
    const {id} = state.session;
    const currentUser = state.entities.users[id];
    return {
        currentUser,
    };
};

const mdp = (dispatch, ownProps) => {
    return {
        greetingLogout: () => dispatch(logout()),
    };
};

export default connect(msp,mdp)(Greeting);