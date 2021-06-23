import {useState} from 'react';
import './AddTeam.css';

const AddTeam =()=>{

    const [name, setNewTeamName] = useState(null)
    const [location, setNewTeamLocation] = useState(null)
    const [league, setNewTeamLeague] = useState(null)
    const [primaryColour, setNewTeamPrimaryColour] = useState(null)
    const [secondaryColour, setNewTeamSecondaryColour] = useState(null)

    const setTeamName = (event) => {
        setNewTeamName(event.target.value)
    }
    const setTeamLocation = (event) => {
        setNewTeamLocation(event.target.value)
    }
    const setTeamLeague = (event) => {
        setNewTeamLeague(event.target.value)
    }
    const setTeamPrimaryColour = (event) => {
        setNewTeamPrimaryColour(event.target.value)
    }
    const setTeamSecondayColour = (event) => {
        setNewTeamSecondaryColour(event.target.value)
    }

    const addTeam = (e) => {
        e.preventDefault()
        fetch('http://localhost:8080/teams', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                location: location,
                league: league,
                primaryColour: primaryColour,
                secondaryColour: secondaryColour
            })
          })
          .then(response=>response.json())
          .then(result=>{console.log('Success', result)})}

    return(
        <>
        <h3>Add New Team</h3>
            <form>
                <div>
                    <label htmlFor="newTeamName">Team Name: </label>
                    <input onChange={setTeamName} type="text" name="newTeamName" id="newTeamName"/>
                </div>
                <div>
                    <label htmlFor="newTeamLocation">Location: </label>
                    <input onChange={setTeamLocation} type="text" name="newTeamLocation" id="newTeamLocation"/>
                </div>
                <div>
                    <label htmlFor="newTeamLeague">League: </label>
                    <input onChange={setTeamLeague} type="text" name="newTeamLeague" id="newTeamLeague" selected="Edinburgh Amateurs"/>
                </div>
                <div>
                    <label htmlFor="newTeamPrimaryColour">Primary colour: </label>
                    <input className="colour" onChange={setTeamPrimaryColour} type="color" name="newTeamPrimaryColour" id="newTeamPrimaryColour"/>
                </div>
                <div>
                    <label htmlFor="newTeamSecondaryColour">Secondary Colour: </label>
                    <input className="colour" onChange={setTeamSecondayColour} type="color" name="newTeamSecondaryColour" id="newTeamSecondaryColour" />
                </div>
                <div>
                    <label htmlFor="newTeamBadge">Badge: </label>
                    <input type="file" name="newTeamBadge" id="newTeamBadge" accept="image/png, image/jpeg"/>
                </div>
                <input class="submit" onClick={addTeam} onChange={addTeam} type="submit" value="Submit"></input>
            </form>
        </>
    )
    }
    export default AddTeam;