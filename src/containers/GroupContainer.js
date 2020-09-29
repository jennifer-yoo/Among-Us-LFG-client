import React, { Component } from 'react';
import GroupCard from '../components/GroupCard'

class GroupContainer extends Component {
    

    renderCards = () => {
        return this.props.groups.map(el => 
            <GroupCard key={el.id} info={el} handleReceivedGroups={this.props.handleReceivedGroups} deleteHandler={this.props.deleteHandler}/>
        )
    }

    render() { 
        return ( 
            <>
                <div className="groupContainer">
                    {this.renderCards()}
                </div>
            </>
        );
    }
}

export default GroupContainer;