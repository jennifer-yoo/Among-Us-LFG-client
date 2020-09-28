import React from 'react';
import './App.css';
import Auth from './containers/Auth'
import DashBoard from './containers/DashBoard.js'
import red from './images/characters/red_amongus.png'
import blue from './images/characters/mirror_blue_amongus.png'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GroupForm from './components/GroupForm'


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
    return (
      <Router>
        <div className="App">
          { this.state.token ? 
            <h4 className="dheader">Among Us LFG</h4> : 
            <>
              <h1 className="header">Among Us LFG</h1>

              <div className="firstpic">
                <img src={red} alt="red"></img>
              </div>

              <div className="secondpic">
                <img src={blue} alt="blue"></img>
              </div>
            </>  
          }

          
          { this.state.token ? <DashBoard setToken={this.setToken} checkLogin={this.checkForLogin}/> : <Auth login={this.state.login} signup={this.state.signup} clickHandler={this.clickHandler} checkLogin={this.checkForLogin} setToken={this.setToken}/>}
          <Route path='api/v1/groups/new' component={GroupForm} />
        </div>
      </Router>
    );
  }
}

export default App;
