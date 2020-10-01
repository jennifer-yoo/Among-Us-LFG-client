import React, { Component } from 'react';
import GroupContainer from './GroupContainer.js'
import { ActionCableConsumer } from 'react-actioncable-provider'
import '../DashBoard.css'
import { Link } from 'react-router-dom';
import CreatorPanelContainer from './CreatorPanelContainer'
// import { ReactCSSTransitionGroup } from 'react-transition-group'; // ES6


class DashBoard extends Component {
    state = {
        groups: [],
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
        console.log("add membership:", response)

        const { membership } = response;
        const groups = [...this.state.groups];
        const foundGroup = groups.find(
        group => parseInt(group.id) ===  parseInt(membership.group_id)
        );
        foundGroup.members = [...foundGroup.members, membership.user];
        foundGroup.memberships = [...foundGroup.memberships, membership]
        this.setState({groups})
    };



    deleteHandler = (id) => {
        const token = localStorage.getItem("token")
        let options = {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${token}`,
                'content-type': 'application/json',
                'Accept': 'application/json'
            }
        }
        fetch(`http://localhost:3001/api/v1/groups/${id}`, options)
    }

    handleDeletedGroup = response => {
        const { group } = response
        const filteredGroup = [...this.state.groups].filter(
            el => parseInt(el.id) !==  parseInt(group.id)
            );
        this.setState({groups: filteredGroup})
    }

    handleDeletedMembership = response => {
        const { membership } = response
        const groups = [...this.state.groups];
        let foundGroup = groups.find(group => parseInt(group.id) === parseInt(membership.group_id))
        foundGroup.members = foundGroup.members.filter(member => member.id !== membership.user_id)
        foundGroup.memberships = foundGroup.memberships.filter(ms => ms.id !== membership.id)
        this.setState({ groups })
    }

    checkIfCreator = () => {
        const currentId = parseInt(localStorage.getItem("userId"))
        let groups = [...this.state.groups]
        let foundGroup = groups.find(group => group.creator_id == currentId)
        return foundGroup
    }

    render() { 
        console.log("checking if creator:", this.checkIfCreator())
        const {groups} = this.state
        return (
            <div className="dashboard">
                <ActionCableConsumer
                    key={"allGroups"}
                    channel={{channel: 'GroupsChannel' }}
                    onReceived={this.updateGroups} />
                <ActionCableConsumer 
                    key={"addMember"}
                    channel={ {channel: 'GroupChannel'} }
                    onReceived={this.handleReceivedGroups}/>
                <ActionCableConsumer 
                    key={"deleteGroup"}
                    channel={ {channel: 'DeleteChannel'} }
                    onReceived={this.handleDeletedGroup}/>
                <ActionCableConsumer 
                    key={"removeMember"}
                    channel={ {channel: 'MembershipsChannel'} }
                    onReceived={this.handleDeletedMembership}/>
                {/* <button className="togglebtn" toggle={this.state.toggle ? "true" : "false"} onClick={this.toggleHandler}>Create a New Group</button> */}
                {/* {this.state.toggle ? <GroupForm /> : null} */}
                {this.state.groups.length ? <GroupContainer groups={groups} handleReceivedGroups={this.handleReceivedGroups} deleteHandler={this.deleteHandler}/> : null}
                {this.checkIfCreator() ? <CreatorPanelContainer myGroup={this.checkIfCreator()}/> : null }
            </div>
        );
    }
}

export default DashBoard;