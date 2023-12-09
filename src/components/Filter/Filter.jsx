import styles from './Filter.module.scss';
import {useState} from "react";
import {brands} from "../../data/brands";
import {prices} from "../../data/prices";
import {useDispatch} from "react-redux";
import {setFilter} from "../../redux/filter/filterSlice";

export const Filter = () => {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        brand: "",
        price: "",
        from: "",
        to: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const filter = {
            brands: formData.brand,
            price: formData.price,
            mileage: {
                from: formData.from,
                to: formData.to
            },
            isActive: true
        };
        dispatch(setFilter(filter));
    }

    return (
        <div className={styles.formWrapper}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.filter}>
                    <div className={styles.selectWrapper}>
                        <label className={styles.label} htmlFor="brand">Car brand</label>
                        <select
                            className={styles.brand}
                            id="brand"
                            name="brand"
                            value={formData.brand}
                            onChange={handleInputChange}
                        >
                            <option hidden={true}>Select a value*</option>
                            {brands.map((brand, index) => (
                                <option value={brand} key={index}>
                                    {brand}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.selectWrapper}>
                        <label className={styles.label} htmlFor="price">Price/ 1 hour</label>
                        <select
                            className={styles.price}
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                        >
                            <option hidden={true}>Select a value*</option>
                            {prices.map((price, index) => (
                                <option value={price} key={index}>
                                    {price}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.inputWrapper}>
                        <label className={styles.label} htmlFor="from">Сar mileage / km</label>
                        <input
                            className={styles.mileageFrom}
                            type="text"
                            id="from"
                            name="from"
                            value={formData.from}
                            onChange={handleInputChange}
                            placeholder="Text Input 1"
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label className={styles.label} htmlFor="to">.</label>
                        <input
                            className={styles.mileageTo}
                            type="text"
                            id="to"
                            name="to"
                            value={formData.to}
                            onChange={handleInputChange}
                            placeholder="Text Input 2"
                        />
                    </div>
                    <button className={styles.btn} type="submit">Search</button>
                </div>
            </form>
        </div>
    );
}
