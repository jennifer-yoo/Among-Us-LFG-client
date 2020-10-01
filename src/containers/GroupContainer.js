import React, { Component } from 'react';
import GroupCard from '../components/GroupCard'
import GroupForm from '../components/GroupForm'


class GroupContainer extends Component {

    state = {
        toggle: false
    }

    toggleHandler = () => {
        this.setState((previousState) => ({toggle: !previousState.toggle}))
    }

    checkMembership = () => {
        let allGroups = this.props.groups
        let idArray = []
        
        allGroups.forEach(group => {
            return group.members.forEach(member => idArray.push(member.id))
        })
        return idArray
    }

    checkCreator = () => {
        let allGroups = this.props.groups
        let idArray = []

        allGroups.forEach(group => {
            idArray.push(group.creator_id)
        })

        return idArray
    }

    renderCards = () => {
        return this.props.groups.map(el => 
            <GroupCard key={el.id} info={el} handleReceivedGroups={this.props.handleReceivedGroups} deleteHandler={this.props.deleteHandler} checkMembership={this.checkMembership} checkCreator={this.checkCreator}/>
        )
    }

    render() { 
        console.log("in group container pprops:", this.props.groups)
        return ( 
            <div className="group-container">
                <button className="togglebtn" toggle={this.state.toggle ? "true" : "false"} onClick={this.toggleHandler}>Create a New Group</button>
                {this.state.toggle ? <GroupForm /> : null}
                {this.renderCards()}
            </div>
        );
    }
}

export default GroupContainer;