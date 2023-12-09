import {CarsList} from "../../components/CarsList/CarsList";
import {Filter} from "../../components/Filter/Filter";
import {LoadMoreBtn} from "../../components/LoadMoreBtn/LoadMoreBtn";
import {useEffect} from "react";
import {fetchCarsByPage, fetchDataThunk} from "../../redux/cars/operations";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentPage} from "../../redux/currentPage/selectors";

export const Catalogue = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(selectCurrentPage);

    useEffect(() => {
        dispatch(fetchCarsByPage(currentPage));
        dispatch(fetchDataThunk());
    }, [dispatch, currentPage]);

    return (
        <div>
            <Filter />
            <CarsList />
            <LoadMoreBtn />
        </div>
    );
};
