import {CarsList} from "../../components/CarsList/CarsList";
import {Filter} from "../../components/Filter/Filter";
import {LoadMoreBtn} from "../../components/LoadMoreBtn/LoadMoreBtn";
import {useEffect} from "react";
import {fetchCarsByPage} from "../../redux/cars/operations";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentPage} from "../../redux/currentPage/selectors";
import {Footer} from "../../components/Footer/Footer";

export const Catalogue = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(selectCurrentPage);

    useEffect(() => {
        dispatch(fetchCarsByPage(currentPage));
    }, [dispatch, currentPage]);

    return (
        <>
            <Filter />
            <CarsList />
            <LoadMoreBtn />
            <Footer/>
        </>
    );
};
