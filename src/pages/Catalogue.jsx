import {CarsList} from "../components/CarsList/CarsList";
import {Filter} from "../components/Filter/Filter";
import {LoadMoreBtn} from "../components/LoadMoreBtn/LoadMoreBtn";
import {FavoritesIcon} from "../components/FavoritesIcon/favoritesIcon";

export const Catalogue = () => {

    return (
        <div>
            <Filter />
            <CarsList />
            <LoadMoreBtn />
            <FavoritesIcon />
        </div>
    );
}
