import styles from './LoadMoreBtn.module.scss';

export const LoadMoreBtn = () => {
    return (
        <div className={styles.btnWrapper}>
            <button className={styles.button} type="button" >Load more</button>
        </div>

    )
}
