import styles from './styles/ExhibitionDescription.module.scss';
import {DescriptionHeader, Header} from '@exhibition/components/common/header';
import { EDSection1 } from '@exhibition/components/ExhibitionDescription/section1';
import { EDSection2 } from '@exhibition/components/ExhibitionDescription/section2';
import { EDSection3 } from '@exhibition/components/ExhibitionDescription/section3';
import { Footer } from '@exhibition/components/common/footer';


//! 전시회 설명 페이지
//! 1: threejs , 2: 전시 소개 , 3: 오시는 길 안내 + 방명록?
export const ExhibitionDescription = () => {
    return (
        <div className={styles.container}>
            <Header>
                <DescriptionHeader
                    title='2025 AI INFINITY 展'
                    category='AI EXHIBITION DESCRIPTION'
                    location='Chuncheon, Korea'
                    date='25.06.19 - 25.06.26'
                    page='exhibition'
                />
            </Header>                
            <section id='section1'>
                <EDSection1/>
            </section>
            <section id='section2'> 
                <EDSection2/>
            </section>
            <section id='section3'>
                <EDSection3/>
            </section>
            <Footer/>
        </div>
    )
}
