import styles from './Favorites.module.scss';
import {useFavoritesCarsData} from "../../hooks/useFavoritesCarsData";
import {FavoriteCarCard} from "../../components/FavoriteCarCard/FavoriteCarCard";
import {Footer} from "../../components/Footer/Footer";
import {useEffect} from "react";
import {fetchDataThunk} from "../../redux/cars/operations";
import {useDispatch, useSelector} from "react-redux";
import {selectError, selectLoading} from "../../redux/cars/selectors";
import Notiflix from "notiflix";
import {Loader} from "../../components/Loader/Loader";

export const Favorites = () => {
    const { favoritesCars }= useFavoritesCarsData();
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError);

    if (error) {
        Notiflix.Notify.failure("Uh oh! Trouble loading favorites. Refresh and try again!");
    }

    useEffect(() => {
        dispatch(fetchDataThunk());
    }, [dispatch]);

  return (
      <>
          <div className={styles.wrapper}>
              {isLoading ? (
                  <Loader />
              ) : favoritesCars.length ? (
                  <ul className={styles.list}>
                      {favoritesCars.map(car => (
                          <FavoriteCarCard key={car.id} car={car} />
                      ))}
                  </ul>
              ) : (
                  <p className={styles.msg}>Your favorite cars list is empty</p>
              )}
          </div>
          <Footer/>
      </>
  );
};
