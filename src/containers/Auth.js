import React, { Component } from 'react';
import Registration from '../components/auth/Registration'
import LogIn from '../components/auth/LogIn'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const Auth = ({ login, signup, clickHandler, checkLogin, setToken }) => {
    const authLogic = () => {
        if (!signup && !login) {
            return <>
                <Link to="/users/new"><button className="signup" name="signup" onClick={(e) => clickHandler(e)}>SignUp</button></Link>
                <Link to="/login"><button className="login "name="login" onClick={(e) => clickHandler(e)}>Login</button></Link>  
            </>
        } else if ( login ) {
            return <>
                <LogIn checkToken={checkLogin} setToken={setToken} />
                <button className="login "name="login" onClick={(e) => clickHandler(e)}>Back</button>    
            </>
        } else if (signup) {
            return <>
                <Registration checkToken={checkLogin} setToken={setToken}/>
                <button className="signup" name="signup" onClick={(e) => clickHandler(e)}>Back</button>
            </>
        }
    }

    return (  
        // <Router>
        //     <div className="auth">
        //         <Switch>
        //             <div className="auth-route">
        //                 <Route path="/login">
        //                     { login ? <LogIn checkToken={checkLogin} setToken={setToken} /> : null }
        //                 </Route>
        //                 <Route path="/users/new">
        //                     { signup ? <Registration checkToken={checkLogin} setToken={setToken}/> : null }
        //                 </Route>   
        //             </div>
        //         </Switch>

        //         <Link to="/users/new"><button className="signup" name="signup" onClick={(e) => clickHandler(e)}>SignUp</button></Link>
        //         <Link to="/login"><button className="login "name="login" onClick={(e) => clickHandler(e)}>Login</button></Link>  
        //     </div>
        // </Router>
        <div className="auth">
            {authLogic()}
        </div>
    );
}

export default Auth;