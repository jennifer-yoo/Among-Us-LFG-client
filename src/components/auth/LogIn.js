import React, { Component } from 'react';


class LogIn extends Component {

    state = {
        username: "",
        password: ""
    }

    handleSubmit = (event) => {
        const {username, password} = this.state
        event.persist()
        event.preventDefault()
        let options = {
            method: 'POST',
            headers: {
                'content-type':'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }
        fetch('http://localhost:3001/api/v1/login', options)
        .then(res => res.json())
        .then(data => {
            localStorage.setItem("token", data.jwt)
            localStorage.setItem("userId", data.user.id)
            localStorage.setItem("username", data.user.username)
            localStorage.setItem("avatar", data.user.avatar)
            localStorage.setItem("discord", data.user.discord)
            this.props.setToken(this.props.checkToken())
        })
    }

    handleChange = (event) => {
        event.persist()
        this.setState(()=> ({
            [event.target.name]: event.target.value
        }))
    }
    
    render() { 
        const {username, password} = this.state
        return (
            <div className="login-container">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    name="username" 
                    placeholder="Username"
                    value={username} 
                    onChange={this.handleChange} 
                    required/>

                    <input 
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    value={password} 
                    onChange={this.handleChange} 
                    required/>

                    <button className="signin-btn" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default LogIn;