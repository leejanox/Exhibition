import { DepartmentHeader, Header } from '@exhibition/components/common/header';
import { Footer } from '@exhibition/components/common/footer';
import styles from './styles/DepartmentDescription.module.scss';
import ReactPlayer from 'react-player';
import { DeSection2 } from '@exhibition/components/DepartmentDescription/section2';
import { DeSection3 } from '@exhibition/components/DepartmentDescription/section3';
import { DeSection4 } from '@exhibition/components/DepartmentDescription/section4';
import { Professor } from '@exhibition/components/DepartmentDescription/section3/Professor';
//! 학과 소개 페이지
//! 1: 학과 소개 영상, 2: 학과 소개 , 3: 교수님 소개 , 4: 학과 사진?
// https://www.youtube.com/watch?v=j-dK5VcTJIo


export const DepartmentDescription = () => {
    return (
        <div className={styles.container}>
            <Header page='department'>
                <DepartmentHeader title='인공지능SW융합과' subtitle='Artificial Intelligence Software Convergence' location='한국 폴리텍 대학 춘천캠퍼스 본관 2층' />
            </Header>
            <section id='section1'>
                <div className={styles.videoContainer}>
                    <ReactPlayer url='https://www.youtube.com/watch?v=j-dK5VcTJIo' width='100%' height='70vh'
                        controls={false} playing={true} loop={true} muted={true}
                    />
                </div>
            </section>
            <section id='section2'> 
                <DeSection2/>
            </section>
            <section id='section3'>
                <DeSection3 data={Professor}/>
            </section>
            <section id='section4'>
                <DeSection4/>
            </section>
            <Footer/>   
        </div>
    )
}
