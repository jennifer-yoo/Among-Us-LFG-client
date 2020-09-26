import React, { Component } from 'react';

class GroupCard extends Component {

    state = {}

    joinHandler = () => {
        const userId = parseInt(localStorage.getItem('userId'))
        const token = localStorage.getItem('token')
        let options = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user_id: userId,
                group_id: `${this.props.info.id}`
            })
        }
        fetch('http://localhost:3001/api/v1/memberships', options)
        .then(res => res.json())
        .then(console.log)
    }

    render() { 
        return (
            <div className="card">
                <p>number of impos: {this.props.info.numOfImpos}</p>
                <p>Creator: {this.props.info.creator_id}</p>
                <button onClick={this.joinHandler}>Join Button</button>
            </div>
        );
    }
}

export default GroupCard;