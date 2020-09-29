import React, { Component } from 'react';
import GroupCard from '../components/GroupCard'

class GroupContainer extends Component {

    checkMembership = () => {
        let allGroups = this.props.groups
        let idArray = []
        
        allGroups.forEach(group => {
            return group.members.forEach(member => idArray.push(member.id))
        })
        return idArray
    }

    renderCards = () => {
        return this.props.groups.map(el => 
            <GroupCard key={el.id} info={el} handleReceivedGroups={this.props.handleReceivedGroups} deleteHandler={this.props.deleteHandler} checkMembership={this.checkMembership}/>
        )
    }

    render() { 
        return ( 
            <div className="group-container">
                {this.renderCards()}
            </div>
        );
    }
}

export default GroupContainer;