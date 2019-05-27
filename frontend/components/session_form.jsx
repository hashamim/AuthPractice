import React from 'react';
import {Link, Redirect} from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleNameFieldChange = this.handleNameFieldChange.bind(this);
        this.handlePasswordFieldChange = this.handlePasswordFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNameFieldChange(e){
        this.setState({username: e.target.value});
    }

    handlePasswordFieldChange(e){
        this.setState({password: e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({},this.state);
        this.props.processForm(user);
        this.setState({loggedin: true});
    }
    render(){
        if (this.state.loggedin){
            return <Redirect to='/' />
        }
        const testProps = {
            t1: 1,
            t2: 2,
            t3: 3,
        };

        const errors = this.props.errors instanceof Array ?
            this.props.errors.map((error,idx) => <li key={idx}>{error}</li>)
        :
            "";
        return <form onSubmit={this.handleSubmit}>
            <h1>Welcome to BenchBnB</h1>
            <ul>{errors}</ul>
            <span>
                Please {this.props.formType} or &nbsp;
                <Link to={this.props.formType === 'login' ? '/signup' : '/login'}>
                    {this.props.formType === 'login' ? "Sign up" : "log in"}
                </Link>
            </span>
            <label>Username:
                <input type="text" onChange={this.handleNameFieldChange} value={this.state.username}/>
            </label>
            <label>Password:
                <input type="password" onChange={this.handlePasswordFieldChange} value={this.state.password}/>
            </label>
            <button >{this.props.formType}</button>
        </form>
    }
}

export default SessionForm;