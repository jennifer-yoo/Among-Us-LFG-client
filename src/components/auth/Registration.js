import React, { Component } from 'react';

class Registration extends Component {

    state = {
        username: "",
        password: "",
        discord: "",
        avatar: "",
        errors: "",
    }

    handleSubmit = (event) => {
        const {username, password, discord, avatar} = this.state

        if (avatar === "") {
            this.setState({avatar: "https://lh3.googleusercontent.com/VHB9bVB8cTcnqwnu0nJqKYbiutRclnbGxTpwnayKB4vMxZj8pk1220Rg-6oQ68DwAkqO=s360-rw"})
        }

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
                avatar: avatar
            })
        }
        fetch('http://localhost:3001/api/v1/users', options)
        .then(res => res.json())
        .then(console.log)
        this.props.setToken(this.props.checkToken())
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    name="username" 
                    value={username} 
                    onChange={this.handleChange} 
                    required/>

                    <input 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={this.handleChange} 
                    required/>

                    <input 
                    type="text" 
                    name="avatar" 
                    value={avatar} 
                    onChange={this.handleChange} 
                    />

                    <input 
                    type="text" 
                    name="discord" 
                    value={discord} 
                    onChange={this.handleChange} 
                    required/>

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Registration;
