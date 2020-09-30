import React, { Component } from 'react';


class GroupCard extends Component {

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

    leaveHandler = () => {
        const currentId = parseInt(localStorage.getItem('userId'))
        let membership = this.props.info.memberships.find(ms => ms.user_id === currentId)
        console.log("memberships:", this.props.info.memberships)
        let membershipId = membership.id

        const token = localStorage.getItem("token")
        let options = {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${token}`,
                'content-type': 'application/json',
                'Accept': 'application/json'
            }
        }
        fetch(`http://localhost:3001/api/v1/memberships/${membershipId}`, options)
    }

    currentMembers = () => {
        return this.props.info.members.map (el =>
            <>
                {/* <span display="none" className="member-username"><p>{el.username}</p></span> */}
                <div className="member-avatar-container">
                    <img className="member-avatar" src={el.avatar} alt={el.discord}></img>
                </div>
            </>
        )
    }

    getCreatorInfo = () => {
        const { username, avatar, discord } = this.props.info.creator
        return (
            <div className="creator">
                {/* <p>Creator: {username}</p> */}
                <div className="creator-avatar-container">
                    <img className="creator-avatar" src={avatar} alt={discord}></img>
                </div>
            </div>
        )
    }

    buttonLogic = () => {
        const { creator, members, id } = this.props.info
        let currentId = parseInt(localStorage.getItem("userId"))
        let creatorId = creator.id

        if (this.props.checkCreator().includes(currentId)) {
            if (currentId === creatorId) {
                return <button className="deletebtn" onClick={() => {this.props.deleteHandler(id)}}>Delete</button>
            } else {
                return <p>You have already created a group and can only be a member of one group</p> 
            }
        } else if ((members.length === 9) && (members.find(member => member.id === currentId))) {
            return  <>
                <p><strong>Group is currently full</strong></p>
                <button className="leavebtn" onClick={this.leaveHandler}>Leave Group</button> </>
        } else if ((members.length === 9) && (members.find(member => member.id !== currentId))) {
            return <p><strong>Group is currently full</strong></p>
        } else if (this.props.checkMembership().includes(currentId)) {
            if (members.find(member => member.id === currentId)) {
                return <>
                    <button className="leavebtn" onClick={this.leaveHandler}>Leave Group</button>
                    <p>You are already part of this group</p></>
                } else {
                    return <p>You are already part of another group</p>
                }
        } else {
            return <button className="joinbtn" onClick={this.joinHandler}>Join Button</button>
        }
    }

    skillCss = () => {
        if (this.props.info.skill_level === "Casual") {
            return <div className="skill-green"></div>
        } else if (this.props.info.skill_level === "Intermediate") {
            return <div className="skill-yellow"></div>
        } else {
            return <div className="skill-red"></div>
        }
    }

    render() { 
        console.log(this.props.info.memberships)
        const { map, num_of_impostors, confirm_ejects, num_of_meetings, em_cd, discussion_time, voting_time, player_speed, crew_vis, impos_vision, kill_cd, kill_distance, visual_tasks, common_tasks, long_tasks, short_tasks, skill_level, mic_required, player_limit, members} = this.props.info
        return (
            <div className="card">
                {this.getCreatorInfo()}
                <div className="group-members">
                    {this.currentMembers()}
                </div>

                <div className="skill-level">{this.skillCss()} {skill_level}</div>

                {/* <div> </div> */}

                {/* <div className="advanced-info"> */}
                    {/* <p className="active-members">{1 + members.length} / {player_limit}</p>

                    Map: {map} 
                    <br></br>
                    Number of Imposters: {num_of_impostors} 
                    <br></br>
                    Confirm Eject Enabled: {confirm_ejects ? "Yes" : "No"}
                    <br></br>
                    Number of Meetings: {num_of_meetings}
                    <br></br>
                    Emergency Cooldown: {em_cd} seconds
                    <br></br>
                    Discussion Time: {discussion_time} seconds
                    <br></br>
                    Voting Time : {voting_time} seconds
                    <br></br>
                    Player Speed: {player_speed}x
                    <br></br>
                    Crew Vision: {crew_vis}x
                    <br></br>
                    Imposter Vision: {impos_vision}x
                    <br></br>
                    Kill Cooldown: {kill_cd} seconds
                    <br></br>
                    Kill Distance: {kill_distance}
                    <br></br>
                    View Visual Tasks: {visual_tasks ? "Yes" : "No"}
                    <br></br>
                    Number of Common Tasks: {common_tasks}
                    <br></br>
                    Number of Long Tasks: {long_tasks}
                    <br></br>
                    Number of Short Tasks: {short_tasks}
                    <br></br>
                    Skill Level: {skill_level}
                    <br></br>
                    Mic Required: {mic_required ? "Yes" : "No"}
                </div> */}
                
                {this.buttonLogic()}
            </div>
        );
    }
}

export default GroupCard;