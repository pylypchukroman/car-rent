import styles from './Favorites.module.scss';
import {useFavoritesCarsData} from "../../hooks/useFavoritesCarsData";
import {FavoriteCarCard} from "../../components/FavoriteCarCard/FavoriteCarCard";
import {Footer} from "../../components/Footer/Footer";
import {Dropdown} from "../../components/Dropdown/Dropdown";

export const Favorites = () => {
    const { favoritesCars }= useFavoritesCarsData();

  return (
      <>
        <div className={styles.wrapper}>
            <ul className={styles.list}>
                {favoritesCars.map(car => <FavoriteCarCard key={car.id} car={car} />)}
            </ul>
            <Dropdown />
        </div>
          <Footer/>
      </>
  );
};
