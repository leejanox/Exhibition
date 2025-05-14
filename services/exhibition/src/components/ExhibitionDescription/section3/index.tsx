import styles from './EDSection3.module.scss';
import { KakaoMap } from '@exhibition/components/common/KaKaoMap';
import { MapPin, Phone, TramFront, TrendingUp } from 'lucide-react';


export const EDSection3 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container__map}>
                <h1>오시는 길</h1>
                <KakaoMap />
                <div className={styles.container__info}>
                    <div className={styles.container__info__address}>
                        <MapPin />
                        <p>강원 춘천시 영서로 2260 1층 문화공간역</p>
                    </div>
                    <div className={styles.container__info__phone}>
                        <Phone />
                        <p>02-541-8888</p>
                    </div>
                </div>
                <div className={styles.container__transportation}>
                    <div className={styles.container__transportation__subway}>
                        <TramFront />
                        <p>(경춘) 남춘천역 3번 출구에서 16m</p>
                    </div>
                    <div className={styles.container__transportation__bus}>
                        <TrendingUp />
                        <p>남춘천 역 2번 출구에서 내려오면 바로 앞에 있습니다.</p>
                    </div>
                </div>
            </div>
            <div className={styles.container__guest}>
                <h1>방명록</h1>

            </div>
        </div>
    )
}
