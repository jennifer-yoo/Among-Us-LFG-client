import React from 'react';
import './App.css';
import Auth from './containers/Auth'
import DashBoard from './containers/DashBoard.js'
import red from './images/characters/red_amongus.png'
import blue from './images/characters/mirror_blue_amongus.png'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import innerSlothLogo from './images/inner-sloth-logo.png'


class App extends React.Component {

  state = {
    token: false,
    login: false,
    signup: false
  }

  checkForLogin = () => {
    if (localStorage.getItem('token')) {
      return true
    } else {
      return false
    }
  }

  setToken = (bool) => {
    if (bool) {
      this.setState({token: true})
    } else {
      this.setState({token: false})
    }
  }

  clickHandler = (e) => {
    e.persist()
    this.setState(() => ({[e.target.name]: !this.state[e.target.name]}))
  }

  logOut = () => {
    localStorage.clear()
    this.setToken(this.checkForLogin())
  }

  render() {

    const { token, login, signup } = this.state

    return (
      <Router>
        <div className="App">
          <div className="logo-container">
            <a className='logo-link' href="http://www.innersloth.com/"><img className="logo" src={innerSlothLogo} alt="Inner Sloth Logo"></img></a>
            <h1 className="header">Among Us LFG</h1>
          </div>
            { token ? 
              <DashBoard setToken={this.setToken} checkLogin={this.checkForLogin}/> :
              <div className="landing-pg"> 
                  <img className="pic" src={red} alt="red"></img>

                  <Auth login={login} signup={signup} clickHandler={this.clickHandler} checkLogin={this.checkForLogin} setToken={this.setToken}/>
                  
                  <img className="pic" src={blue} alt="blue"></img>
              </div> 
            }
            { this.checkForLogin() ? <button className="logoutbutton" onClick={this.logOut}>Logout</button> : null}
        </div>
      </Router>
    );
  }
}

export default App;


