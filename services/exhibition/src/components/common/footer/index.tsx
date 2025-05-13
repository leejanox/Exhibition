import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.container__left}>
                <a href='https://www.instagram.com/dgu_art_center/' target='_blank' rel='noreferrer'>github</a>
            </div>
            <div className={styles.container__right}>
                <p>한국폴리텍대학 춘천캠퍼스 인공지능SW융합과 김고은</p>
            </div>


        </footer>
    )
}
