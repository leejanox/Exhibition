import { Header } from '@exhibition/components/common/header';
import styles from './styles/JuniorHighTech.module.scss';
import { Gallery } from '@exhibition/components/JuniorHighTech';


export const JuniorHighTech = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <Gallery/>
        </div>
    )
}
