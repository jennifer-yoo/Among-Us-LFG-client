import React, { Component } from 'react';
import GroupContainer from './GroupContainer.js'

class DashBoard extends Component {
    state = {  }

    logOut = () => {
        localStorage.clear()
        this.props.setToken(this.props.checkLogin())
    }

    render() { 
        
        return (
            <div>
                <h1>Dashboard</h1>
                <GroupContainer />
                <br></br>
                <button onClick={this.logOut}>Logout</button>
            </div>
        );
    }
}

export default DashBoard;