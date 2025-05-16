import { Canvas } from '@react-three/fiber';
import styles from './DeSection2.module.scss';
import { Button } from '@exhibition/components/common/Buttons';
import { DownloadIcon } from 'lucide-react';
import { DeImages } from './image';


export const Slider = () => {
    //이미지 0.78:1 -> 860:1100
    return (
        <div className={styles.slider}>
            <div className={styles.slider__container} >
                <div className={styles.slider__container__item}>
                    <h1>학과소개</h1>
                    <menu>
                        <ul>
                            {DeImages.map(i=>{
                                return(
                                    <li key={i.id}><div/><span>{i.alt}</span></li>
                                )
                            })}
                        </ul>
                    </menu>
                    <div className={styles.slider__container__item__buttons}>
                        <Button
                            onClick={() => {
                                window.open('https://kopo.ac.kr/chuncheon/content.do?menu=13704', '_blank');
                            }}
                        >
                            <span>학교 홈페이지</span>
                        </Button>
                        <Button>
                            <DownloadIcon />
                            <a href='/assets/deDown.pdf' download>
                                <span>학과 소개서</span>
                            </a>
                        </Button>
                    </div>
                </div>
                <div className={styles.slider__container__item}>
                    <Canvas>
                        <ambientLight />
                        <axesHelper />
                    </Canvas>
                </div>
            </div>
        </div>
    )
}
