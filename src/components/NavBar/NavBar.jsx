import {NavLink} from "react-router-dom";
import styles from './NavBar.module.scss';

export const NavBar = () => {
    return (
        <div className={styles.wrapper}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/catalogue'>Catalogue</NavLink>
            <NavLink to='/favorites'>Favorites</NavLink>
        </div>
    );
}
