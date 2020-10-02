import React, { Component } from 'react';

class Registration extends Component {

    state = {
        username: "",
        password: "",
        discord: "",
        avatar: "",
        errors: "", // CATCH ERRORS WHEN SIGNING UP IN OUR HANDLE SUBMIT
    }

    handleSubmit = (event) => {
        const {username, password, discord, avatar} = this.state

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
                password: password,
                discord: discord,
                avatar: `${ avatar === "" ? "https://img.icons8.com/ultraviolet/40/000000/among-us.png" : avatar }`
            })
        }
        fetch('http://localhost:3001/api/v1/users', options)
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
        const {username, password, discord, avatar} = this.state
        return (
            <div className="signup-container">
                <form className="signup-form" onSubmit={this.handleSubmit}>
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

                    <input 
                    type="text" 
                    name="avatar" 
                    placeholder="Upload your Profile pic"
                    value={avatar} 
                    onChange={this.handleChange} 
                    />

                    <input 
                    type="text" 
                    name="discord" 
                    placeholder="Discord Username"
                    value={discord} 
                    onChange={this.handleChange} 
                    required/>

                    <button className="signin-btn" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Registration;
