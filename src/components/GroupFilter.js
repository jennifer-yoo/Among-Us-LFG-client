import React, { Component } from 'react';
import shhh from '../images/Among-Us-1.png'

class GroupFilter extends Component {
    

    render() { 
        return (
            <div className="filter">
                <label className="filter-map" htmlFor="filter-map">Map:</label>
                    <select id="map" name="map" onChange={this.props.searchHandler}>
                        <option value="">Any</option>
                        <option value="Polus">Polus</option>
                        <option value="skeld">Skeld</option>
                        <option value="mirahq">MIRAHQ</option>
                    </select>

                <div className="filter-pic">
                    <img className="filter-red"src={shhh} alt="among-us" />
                </div>
                {/* <label htmlFor="skillLevel">Skill Level</label>
                <select name="skillLevel" onChange={this.props.searchHandler}>
                    <option value="">None</option>
                    <option value="Casual">Casual</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="expert">Expert</option>
                </select>

                <label htmlFor="micRequired">Mic Required?</label>        
                    <select id="micRequired" name="micRequired" onChange={this.props.searchHandler}>
                        <option value="">None</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select> */}
            </div>

        );
    }
}

export default GroupFilter;