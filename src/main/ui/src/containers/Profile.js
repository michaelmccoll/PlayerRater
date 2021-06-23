import {useState, useEffect} from 'react';
import React from 'react';
import './Profile.css';
import pic from '../imgs/messi/messi.jpeg';

const Profile = ({profile,playerId}) => {

    return(
        <>
        <div className="profileCardWrapper">
            <img src={pic}/>
            <div className="profileCard" style={{borderColor: profile.team.primaryColour}}>
                <div className="badge">
                    <img className="badge" src={profile.team.badge}/>
                </div>

                <div className="games">
                    <h5>GAMES </h5>
                </div>

                <div className="goals">
                    <h5>GOALS {profile.stats[0].goals}</h5>
                </div>
                
                <div className="assists">
                    <h5>ASSISTS {profile.stats[0].assists}</h5>
                </div>

                <div className="POTM">
                    <h5>POTM</h5>
                </div>

                <div className="firstName">
                    <h5>{profile.first_name}</h5>
                </div>
                
                <div className="secondName">
                    <h5>{profile.second_name}</h5>
                </div>

                <div className="position">
                    <h5>{profile.position}</h5>
                </div>
                
                <div className="rating">
                    <h5>RATING 8.4</h5>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Profile;

// {profile.stats[0].assists}