import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/catalogue'>Catalogue</NavLink>
            <NavLink to='/favorites'>Favorites</NavLink>
        </div>
    );
}
