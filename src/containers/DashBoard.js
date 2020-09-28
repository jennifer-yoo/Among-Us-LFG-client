import React, { Component } from 'react';
import GroupContainer from './GroupContainer.js'
import { ActionCableConsumer } from 'react-actioncable-provider'
import GroupForm from '../components/GroupForm'
import '../DashBoard.css'
import { Link } from 'react-router-dom';


class DashBoard extends Component {
    state = {
        groups: [],
        toggle: false,
    }

    componentDidMount() {
        const token = localStorage.getItem("token")
        let options = {
            headers: {'Authorization': `Bearer ${token}`}
        }
        fetch('http://localhost:3001/api/v1/groups', options)
        .then(resp => resp.json())
        .then(data => {
            this.setState({groups: data})
        })
    }

    updateGroups = response => {
        console.log(response)
        this.setState(()=> ({
            groups: [...this.state.groups, response.group]
        })) 
    }

    handleReceivedGroups = response => {
        console.log("response:", response)
        const { membership } = response;
        const groups = [...this.state.groups];
        const foundGroup = groups.find(
        group => parseInt(group.id) ===  parseInt(membership.group.id)
        );
        foundGroup.members = [...foundGroup.members, membership.user];
        this.setState({groups})
    };

    logOut = () => {
        localStorage.clear()
        this.props.setToken(this.props.checkLogin())
    }

    toggleHandler = () => {
        this.setState((previousState) => ({toggle: !previousState.toggle}))
    }

    render() { 
        console.log(this.state)
        const {groups} = this.state
        return (
            <div className="dashboard">
                <ActionCableConsumer
                    channel={{channel: 'GroupsChannel' }}
                    onReceived={this.updateGroups} />
                <ActionCableConsumer 
                    channel={ {channel: 'GroupChannel'} }
                    onReceived={this.handleReceivedGroups}/>
                <h1>Dashboard</h1>
                <button className="submitbtn" toggle={this.state.toggle} onClick={this.toggleHandler}>Create a New Group</button>
                { this.state.toggle ? <GroupForm /> : null}
                {this.state.groups.length ? <GroupContainer groups={groups} handleReceivedGroups={this.handleReceivedGroups} /> : null}
                <br></br>
                <button className="logoutbutton" onClick={this.logOut}>Logout</button>
            </div>
        );
    }
}

export default DashBoard;