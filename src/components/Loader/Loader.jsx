import styles from './Loader.module.scss';
import { Oval } from  'react-loader-spinner';

export const Loader = () => {
    return (
        <div className={styles.loaderWrapper}>
            <Oval
                height={80}
                width={80}
                color="#0B44CD"
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#FFE4C6"
                strokeWidth={3}
                strokeWidthSecondary={3}

            />
        </div>
    );
};
