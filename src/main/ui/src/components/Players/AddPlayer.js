import {useState} from 'react';
import './AddPlayer.css';

const AddPlayer =({teams,teamSelect})=>{

    const [firstName, setNewFirstName] = useState()
    const [secondName, setNewSecondName] = useState()
    const [age, setNewAge] = useState()
    const [position, setNewPosition] = useState()
    const [management, setNewManagement] = useState(false)

    const setFirstName = (event) => {
        setNewFirstName(event.target.value)
    }
    const setSecondName = (event) => {
        setNewSecondName(event.target.value)
    }
    const setAge = (event) => {
        setNewAge(event.target.value)
    }
    const setPosition = (event) => {
        setNewPosition(event.target.value)
    }
    const setManagement = (event) => {
        setNewManagement(event.target.value)
    }

    const addPlayer = (team) => {
        fetch('http://localhost:8080/players', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                first_name: firstName,
                second_name: secondName,
                age: age,
                position: position,
                management: management,
                team: {teamSelect}
            })
          })
          .then(response=>response.json())
          .then(result=>{console.log('Success', result)})}

    return(
        <>
            <h3>Add New Player</h3>
            <form>
                <div>
                    <label htmlFor="newPlayerFirstName">First Name: </label>
                    <input onChange={setFirstName} type="text" name="newPlayerFirstName" id="newPlayerFirstName" />
                </div>
                <div>
                    <label htmlFor="newPlayerSecondName">Second Name: </label>
                    <input onChange={setSecondName} type="text" name="newPlayerSecondName" id="newPlayerSecondName" />
                </div>
                <div>
                    <label htmlFor="newPlayerAge">Age: </label>
                    <input onChange={setAge} type="number" min="5" max="100" name="newPlayerAge" id="newPlayerAge" />
                </div>
                <div>
                    <label htmlFor="newPlayerPosition">Position: </label>
                    <input onChange={setPosition} type="text" name="newPlayerPosition" id="newPlayerPosition" />
                </div>

                <div>
                    <label htmlFor="newPlayerManagement">Management?: </label>
                    <input onChange={setManagement} type="radio" name="newPlayerManagement" id="newPlayerManagement" value="TRUE"/>
                    <input onChange={setManagement} type="radio" name="newPlayerManagement" id="newPlayerManagement" value="FALSE"/>
                </div>

                <input class="submit" onClick={addPlayer} type="submit" value="Submit"></input>
            </form>
        </>
    )
    }
    export default AddPlayer;

    // const teamOptionNodes = teams.map(team => {
    //     return(
    //         <option placeholder="Select Your Team" key={team.id} value={team.id}>{team.name}</option>
    //     )
    // })

    // <div>
    //     <label htmlFor="newPlayerTeam">Team: </label>
    //     <select onChange={setTeam} name="newPlayerTeam" id="newPlayerTeam">
    //         <option disabled defaultValue selected="defaultValue">Select a Team</option>
    //         {teamOptionNodes}
    //     </select>
    // </div>