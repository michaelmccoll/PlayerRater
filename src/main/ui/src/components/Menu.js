import {Link} from 'react-router-dom';
import addTeam from '../imgs/icons/square.png';
import addPlayer from '../imgs/icons/addUser.png';
import addMatch from '../imgs/icons/matches.png';
import './Menu.css';

const Menu = () => {

    return(
        <>
            <h3>Admin Page</h3>

            <Link className="nonHighlight" to="/addTeam"><img className="admin" src={addTeam} alt="Add Team"></img>Add Team</Link>

            <Link className="nonHighlight" to="/addPlayer"><img className="admin" src={addPlayer} alt="Add Player"></img>Add Player</Link>

            <Link className="nonHighlight" to="/addMatch"><img className="admin" src={addMatch} alt="Add Match"></img>Add Match</Link>
           
        </>
    )

}

export default Menu;