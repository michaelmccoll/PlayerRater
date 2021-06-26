
import './App.css';
import React from 'react';
import {useState,useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Team from './containers/Team';
import Stats from './containers/Stats';
import Rater from './containers/Rater';
import Matches from './containers/Matches';
import Profile from './containers/Profile';
import Error from './containers/Error';
import AddTeam from './components/Teams/AddTeam';
import AddPlayer from './components/Players/AddPlayer';
import AddMatch from './components/Matches/AddMatch';
import EditMatch from './components/Matches/EditMatch';

function App() {
  
  const [teamSelect, setTeamSelect] = useState(null)
  const [playerSelect, setPlayerSelect] = useState(0)
  const [teams, setTeams] = useState([])
  const [players, setPlayers] = useState([])
  const [latestMatch, setLatestMatch] = useState(null)
  const [loaded, setLoaded] = useState(false)

  // Fetches the teams list from DB, defaults to first team Leith Walkers 'data[0]'
  const getTeams = () => {
      fetch(`http://player-rater.herokuapp.com/teams`)
      .then(res => res.json())
      .then(data => {
        setTeams(data)
        setTeamSelect(data[0])
      })
      .then(() => setLoaded(true))
  }

  // Fetches the players list from DB, defaults to first player Lionel Messi 'data[0]'
  const getPlayers = () => {
      fetch(`http://player-rater.herokuapp.com/players`)
      .then(res => res.json())
      .then(data =>{
        setPlayers(data)
        setPlayerSelect(data[0])
      } )
      .then(() => setLoaded(true))
  }

  useEffect(()=>{
      getTeams();
      getPlayers();
  },[])

  useEffect(() => {
    if (teamSelect) {
      getLatestMatch()
    }
  }, [teamSelect, teams])

  const getTeam = (selectedTeam) => {
    for (const team of teams ) {
      if (team.id == selectedTeam) {
        setTeamSelect(team)
      }
    }
  }

  // Fetches the team selected's last match
  const getLatestMatch = () => {
    if (teamSelect) {
      const match = teamSelect.matches.slice(-1)[0]
      console.log(match)
      setLatestMatch(match)
    }
  }

  // Fetches the player selected
  const getPlayer = (selectedPlayer) => {
    for (const player of players ) {
      if (player.id == selectedPlayer) {
        setPlayerSelect(player)
      }
    }
  }


  const handleRateChange = (newRating, player_id) => {
    let playerToBeRated = null
    const newPlayers = []
    for (const player of players) {
        if (player_id === player.id) {
            player.ratings.push(newRating)
            playerToBeRated = player
        }
        newPlayers.push(player)
    }
    console.log(newRating, player_id);
    setPlayers(newPlayers)
    addRating(newRating, playerToBeRated)
}   

  const addRating = (rating, player) => {
    fetch('http://player-rater.herokuapp.com/ratings', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          player: {id: player.id},
          match: {id: latestMatch.id},
          rating: rating
        })
      })
      .then(response=>response.json())
      .then(getPlayers)
      .then(() => {
        getTeams()
      })
    }

  return (
    <Router>
      <>
      <Header/>
      <NavBar/>
      <Switch>

      <Route exact path="/">
        <Team teams={teams} players={players} loaded={loaded} handleTeamSelect={(selectedTeam) => getTeam(selectedTeam)} handlePlayerSelect={(selectedPlayer) => getPlayer(selectedPlayer)}/>
      </Route>

      <Route path="/stats" component={Stats}>
        <Stats player={playerSelect} team={teamSelect}/>
      </Route>

      {/* Why doesn't this have a component={Rater} in the Route? */}
      <Route path="/rater">
        <Rater match={latestMatch} handleChange={(newRating, player_id) => handleRateChange(newRating, player_id)}/>
      </Route>

      <Route path="/matches" component={Matches}>
        <Matches player={playerSelect} team={teamSelect}/>
      </Route>

      <Route path="/profile" component={Profile}>
        <Profile player={playerSelect} team={teamSelect}/>
      </Route>

      <Route path="/menu">
        <Menu player={playerSelect} team={teamSelect}/>
      </Route>

      <Route path="/addTeam">
        <AddTeam player={playerSelect} team={teamSelect}/>
      </Route>

      <Route path="/addPlayer">
        <AddPlayer player={playerSelect} team={teamSelect} teams={teams}/>
      </Route>

      <Route path="/addMatch">
        <AddMatch player={playerSelect} team={teamSelect}/>
      </Route>

      <Route path="/editMatch/:id">
        <EditMatch player={playerSelect} team={teamSelect}/>
      </Route>

      <Route component={Error}/>
      </Switch>

    </>
    </Router>
  );
}

export default App;
