// import {HashRouter, Link} from 'react-router-dom';
// import addTeam from '../imgs/icons/square.png';
// import addPlayer from '../imgs/icons/addUser.png';
// import addMatch from '../imgs/icons/matches.png';
// import {useState, Link, useRef} from 'react';
// import './Menu.css';

// const Menu = () => {
//     const dropdownRef = useRef(null);
//     const [isActive, setIsActive] = useState(false);
//     const onClick = () => setIsActive(!isActive);
  
//     return (
//       <div className="menu-container">
//         <button onClick={onClick} className="menu-trigger">
//           <span>User</span>
//           <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" />
//         </button>
//         <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
//           <ul>
//             <Link to={"/addmatch"}><li>Add Match</li></Link>
//             <Link to={"/addplayer"}><li>Add Player</li></Link>
//             <Link to={"/addteam"}><li>Add Team</li></Link>
//           </ul>
//         </nav>
//       </div>
//     );
//   };

    // return(
    //     <>
    //         <h3>Admin Page</h3>

    //         <Link className="nonHighlight" to="/addTeam"><img className="admin" src={addTeam}></img>Add Team</Link>

    //         <Link className="nonHighlight" to="/addPlayer"><img className="admin" src={addPlayer}></img>Add Player</Link>

    //         <Link className="nonHighlight" to="/addMatch"><img className="admin" src={addMatch}></img>Add Match</Link>
           
    //     </>
    // )
    

// const Menu =()=>{

//     const [newTeamForm,setNewTeamForm] = useState({
//         newTeamName:'',
//         newTeamLocation:'',
//         newTeamLeague:'',
//         newTeamPrimaryColour:'',
//         newTeamSecondaryColour:'',
//         newTeamBadge:''
//     });
//     const [newPlayerForm,setNewPlayerForm] = useState({
//         newPlayerFirstName:'',
//         newPlayerSecondName:'',
//         newPlayerAge:'',
//         newPlayerPosition:'',
//         newPlayerManagement:'',
//         newPlayerTeam:''
//     })
//     const [newMatchForm,setNewMatchForm] = useState({
//         newOpposition:'',
//         newHomeTeam:'',
//         newHomeScore:'',
//         newAwayScore:'',
//         newTeam:''
//     })

//     const handleTeamSubmit =(event) => {
//         const newState = {...newTeamForm};
//         newState[event.target.name] = parseInt(event.target.value);
//         setNewTeamForm(newState);
//     }

//     const handlePlayerSubmit =(event) => {
//         const newState = {...newPlayerForm};
//         newState[event.target.name] = parseInt(event.target.value);
//         setNewPlayerForm(newState);
//     }

//     const handleMatchSubmit =(event) => {
//         const newState = {...newMatchForm};
//         newState[event.target.name] = parseInt(event.target.value);
//         setNewMatchForm(newState);
//     }

//     return(
//         <>
//             <h3>Add New Team</h3>
//             <form>
//                 <div>
//                     <label htmlFor="newTeamName">Team Name: </label>
//                     <input type="text" name="newTeamName" id="newTeamName" />
//                 </div>
//                 <div>
//                     <label htmlFor="newTeamLocation">Location: </label>
//                     <input type="text" name="newTeamLocation" id="newTeamLocation" />
//                 </div>
//                 <div>
//                     <label htmlFor="newTeamLeague">League: </label>
//                     <input type="text" name="newTeamLeague" id="newTeamLeague" />
//                 </div>
//                 <div>
//                     <label htmlFor="newTeamPrimaryColour">Primary colour: </label>
//                     <input type="text" name="newTeamPrimaryColour" id="newTeamPrimaryColour" />
//                 </div>
//                 <div>
//                     <label htmlFor="newTeamSecondaryColour">Secondary Colour: </label>
//                     <input type="text" name="newTeamSecondaryColour" id="newTeamSecondaryColour" />
//                 </div>
//                 <div>
//                     <label htmlFor="newTeamBadge">Badge: </label>
//                     <input type="text" name="newTeamBadge" id="newTeamBadge" />
//                 </div>
//                 <input onClick={handleTeamSubmit} type="submit" value="submit"></input>
//             </form>

//             <h3>Add New Player</h3>
//             <form>
//                 <div>
//                     <label htmlFor="newPlayerFirstName">First Name: </label>
//                     <input type="text" name="newPlayerFirstName" id="newPlayerFirstName" />
//                 </div>
//                 <div>
//                     <label htmlFor="newPlayerSecondName">Second Name: </label>
//                     <input type="text" name="newPlayerSecondName" id="newPlayerSecondName" />
//                 </div>
//                 <div>
//                     <label htmlFor="newPlayerAge">Age: </label>
//                     <input type="text" name="newPlayerAge" id="newPlayerAge" />
//                 </div>
//                 <div>
//                     <label htmlFor="newPlayerPosition">Position: </label>
//                     <input type="text" name="newPlayerPosition" id="newPlayerPosition" />
//                 </div>
//                 <div>
//                     <label htmlFor="newPlayerManagement">Management?: </label>
//                     <input type="text" name="newPlayerManagement" id="newPlayerManagement" />
//                 </div>
//                 <div>
//                     <label htmlFor="newPlayerTeam">Team: </label>
//                     <input type="text" name="newPlayerTeam" id="newPlayerTeam" />
//                 </div>
//                 <input onClick={handlePlayerSubmit} type="submit" value="submit"></input>
//             </form>

//             <h3>Add New Match</h3>
//             <form>
//                 <div>
//                     <label htmlFor="newMatchOpposition">Opposition: </label>
//                     <input type="text" name="newMatchOpposition" id="newMatchOpposition"/>
//                 </div>
//                 <div>
//                     <label htmlFor="newMatchHomeTeam">Home Team?: </label>
//                     <input type="text" name="newMatchHomeTeam" id="newMatchHomeTeam"/>
//                 </div>
//                 <div>
//                     <label htmlFor="newMatchHomeScore">Home Score: </label>
//                     <input type="text" name="newMatchHomeScore" id="newMatchHomeScore"/>
//                 </div>
//                 <div>
//                     <label htmlFor="newMatchAwayScore">Away Score: </label>
//                     <input type="text" name="newMatchAwayScore" id="newMatchAwayScore"/>
//                 </div>
//                 {/* Not sure if this TEAM entry is required or could be autocompleted */}
//                 <div>
//                     <label htmlFor="newMatchTeam">Team: </label>
//                     <input type="text" name="newMatchTeam" id="newMatchTeam"/>
//                 </div>
//                 <input onClick={handleMatchSubmit} type="submit" value="submit"></input>
//             </form>
//         </>
//     )
// }

// export default Menu;