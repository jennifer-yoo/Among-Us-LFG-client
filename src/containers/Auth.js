import React, { Component } from 'react';
import Registration from '../components/auth/Registration'
import LogIn from '../components/auth/LogIn'

class Auth extends Component {
    
    state = {

    }

    render() { 
        const { login, signup, clickHandler, checkLogin, setToken } = this.props
        return (
            <div>
                { login ? <LogIn checkToken={checkLogin} setToken={setToken} /> : null }
                { signup ? <Registration checkToken={checkLogin} setToken={setToken}/> : null }
                <button name="signup" onClick={(e) => clickHandler(e)}>Sign Up</button>
                <button name="login" onClick={(e) => clickHandler(e)}>Login</button>
            </div>
        );
    }
}

export default Auth;