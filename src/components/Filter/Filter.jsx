import styles from './Filter.module.scss';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setFilter} from "../../redux/filter/filterSlice";
import {Dropdown} from "../Dropdown/Dropdown";
import {Input} from "../Input/Input";
import {PriceDropdown} from "../PriceDropdown/PriceDropdown";
import {useOptionData} from "../../hooks/useOptionData";

export const Filter = () => {
    const dispatch = useDispatch();
    const [brand, setBrand] = useState('Enter the text');
    const [price, setPrice] = useState('');
    const { brandOptions, priceOptions } = useOptionData();
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
                        options={brandOptions}
                    />
                    <PriceDropdown
                        header={'Price/ 1 hour'}
                        inputChange={setPrice}
                        value={price}
                        options={priceOptions}/>
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

