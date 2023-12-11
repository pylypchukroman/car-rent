import styles from './Filter.module.scss';
import {useState} from "react";
import {brands} from "../../data/brands";
import {prices} from "../../data/prices";
import {useDispatch} from "react-redux";
import {setFilter} from "../../redux/filter/filterSlice";
import {Dropdown} from "../Dropdown/Dropdown";
import {Input} from "../Input/Input";
import {PriceDropdown} from "../PriceDropdown/PriceDropdown";

export const Filter = () => {
    const dispatch = useDispatch();
    const [brand, setBrand] = useState('Enter the text');
    const [price, setPrice] = useState('');
    const [inputData, setInputData] = useState({
        from: "",
        to: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const filter = {
            brands: brand,
            price: price,
            mileage: {
                from: inputData.from,
                to: inputData.to
            },
            isActive: true
        };
        dispatch(setFilter(filter));
    };

    return (
        <div className={styles.formWrapper}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.contentWrapper}>
                    <Dropdown
                        header={'Car brand'}
                        inputChange={setBrand}
                        value={brand}
                        options={brands}
                    />
                    <PriceDropdown
                        header={'Price/ 1 hour'}
                        inputChange={setPrice}
                        value={price}
                        options={prices}/>
                    <Input
                        inputChange={handleInputChange}
                        value={inputData}
                    />
                </div>
                <button className={styles.btn} type="submit">Search</button>
            </form>
        </div>
    );
};

