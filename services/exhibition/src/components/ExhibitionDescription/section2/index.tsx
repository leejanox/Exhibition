import { Button } from '@exhibition/components/common/Buttons';
import styles from './EDSection2.module.scss';
import { EDdescriptionEnglish, EDParticipationList, EDInfo, EDdescriptionKorean } from './EDdescriptionText';
import { Link } from 'react-router-dom';

interface EDSection2Props {
    language?: 'korean' | 'english';
}

export const EDSection2 = ({language = 'korean'}: EDSection2Props) => {
    
    const languageClass = language === 'english' ? styles.english : styles.korean;

    return (
        <div className={styles.container}>
            <div className={`${styles.container__left} ${languageClass}`}> 
                {language === 'english' ? EDdescriptionEnglish.split('\n\n').map((text: string, index: number) => (
                    <p key={index}>{text}</p>
                )) : EDdescriptionKorean.split('\n\n').map((text: string, index: number) => (
                    <p key={index}>{text}</p>
                ))}
            </div>
            <div className={styles.container__center}>
                <h1>참여자</h1>
                <div className={styles.container__center__participationList}>
                    {Object.keys(EDParticipationList).map((key) => (
                        <div key={key}>
                            <h2>{key}</h2>
                            <p>{EDParticipationList[key as keyof typeof EDParticipationList]}</p>
                        </div>
                    ))}
                </div>
                <Button>
                    <Link to='/department'>
                        <span>{'학과 소개 \u27AF'}</span>
                    </Link>
                </Button>
            </div>
            <div className={styles.container__right}>
                <h1>전시 정보</h1>
                <div className={styles.container__right__info}>
                    {Object.keys(EDInfo).map((key) => (
                        <div key={key}>
                            <h2>{key}</h2>
                            <p>{EDInfo[key as keyof typeof EDInfo]}</p>
                        </div>
                    ))}
                </div>
                <Button>
                    <Link to='#section3'>
                        <span>{'오시는 길 \u27AF'}</span>
                    </Link>
                </Button>
            </div>
        </div>
    )
}
