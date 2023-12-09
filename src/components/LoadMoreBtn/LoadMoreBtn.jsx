import styles from './LoadMoreBtn.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../../redux/currentPage/CurrentPageSlice";
import {selectCurrentPage} from "../../redux/currentPage/selectors";

export const LoadMoreBtn = () => {
    const currentPage = useSelector(selectCurrentPage);
    const dispatch = useDispatch();

    const onBtnClick = () => {
        dispatch(setCurrentPage(currentPage + 1));
    }
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
