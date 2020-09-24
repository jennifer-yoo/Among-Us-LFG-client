import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    username: "",
    password: "",
    login: false,
    store: null
  }

  login = () => {
    fetch('http://localhost:3000/api/v1/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(data => {

      console.log(data)
      // localStorage.setItem('login', JSON.stringify({
      //   login: true,
      //   token: data.token
      // }))
    })
  }

  render() {
    return (
      <div>
        <input type="text" onChange={(e) => {this.setState({username: e.target.value})}} />
        <input type="password" onChange={(e) => {this.setState({password: e.target.value})}} />
        <button onClick={() => {this.login()}}>Login</button>
      </div>
    )
  }
}

export default App;
