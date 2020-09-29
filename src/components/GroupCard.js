import React, { Component } from 'react';

class GroupCard extends Component {

    state = {}

    joinHandler = () => {
        const userId = parseInt(localStorage.getItem('userId'))
        const token = localStorage.getItem('token')
        let options = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user_id: userId,
                group_id: `${this.props.info.id}`
            })
        }
        fetch('http://localhost:3001/api/v1/memberships', options)
    }

    currentMembers = () => {
        return this.props.info.members.map (el =>
            <>
                <p>{el.username}</p> <img src={el.avatar} alt={el.discord}></img>
            </>
        )
    }

    getCreatorInfo = () => {
        let username = localStorage.getItem("username")
        let avatar = localStorage.getItem("avatar")
        let discord = localStorage.getItem("username")

        return (
            <div className="creator">
                <h3>Creator: {username}</h3>
                <img src={avatar} alt={discord}></img>
            </div>
        )
    }



    render() { 
        return (
            <div className="card">
                {this.getCreatorInfo()}
                <div className="members">
                    <h4>Current Members:</h4>
                    <p>{this.props.info.members.length} / {this.props.info.playerLimit}</p>
                    {this.currentMembers()}
                </div>
                {/* <p>Map: {this.props.info.map}</p>
                <p>Number of Imposters: {this.props.info.numOfImpos}</p>
                <p>Confirm Eject Enabled: {this.props.info.confirmEject}</p>    
                <p>Number of Meetings: {this.props.info.numOfMeetings}</p>    
                <p>Emergency Cooldown: {this.props.info.emcd} seconds</p>    
                <p>Discussion Time: {this.props.info.discussionTime} seconds</p>
                <p>Number of Imposters: {this.props.info.numOfImpos}</p>
                <p>Voting Time : {this.props.info.votingTime} seconds</p>    
                <p>Player Speed: {this.props.info.playerSpeed}x</p>    
                <p>Crew Vision: {this.props.info.crewVision}x</p>    
                <p>Imposter Vision: {this.props.info.imposVision}x</p>    
                <p>Kill Cooldown: {this.props.info.killCd} seconds</p>    
                <p>Kill Distance: {this.props.info.killDistance}</p>  
                <p>View Visual Tasks: {this.props.info.visualTask}</p>  
                <p>Number of Common Tasks: {this.props.info.commonTask}</p>
                <p>Number of Long Tasks: {this.props.info.longTask}</p>
                <p>Skill Level: {this.props.info.skillLevel}</p>
                <p>Mic Required: {this.props.info.micRequired}</p> */}
                <p>
                    Map: {this.props.info.map} 
                    Number of Imposters: {this.props.info.numOfImpos} 
                    Confirm Eject Enabled: {this.props.info.confirmEject}
                    Number of Meetings: {this.props.info.numOfMeetings}
                    Emergency Cooldown: {this.props.info.emcd} seconds
                    Discussion Time: {this.props.info.discussionTime} seconds
                    Voting Time : {this.props.info.votingTime} seconds
                    Player Speed: {this.props.info.playerSpeed}x
                    Crew Vision: {this.props.info.crewVision}x
                    Imposter Vision: {this.props.info.imposVision}x
                    Kill Cooldown: {this.props.info.killCd} seconds
                    Kill Distance: {this.props.info.killDistance}
                    View Visual Tasks: {this.props.info.visualTask}
                    Number of Common Tasks: {this.props.info.commonTask}
                    Number of Long Tasks: {this.props.info.longTask}
                    Number of Short Tasks: {this.props.info.shortTask}
                    Skill Level: {this.props.info.skillLevel}
                    Mic Required: {this.props.info.micRequired}
                </p>
                
                <button className="joinbtn" onClick={this.joinHandler}>Join Button</button>
                <button className="deletebtn" onClick={() => {this.props.deleteHandler(this.props.info.id)}}>Delete</button>
            </div>
        );
    }
}

export default GroupCard;