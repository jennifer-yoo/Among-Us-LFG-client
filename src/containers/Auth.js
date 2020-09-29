import React, { Component } from 'react';
import Registration from '../components/auth/Registration'
import LogIn from '../components/auth/LogIn'

const Auth = ({ login, signup, clickHandler, checkLogin, setToken }) => {
    return (  
        <div className="auth">
            { login ? <LogIn checkToken={checkLogin} setToken={setToken} /> : null }
            { signup ? <Registration checkToken={checkLogin} setToken={setToken}/> : null }
            <button className="signup" name="signup" onClick={(e) => clickHandler(e)}>SignUp</button>
            <button className="login "name="login" onClick={(e) => clickHandler(e)}>Login</button>
        </div> 
    );
}

export default Auth;