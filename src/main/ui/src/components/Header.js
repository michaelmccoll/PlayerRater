import {HashRouter, Link} from 'react-router-dom';
import logo from '../imgs/logos/PlayerRaterLogo.png';
import menu from '../imgs/icons/menu.png';
import './Header.css';

const Header = () => {
    return(
        <>
            <img className="logo" src={logo}></img>
            {/* <Link className="nonHighlight" to="/menu"><img className="menu" src={menu}></img></Link> */}
            <hr />
        </>
    )
}

export default Header;