import React from 'react';
import {connect } from 'react-redux';
import {loggingIn} from '../actions';


class LoginFrom extends React.Component {
    state = {
        credentials : {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({credentials: {...this.state.credentials, [e.target.name]:e.target.value }}) 
    }

    handleLogin = e => {
        e.preventDefault();
        this.props.loggingIn(this.state.credentials)
        .then(()=> this.props.history.push('/friends'))
    }

    render (){ 
        return (
            <form onSubmit= {this.handleLogin}>
                <fieldset>
                    Username : <input 
                    type = 'text' 
                    name = 'username'
                    value = {this.state.credentials.username}
                    onChange = {this.handleChange} />
            
                    Password : <input 
                    type = 'password'
                    name = 'password'
                    value = {this.state.credentials.password}
                    onChange = {this.handleChange} />
                 </fieldset>     
                 <button type = 'submit'>Submit</button>
            </form>
        )
    }
}

export default connect (null, { loggingIn })(LoginFrom);
