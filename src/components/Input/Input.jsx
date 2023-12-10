import styles from './Inpute.module.scss';

export const Input = ({inputChange, value}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="from">Сar mileage / km</label>
                <p className={styles.from}>From</p>
                <input
                    className={styles.mileageFrom}
                    type="text"
                    id="from"
                    name="from"
                    value={value.from}
                    onChange={inputChange}
                />
                <span className={styles.line}></span>
            </div>
            <div className={styles.inputWrapper}>
                <p className={styles.to}>To</p>
                <input
                    className={styles.mileageTo}
                    type="text"
                    name="to"
                    value={value.to}
                    onChange={inputChange}
                />
            </div>
        </div>
    )
}
