import React from 'react';
import buttonclose from '../images/buttons/button-close.png'
import buttonopen from '../images/buttons/button-open.png'

const hoverHandler = (e) => {
    e.persist()
    console.log("in hver", e.target.src)
    e.target.src = {buttonopen}
}

const UserCard = ({ info, myGroup }) => {
    const ejectHandler = (kickedUserId) => {
        let foundMembership = myGroup.memberships.find(membership =>
            membership.user_id === kickedUserId
        )
        let deletedMembershipId = foundMembership.id
    
        const token = localStorage.getItem("token")
        let options = {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${token}`,
                'content-type': 'application/json',
                'Accept': 'application/json'
            }
        }
        fetch(`http://localhost:3001/api/v1/memberships/${deletedMembershipId}`, options)
    }
    
    return (
        <div className="user-container">
            <div className="user-card">
                <div className="card-avatar">
                    <img src={info.avatar} alt={info.discord}></img>
                </div>
                <div className="card-discord">
                    <p>@{info.username} | Discord: {info.discord}</p>
                </div>
            </div>
            
            <div className="eject-btns" onClick={() => {ejectHandler(info.id)}}>
                <img className="btn-close" src={buttonclose} alt="button-close" onMouseOver={e => (e.currentTarget.src = buttonopen)} onMouseLeave={e => (e.currentTarget.src = buttonclose)}/>
            </div>

        </div>
    );
}
 
export default UserCard;

// class UserCard extends Component {

//     state = {
//         src: 
//     }

//     render() { 
//         console.log('in user card:', info)

//         return (  
//             <div className="user-container">
//             <div className="user-card">
//                 <div className="card-avatar">
//                     <img src={this.props.info.avatar} alt={this.props.info.discord}></img>
//                 </div>
//                 <div className="card-discord">
//                     <p>@{this.props.info.username} | Discord: {this.props.info.discord}</p>
//                 </div>
//             </div>
            
//             <div className="eject-btns">
//                 <img className="btn-close" toggle={this.state.toggle} src={buttonclose} alt="button-close" onClick={() => {this.props.ejectHandler(this.props.info.id)}}></img>
//             </div>

//         </div>
//         );
//     }
// }
 
// export default UserCard;