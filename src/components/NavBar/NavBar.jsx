import {NavLink} from "react-router-dom";
import styles from './NavBar.scss';

export const NavBar = () => {
    return (
        <nav className='navWrapper'>
            <NavLink className="link" to='/'>Home</NavLink>
            <NavLink className="link" to='/catalogue'>Catalogue</NavLink>
            <NavLink className="link" to='/favorites'>Favorites</NavLink>
        </nav>
    );
}
