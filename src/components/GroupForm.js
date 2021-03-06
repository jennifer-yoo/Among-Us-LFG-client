import React, { Component } from 'react';

class GroupForm extends Component {

    state = {  
        map: "Polus",
        numOfImpos: 1,
        confirmEject: true,
        numOfMeetings: 1,
        emcd: 1,
        discussionTime: 0,
        votingTime: 0,
        playerSpeed: 0.5,
        crewVision: 0.25,
        imposVision: 0.25,
        killCd: 10,
        killDistance: "Short",
        visualTask: true,
        commonTask: 0,
        longTask: 0,
        shortTask: 0,
        skillLevel: "Casual",
        micRequired: true,
        playerLimit: 5,
        gameCode: ""
    }

    changeHandler = (event) => {
        console.log(event.target.value)
        event.persist()
        this.setState(()=> ({[event.target.name]: event.target.value}))
    }

    submitHandler = (event) => {
        event.preventDefault()
        event.persist()
        const {map, numOfImpos, confirmEject, numOfMeetings, emcd, discussionTime, votingTime, playerSpeed, crewVision, imposVision, killCd, killDistance, visualTask, commonTask, longTask, shortTask, skillLevel, micRequired, playerLimit, gameCode} = this.state
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
                visual_tasks: visualTask,
                common_tasks: commonTask,
                long_tasks: longTask,
                short_tasks: shortTask,
                skill_level: skillLevel,
                mic_required: micRequired,
                player_limit: playerLimit,
                creator_id: userId,
                game_code: gameCode
            })
        }
        fetch('http://localhost:3001/api/v1/groups', options)
    }

    render() { 
        const {emcd, discussionTime, votingTime, playerSpeed, crewVision, imposVision, killCd, gameCode} = this.state
        return (  
            <div className="groupform">
                <form className="new-group-form" onSubmit={this.submitHandler}>

                    <div className="form-info">
                        <label htmlFor="map">Map</label>
                        <select id="map" name="map" onChange={this.changeHandler}>
                            <option value="polus">Polus</option>
                            <option value="skeld">Skeld</option>
                            <option value="mirahq">MIRAHQ</option>
                        </select>
                        
                        <label htmlFor="numOfImpos">Number of Impostors</label>
                        <select id="numOfImpos" name="numOfImpos" onChange={this.changeHandler}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        
                        <label htmlFor="confirmEject">Confirm Eject Enabled</label>
                        <select id="confirmEject" name="confirmEject" onChange={this.changeHandler}>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>

                        <label htmlFor="numOfMeetings">Number of Meetings</label>
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
                        
                        <label htmlFor="emcd">Emergency Cooldown</label>
                        <input id="emcd" name="emcd" type="number" min="0" max="60" value={emcd} onChange={this.changeHandler}/>
                    </div> 

                    <div className="form-info">
                        <label htmlFor="discussionTime">Discussion Time</label>
                        <input id="discussionTime" name="discussionTime" type="number" min="0" max="120" value={discussionTime} onChange={this.changeHandler}/>

                        <label htmlFor="votingTime">Voting Time</label>
                        <input id="votingTime" name="votingTime" type="number" min="0" max="300" value={votingTime} onChange={this.changeHandler}/>

                        <label htmlFor="playerSpeed">Player Speed</label>
                        <input id="playerSpeed" name="playerSpeed" type="number" min="0.5" max="3.0" value={playerSpeed} onChange={this.changeHandler}/>

                        <label htmlFor="crewVision">Crew Vision</label>
                        <input id="crewVision" name="crewVision" type="number" min="0.25" max="5.0" value={crewVision} onChange={this.changeHandler}/>
        
                        <label htmlFor="imposVision">Impostor Vision</label>
                        <input id="imposVision" name="imposVision" type="number" min="0.25" max="5.0" value={imposVision} onChange={this.changeHandler}/>
                    </div> 
                    
                    
                    
                    

                    <div className="form-info">
                        <label htmlFor="killCd">Kill Cooldown</label>
                        <input id="killCd" name="killCd" type="number" min="10" max="60" value={killCd} onChange={this.changeHandler}/>

                        <label htmlFor="killDistance">Kill Distance</label>
                        <select id="killDistance" name="killDistance" onChange={this.changeHandler}>
                            <option value="short">Short</option>
                            <option value="medium">Medium</option>
                            <option value="long">Long</option>
                        </select>

                        <label htmlFor="visualTask">Visual Task</label>
                        <select id="visualTask" name="visualTask" onChange={this.changeHandler}>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>

                        <label htmlFor="commonTask">Common Task</label>
                        <select id="commonTask" name="commonTask" onChange={this.changeHandler}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        
                        <label htmlFor="longTask">Long Task</label>
                        <select id="longTask" name="longTask" onChange={this.changeHandler}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div> 

                    <div className="form-info">
                        <label htmlFor="shortTask">Short Task</label>
                        <select id="shortTask" name="shortTask" onChange={this.changeHandler}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <label htmlFor="skillLevel">Skill Level</label>
                        <select name="skillLevel" onChange={this.changeHandler}>
                            <option value="casual">Casual</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="expert">Expert</option>
                        </select>

                        <label htmlFor="micRequired">Mic Required?</label>        
                        <select id="micRequired" name="micRequired" onChange={this.changeHandler}>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>

                        <label htmlFor="playerLimit">Player Limit</label>
                        <select id="playerLimit" name="playerLimit" onChange={this.changeHandler}>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                        
                        <label htmlFor="gameCode">Game Code</label>
                        <input required name="gameCode" value={gameCode} onChange={this.changeHandler}></input>
                    </div> 

                    <button className="new-submit" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default GroupForm;