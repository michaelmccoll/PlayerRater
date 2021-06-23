import {HashRouter, Link} from 'react-router-dom';
import './NavBar.css';
import team from '../imgs/icons/team.png';
import stats from '../imgs/icons/stats.png';
import rater from '../imgs/icons/rater.png';
import matches from '../imgs/icons/matches.png';
import profile from '../imgs/icons/profile.png';

const NavBar = () => {
    return(
        <>
        <ul className="navbar">
        <hr/>
            <li>
                <Link className="nonHighlight" to="/"><img className="team" src={team}></img></Link>
            </li>
    
            <li>
                <Link className="nonHighlight" to="/stats"><img className="stats" src={stats}></img></Link>
            </li>
        
            <li>
                <Link className="nonHighlight" to="/rater"><img className="rater" src={rater}></img></Link>
            </li>

            <li>
                <Link className="nonHighlight" to="/matches"><img className="matches" src={matches}></img></Link>
            </li>

            <li> 
                <Link className="nonHighlight" to="/profile"><img className="profile" src={profile}></img></Link>
            </li>
        </ul>
        </>
    )
}

export default NavBar;