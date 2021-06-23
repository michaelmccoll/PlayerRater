import {useState} from 'react';
import './MatchDetails.css';

const AddMatch = ({teamId, playerId}) => {

    const [date, setDate] = useState(null)
    const [ranked, setRanked] = useState(false)
    const [opposition, setOpposition] = useState(null)
    const [homeTeam, setHomeTeam] = useState(null)
    const [homeScore, setHomeScore] = useState(null)
    const [awayScore, setAwayScore] = useState(null)
    const [teamsheet, setTeamsheet] = useState(null)
    const [stats, setStats] = useState(null)
    const [team, setTeam] = useState(null)
    const [ratings, setRatings] = useState(null)

    // useEffect(()=>{
    //     setRanked();
    // },[])

    const setDateState = (event) => {
        setDate(event.target.value)
    }
    
    const setOppositionState = (event) => {
        setOpposition(event.target.value)
    }
    const setHomeTeamState = (event) => {
        if(event.target.value === "on"){
            setHomeTeam(true)
        }
        else{
            setHomeTeam(false)
        }
        
    }

    const addMatch = (e) => {
        e.preventDefault()
        fetch('http://localhost:8080/matches', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              date: date,
              ranked: ranked,
              opposition: opposition,
              homeTeam: homeTeam
            })
          })
          .then(response=>response.json())
          .then(result=>{console.log('Success', result)})}

    return(
        <>
         <h3>Add New Match</h3>
            <form>
                <div>
                    <label htmlFor="newMatchDate">Date: </label>
                    <input onChange={setDateState} type="date" name="newMatchOpposition" id="newMatchOpposition"/>
                </div>
                <div>
                    <label htmlFor="newMatchOpposition">Opposition: </label>
                    <input onChange={setOppositionState} type="text" name="newMatchOpposition" id="newMatchOpposition"/>
                </div>
                <div>
                    <label htmlFor="newMatchHomeTeam">Home Team?: </label>
                    <input onChange={setHomeTeamState} type="checkbox" name="newMatchHomeTeam" id="newMatchHomeTeam"/>
                </div>
                <input class="submit" onClick={addMatch} type="submit" value="submit"></input>
            </form>

        </>
    )
}

export default AddMatch;