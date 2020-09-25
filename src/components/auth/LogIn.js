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
            console.log(data)
        })
    }

    handleChange = (event) => {
        event.persist()
        this.setState(()=> ({
            [event.target.name]: event.target.value
        }))
    }

    testGet = () => {
        const token = localStorage.getItem("token")
        let options = {
            headers: {'Authorization': `Bearer ${token}`}
        }
        fetch('http://localhost:3001/api/v1/users', options)
        .then(res => res.json())
        .then(console.log)
    }
    

    render() { 
        const {username, password} = this.state
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

                    <button type="submit">Submit</button>
                </form>
                <button onClick={this.testGet}>Test Get from Users</button>
            </div>
        );
    }
}

export default LogIn;