import React, { Component } from 'react';
import GroupForm from '../components/GroupForm'
import GroupCard from '../components/GroupCard'
import { ActionCable } from 'react-actioncable-provider'

class GroupContainer extends Component {
    state = {
    }

    renderCards = () => {
        console.log(this.props.groups)
        return this.props.groups.map(el => 
                <div>
                    <ActionCable 
                        key={el.id} 
                        info={el}
                        channel={ {channel: 'MembershipsChannel', group: el.id} }
                        onReceived={this.props.handleMembers}
                        />
                    <GroupCard key={el.id} info={el}/>
                </div>
        )
    }

    render() { 
        return ( 
            <>
                <GroupForm />
                <div className="groupContainer">
                    {this.renderCards()}
                </div>
            </>
        );
    }
}

export default GroupContainer;