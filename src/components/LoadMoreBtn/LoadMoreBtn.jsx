import styles from './LoadMoreBtn.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../../redux/currentPage/CurrentPageSlice";
import {selectCurrentPage} from "../../redux/currentPage/selectors";
import {selectFilter} from "../../redux/filter/selectors";
import {selectLoading} from "../../redux/cars/selectors";

export const LoadMoreBtn = () => {
    const currentPage = useSelector(selectCurrentPage);
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    const isLoading = useSelector(selectLoading);
    const hideBtn = filter.isActive || isLoading;

    const onBtnClick = () => {
        dispatch(setCurrentPage(currentPage + 1));
    };

    if (hideBtn) return null;

    return (
        <div className={styles.btnWrapper}>
            <button
                className={styles.button}
                type="button"
                onClick={onBtnClick}
            >
                Load more
            </button>
        </div>
    );
};
