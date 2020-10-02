import React from 'react';
import UserCard from '../components/UserCard'
import orange from '../images/characters/dead-orange.png'

const CreatorPanelContainer = ({ myGroup }) => {
    const renderUserCards = () => {
        console.log("i am in panel:", myGroup.memberships)

        return myGroup.members.map((member) => {
            return (<UserCard key={member.id} info={member} myGroup={myGroup}/>)
        })
    }

    return (
        <div className="creator-panel">
            {/* <h4 className="creator-header">My Group Info</h4> */}
            { (myGroup.members.length === 0) ? <div className="no-user-panel"><p className="no-user-text">Waiting for players...</p><img className="dead" src={orange} alt="waiting-char"></img></div> : renderUserCards() }
        </div>
    );
}

export default CreatorPanelContainer;