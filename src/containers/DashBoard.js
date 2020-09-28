import React, { Component } from 'react';
import GroupContainer from './GroupContainer.js'
import { ActionCableConsumer } from 'react-actioncable-provider'
import GroupForm from '../components/GroupForm'
import '../DashBoard.css'

class DashBoard extends Component {
    state = {
        groups: []
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

    handleReceivedMembership = response => {
        console.log(response)
        const { membership } = response;
        const groups = [...this.state.groups];
        const group = groups.find(
        group => parseInt(group.id) ===  parseInt(membership.group.id)
        );
        group.members = [...group.members, membership];
        this.setState({ groups });
    };

    logOut = () => {
        localStorage.clear()
        this.props.setToken(this.props.checkLogin())
    }

    render() { 
        const {groups} = this.state
        return (
            <div className="dashboard">
                <ActionCableConsumer
                    channel={{channel: 'GroupsChannel' }}
                    onReceived={this.updateGroups} />
                <h1>Dashboard</h1>
                <GroupForm />
                {this.state.groups.length ? <GroupContainer groups={groups} handleMembers={this.handleReceivedMembership} /> : null}
                <br></br>
                <button className="logoutbutton" onClick={this.logOut}>Logout</button>
            </div>
        );
    }
}

export default DashBoard;