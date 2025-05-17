import { useEffect, useRef} from 'react';
import styles from './Gallery.module.scss';
import { PosterImages } from './poster';
import gsap from 'gsap';

export const Gallery = () => {

    const headerRef = useRef<HTMLDivElement>(null);
    const h1Text = '1학년 & 하이테크 생성형 이미지';

    useEffect(()=>{
        if(!headerRef.current) return;
        const chars = headerRef.current.querySelectorAll('.char');
        if(!chars || chars.length === 0) return;

        gsap.fromTo(chars,{
            opacity: 0, y: 20
        },{
            opacity: 1, y: 0, duration: 1, ease: 'power2.inOut', stagger: 0.1
        });
    },[]);

    return (
        <div className={styles.container}>
            <div ref={headerRef} className={styles.container__header}>
                <h1>
                    {h1Text.split('').map((v,i)=>(
                        <span key={i} className='char'>{v}</span>
                    ))}
                </h1>
            </div>
            <div className={styles.container__body}>
                {PosterImages.map((v,i)=>(
                    <div id={`${v.id}`} className={styles.container__body__item} key={i}>
                        <img src={v.src} alt={v.alt}/>
                        <div className='background'>
                            <div className='background__top'>
                                <h2>{v.author}</h2>
                            </div>
                            <div className='background__bottom'>
                                <h2>{v.title}</h2>
                                <p>{v.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}