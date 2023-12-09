import {CarsList} from "../components/CarsList/CarsList";
import {Filter} from "../components/Filter/Filter";
import {LoadMoreBtn} from "../components/LoadMoreBtn/LoadMoreBtn";
import {useEffect, useState} from "react";
import {fetchCarsByPage} from "../redux/operations";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentPage} from "../redux/currentPage/selectors";

export const Catalogue = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(selectCurrentPage);

    useEffect(() => {
        dispatch(fetchCarsByPage(currentPage));
    }, [dispatch, currentPage]);

    return (
        <div>
            <Filter />
            <CarsList />
            <LoadMoreBtn />
        </div>
    );
}
