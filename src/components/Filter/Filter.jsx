import styles from './Filter.module.scss';
import {useState} from "react";

export const Filter = () => {

    const [dropdown1Value, setDropdown1Value] = useState('');
    const [dropdown2Value, setDropdown2Value] = useState('');
    const [textInput1Value, setTextInput1Value] = useState('');
    const [textInput2Value, setTextInput2Value] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dropdown 1 value:', dropdown1Value);
        console.log('Dropdown 2 value:', dropdown2Value);
        console.log('Text Input 1 value:', textInput1Value);
        console.log('Text Input 2 value:', textInput2Value);
    };

    return (
        <div className={styles.formWrapper}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.filter}>
                    <div className={styles.selectWrapper}>
                        <label className={styles.label} htmlFor="brand">Car brand</label>
                        <select
                            className={styles.brand}
                            id="brand"
                            value={dropdown1Value}
                            onChange={(e) => setDropdown1Value(e.target.value)}
                        >
                            <option value="">Select Option 1</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                        </select>
                    </div>
                    <div className={styles.selectWrapper}>
                        <label className={styles.label} htmlFor="price">Price/ 1 hour</label>
                        <select
                            className={styles.price}
                            id="price"
                            value={dropdown2Value}
                            onChange={(e) => setDropdown2Value(e.target.value)}
                        >
                            <option value="">Select Value 1</option>
                            <option value="value1">Value 1</option>
                            <option value="value2">Value 2</option>
                        </select>
                    </div>
                    <div className={styles.inputWrapper}>
                        <label className={styles.label} htmlFor="from">Сar mileage / km</label>
                        <input
                            className={styles.mileageFrom}
                            type="text"
                            id="from"
                            value={textInput1Value}
                            onChange={(e) => setTextInput1Value(e.target.value)}
                            placeholder="Text Input 1"
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label className={styles.label} htmlFor="to">.</label>
                        <input
                            className={styles.mileageTo}
                            type="text"
                            id="to"
                            value={textInput2Value}
                            onChange={(e) => setTextInput2Value(e.target.value)}
                            placeholder="Text Input 2"
                        />
                    </div>
                    <button className={styles.btn} type="submit">Search</button>
                </div>
            </form>
        </div>
    );
}
