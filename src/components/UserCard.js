import React from 'react';

const UserCard = ({ info }) => {
    console.log('in user card:', info)
    return (
        <div className="user-card">
            <div className="card-avatar">
                <img src={info.avatar} alt={info.discord}></img>
            </div>
            <div className="card-discord">
                <p>@{info.username} | Discord: {info.discord}</p>
            </div>
        </div>
    );
}
 
export default UserCard;