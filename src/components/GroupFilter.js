import React, { Component } from 'react';

class GroupFilter extends Component {
    state = {  }

    render() { 
        return (
            <div className="filter">
                <label htmlFor="filter-map">Map</label><br></br>
                    <select id="map" name="map" onChange={this.changeHandler}>
                        <option value="polus">Polus</option>
                        <option value="skeld">Skeld</option>
                        <option value="mirahq">MIRAHQ</option>
                    </select>
            </div>
        );
    }
}
 
export default GroupFilter;