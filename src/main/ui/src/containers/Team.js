import './Team.css';

const Team = ({teams, players, loaded, handleTeamSelect, handlePlayerSelect}) => {


    if(!loaded) {
        return(
            <p>...loading</p>
        )
    }

    const setTeamState = (event) => {
        handleTeamSelect(event.target.value)
    }
    const setPlayerState = (event) => {
        handlePlayerSelect(event.target.value)
    }

    const teamOptionNodes = teams.map(team => {
        return(
            <option key={team.id} value={team.id}>{team.name}</option>
        )
      })
    
    const playerOptionNodes = players.map(player => {
          return(
              <option key={player.id} value={player.id}>{player.first_name} {player.second_name}</option>
          )
      })

    return(

        <>
        <div className="team-container">
            <label htmlFor="teams">Select Team</label>
            <select onChange={setTeamState} name="teams" id="teams">
                <option disabled defaultValue selected="defaultValue">Select a Team</option>
                {teamOptionNodes}
            </select>

            <label htmlFor="players">Select Player</label>
            <select onChange={setPlayerState} name="players" id="players">
                <option disabled defaultValue selected="defaultValue">Select a Player</option>
                {playerOptionNodes}
            </select>
        </div>
          
        </>
    )
}

export default Team;