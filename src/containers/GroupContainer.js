import React, { Component } from 'react';
import GroupForm from '../components/GroupForm'
import GroupCard from '../components/GroupCard'

class GroupContainer extends Component {
    state = {
        group: []
    }

    componentDidMount() {
        const token = localStorage.getItem("token")
        let options = {
            headers: {'Authorization': `Bearer ${token}`}
        }
        fetch('http://localhost:3001/api/v1/groups', options)
        .then(resp => resp.json())
        .then(data => {
            this.setState({group: data})
        })
    }

    renderCards = () => {
        return this.state.group.map(el => 
            <GroupCard key={el.id} info={el}/>
        )
    }

    render() { 
        console.log(this.state.group)
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