import React from 'react';
import './App.css';
import Auth from './containers/Auth'
import DashBoard from './containers/DashBoard.js'

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

  render() {
    console.log(this.state.token)
    return (
      <div className="App">
        <h1>Among Us LFG</h1>
        <h3>Welcome!</h3>
        { this.state.token ? <DashBoard setToken={this.setToken} checkLogin={this.checkForLogin}/> : <Auth login={this.state.login} signup={this.state.signup} clickHandler={this.clickHandler} checkLogin={this.checkForLogin} setToken={this.setToken}/>}
        {/* { this.state.token ? <GroupContainer /> : null} */}
      </div>
    );
  }
}

export default App;
