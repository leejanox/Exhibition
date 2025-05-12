import { useEffect, useRef } from 'react';
import styles from './Loading.module.scss';
import gsap from 'gsap';

type LoadingProps = {
    handleLoading: (value:boolean) => void;
}

export const Loading = ({handleLoading}:LoadingProps) => {

    const boxRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLSpanElement>(null);

    useEffect(()=>{
        if(!boxRef.current || !counterRef.current) return;
        gsap.to(boxRef.current,{
            rotate:180,
            duration:3.5,
            ease:'circ.out',
            onStart:()=>{
                gsap.to(counterRef.current,{
                    innerHTML:100,
                    duration:3.5,
                    ease:'circ.out',
                    snap:{innerHTML:1}
                });
            },
            onComplete:()=>{
                gsap.to(counterRef.current,{
                    opacity:0,
                    duration:1,
                    ease:'circ.out',
                });
                gsap.to(boxRef.current,{
                    width:'100%',
                    height:.8,
                    duration:2.,
                    ease:'circ.out',
                    onComplete:()=>{
                        gsap.to(boxRef.current,{
                            height: 1200,
                            borderRadius:0,
                            duration:2.,
                            ease:'circ.out',
                            onComplete:()=>{
                                handleLoading(true);
                            }
                        });
                    }
                });
            }
        });
    },[]);

    return (
        <div className={styles.loading}>
            <div className={styles.loading__progress}>
                <div ref={boxRef} className={styles.loading__progress__box}/>
                <div className={styles.loading__progress__counter}>
                    <p><span ref={counterRef}>0</span></p>
                </div>
            </div>
        </div>
    )
}
