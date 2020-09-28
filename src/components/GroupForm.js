import React, { Component } from 'react';

class GroupForm extends Component {

    state = {  
        map: "",
        numOfImpos: 0,
        confirmEject: null,
        numOfMeetings: 0,
        emcd: 0,
        discussionTime: 0,
        votingTime: 0,
        playerSpeed: 0.0,
        crewVision: 0.0,
        imposVision: 0.0,
        killCd: 0,
        killDistance: "",
        visualTask: null,
        commonTask: 0,
        longTask: 0,
        shortTask: 0,
        skillLevel: "",
        micRequired: null,
        playerLimit: 10
    }

    changeHandler = (event) => {
        console.log(event.target.value)
        event.persist()
        this.setState(()=> ({[event.target.name]: event.target.value}))
    }

    submitHandler = (event) => {
        event.preventDefault()
        event.persist()
        const {map, numOfImpos, confirmEject, numOfMeetings, emcd, discussionTime, votingTime, playerSpeed, crewVision, imposVision, killCd, killDistance, visualTask, commonTask, longTask, shortTask, skillLevel, micRequired, playerLimit} = this.state
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
                map: map,
                num_of_impostors: numOfImpos,
                confirm_ejects: confirmEject,
                num_of_meetings: numOfMeetings,
                em_cd: emcd,
                discussion_time: discussionTime,
                voting_time: votingTime,
                player_speed: playerSpeed,
                crew_vis: crewVision,
                impos_vision: imposVision,
                kill_cd: killCd,
                kill_distance: killDistance,
                visual_task: visualTask,
                common_tasks: commonTask,
                long_tasks: longTask,
                short_tasks: shortTask,
                skill_level: skillLevel,
                mic_required: micRequired,
                player_limit: playerLimit,
                creator_id: userId
            })
        }
        fetch('http://localhost:3001/api/v1/groups', options)
    }

    render() { 
        const {emcd, discussionTime, votingTime, playerSpeed, crewVision, imposVision, killCd} = this.state
        return (  
            <div className="groupform">
                <form onSubmit={this.submitHandler}>
                <label for="map">Map</label><br></br>
                    <select id="map" name="map" onChange={this.changeHandler}>
                        <option value="polus">Polus</option>
                        <option value="skeld">Skeld</option>
                        <option value="mirahq">MIRAHQ</option>
                    </select>
                    
                    <label for="numOfImpos">Number of Impostors</label>
                    <select id="numOfImpos" name="numOfImpos" onChange={this.changeHandler}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    
                    <label for="confirmEject">Confirm Eject Enabled</label>
                    <select id="confirmEject" name="confirmEject" onChange={this.changeHandler}>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <label for="numOfMeetings">Number of Meetings</label>
                    <select id="numOfMeetings" name="numOfMeetings" onChange={this.changeHandler}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>

                    <label for="emcd">Emergency Cooldown</label>
                    <input id="emcd" name="emcd" type="number" min="0" max="60" value={emcd} onChange={this.changeHandler}/>
                    
                    <label for="discussionTime">Discussion Time</label>
                    <input id="discussionTime" name="discussionTime" type="number" min="0" max="120" value={discussionTime} onChange={this.changeHandler}/>

                    <label for="votingTime">Voting Time</label>
                    <input id="votingTime" name="votingTime" type="number" min="0" max="300" value={votingTime} onChange={this.changeHandler}/>

                    <label for="playerSpeed">Player Speed</label>
                    <input id="playerSpeed" name="playerSpeed" type="number" min="0.5" max="3.0" value={playerSpeed} onChange={this.changeHandler}/>

                    <label for="crewVision">Crew Vision</label>
                    <input id="crewVision" name="crewVision" type="number" min="0.25" max="5.0" value={crewVision} onChange={this.changeHandler}/>
    
                    <label for="imposVision">Impostor Vision</label>
                    <input id="imposVision" name="imposVision" type="number" min="0.25" max="5.0" value={imposVision} onChange={this.changeHandler}/>
                    
                    <label for="killCd">Kill Cooldown</label>
                    <input id="killCd" name="killCd" type="number" min="10" max="60" value={killCd} onChange={this.changeHandler}/>

                    <label for="killDistance">Kill Distance</label>
                    <select id="killDistance" name="killDistance" onChange={this.changeHandler}>
                        <option value="short">Short</option>
                        <option value="medium">Medium</option>
                        <option value="long">Long</option>
                    </select>

                    <label for="visualTask">Visual Task</label>
                    <select id="visualTask" name="visualTask" onChange={this.changeHandler}>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <label for="commonTask">Common Task</label>
                    <select id="commonTask" name="commonTask" onChange={this.changeHandler}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>

                    
                    <label for="longTask">Long Task</label>
                    <select id="longTask" name="longTask" onChange={this.changeHandler}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>

                    <label for="shortTask">Short Task</label>
                    <select id="shortTask" name="shortTask" onChange={this.changeHandler}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <label for="skillLevel">Skill Level</label>
                    <select name="skillLevel" onChange={this.changeHandler}>
                        <option value="casual">Casual</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="expert">Expert</option>
                    </select>

                    <label for="micRequired">Mic Required?</label>        
                    <select id="micRequired" name="micRequired" onChange={this.changeHandler}>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <label for="playerLimit">Player Limit</label>
                    <select id="playerLimit" name="playerLimit" onChange={this.changeHandler}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>

                    <button className="submitbtn" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default GroupForm;