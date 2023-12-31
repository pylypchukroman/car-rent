import styles from './NavBar.scss';
import {NavLink} from "react-router-dom";

export const NavBar = () => {

    return (
        <nav className='navWrapper'>
            <NavLink className="link" to='/'>Home</NavLink>
            <NavLink className="link" to='/catalog'>Catalogue</NavLink>
            <NavLink className="link" to='/favorites'>Favorites</NavLink>
        </nav>
    );
};
