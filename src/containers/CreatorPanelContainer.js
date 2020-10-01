import React from 'react';
import UserCard from '../components/UserCard'


const CreatorPanelContainer = ({ myGroup }) => {
    const renderUserCards = () => {
        console.log("i am in panel:", myGroup)
        return myGroup.members.map((member) => {
            return (
                <UserCard key={member.id} info={member} />
            )
        })
    }

    return (
        <div className="creator-panel">
            {renderUserCards()}
        </div>
    );
}

export default CreatorPanelContainer;