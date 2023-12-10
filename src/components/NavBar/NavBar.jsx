import styles from './NavBar.scss';
import {NavLink, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentPage} from "../../redux/currentPage/CurrentPageSlice";
import {setFilter} from "../../redux/filter/filterSlice";
import {initialFilter} from "../../data/initialFilter";


export const NavBar = () => {
    const dispatch = useDispatch();
    const path = useLocation().pathname;

    if (path !== '/catalog') {
        dispatch((setCurrentPage(1)));
        dispatch(setFilter(initialFilter));
    }

    return (
        <nav className='navWrapper'>
            <NavLink className="link" to='/'>Home</NavLink>
            <NavLink className="link" to='/catalog'>Catalogue</NavLink>
            <NavLink className="link" to='/favorites'>Favorites</NavLink>
        </nav>
    );
};
