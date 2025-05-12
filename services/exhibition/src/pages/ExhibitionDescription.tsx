import styles from './styles/ExhibitionDescription.module.scss';
import {DescriptionHeader, Header} from '@exhibition/components/common/header';
import { EDSection1 } from '@exhibition/components/ExhibitionDescription/section1';


export const ExhibitionDescription = () => {
    return (
        <div className={styles.container}>
            <Header>
                <DescriptionHeader
                    title='2025 AI INFINITY'
                    category='AI EXHIBITION DESCRIPTION'
                    location='Seoul, Korea'
                    date='2025.05.12'
                />
            </Header>
            <div className={styles.container__body}>
                <EDSection1/>
            </div>
        </div>
    )
}
