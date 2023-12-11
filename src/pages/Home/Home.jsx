import styles from './Home.module.scss'
import hero from '../../images/hero.webp'
import content from '../../images/content.webp'
import {Footer} from "../../components/Footer/Footer";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Home = () => {

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.hero}>
                    <div className={styles.box} />
                    <div className={styles.textBox}>
                        <h1 className={styles.primaryText}>Enjoy your life with our comfortable cars.</h1>
                        <h2 className={styles.secondaryText}>We are ready to serve the best experience in car rental.</h2>
                    </div>
                    <div className={styles.imgWrapper}>
                        <LazyLoadImage
                            className={styles.img}
                            src={hero}
                            effect="blur"
                            alt={'hero car'}
                        />
                    </div>
                </div>
                <div className={styles.about}>
                    <h1 className={styles.header}> About Us</h1>
                    <div className={styles.content}>
                        <div className={styles.contentImgWrapper}>
                            <LazyLoadImage
                                className={styles.contentImg}
                                src={content}
                                effect="blur"
                                alt={'hero car'}
                            />
                        </div>
                        <p className={styles.contentText}>We are a specialized team committed to providing reliable car rental services. One of the advantages of renting a car from us is offering competitive and transparent prices. </p>
                    </div>
                </div>
                <div className={styles.advantages}>
                    <div className={styles.advantagesBox}>
                        <h3 className={styles.advantagesHeader}>450+</h3>
                        <h4 className={styles.advantagesSubHeader}>Cars For Rent</h4>
                    </div>
                    <div className={styles.advantagesBox}>
                        <h3 className={styles.advantagesHeader}>800+</h3>
                        <h4 className={styles.advantagesSubHeader}>Happy Clients</h4>
                    </div>
                    <div className={styles.advantagesBox}>
                        <h3 className={styles.advantagesHeader}>750+</h3>
                        <h4 className={styles.advantagesSubHeader}>Rental Locations</h4>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
