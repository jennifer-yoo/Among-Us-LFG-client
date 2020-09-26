import React, { Component } from 'react';
import GroupForm from '../components/GroupForm'

class GroupContainer extends Component {
    state = {}
    render() { 
        return ( 
            <div className="groupContainer">
                <GroupForm />
            </div>
         );
    }
}

export default GroupContainer;