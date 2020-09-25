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
        .then(res => res.json())
        .then(console.log)
    }

    render() { 
        const {emcd, discussionTime, votingTime, playerSpeed, crewVision, imposVision, killCd} = this.state
        return (  
            <div>
                <form onSubmit={this.submitHandler}>
                    <select name="map" onChange={this.changeHandler}>
                        <option value="polus">Polus</option>
                        <option value="skeld">Skeld</option>
                        <option value="mirahq">MIRAHQ</option>
                    </select>

                    <select name="numOfImpos" onChange={this.changeHandler}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    
                    <select name="confirmEject" onChange={this.changeHandler}>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <select name="numOfMeetings" onChange={this.changeHandler}>
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

                    <input name="emcd" type="number" min="0" max="60" value={emcd} onChange={this.changeHandler}/>
                    
                    <input name="discussionTime" type="number" min="0" max="120" value={discussionTime} onChange={this.changeHandler}/>

                    <input name="votingTime" type="number" min="0" max="300" value={votingTime} onChange={this.changeHandler}/>

                    <input name="playerSpeed" type="number" min="0.5" max="3.0" value={playerSpeed} onChange={this.changeHandler}/>

                    <input name="crewVision" type="number" min="0.25" max="5.0" value={crewVision} onChange={this.changeHandler}/>
    
                    <input name="imposVision" type="number" min="0.25" max="5.0" value={imposVision} onChange={this.changeHandler}/>

                    <input name="killCd" type="number" min="10" max="60" value={killCd} onChange={this.changeHandler}/>

                    <select name="killDistance" onChange={this.changeHandler}>
                        <option value="short">Short</option>
                        <option value="medium">Medium</option>
                        <option value="long">Long</option>
                    </select>

                    <select name="visualTask" onChange={this.changeHandler}>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <select name="commonTask" onChange={this.changeHandler}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>

                    <select name="longTask" onChange={this.changeHandler}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>

                    <select name="shortTask" onChange={this.changeHandler}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <select name="skillLevel" onChange={this.changeHandler}>
                        <option value="casual">Casual</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="expert">Expert</option>
                    </select>

                    <select name="micRequired" onChange={this.changeHandler}>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <select name="playerLimit" onChange={this.changeHandler}>
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

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default GroupForm;