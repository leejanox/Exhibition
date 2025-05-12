import { useEffect, useRef, useState } from "react";
import { IntroScene } from "@exhibition/components/Intro/IntroScene";
import styles from './styles/Intro.module.scss';
import { Loading } from "@exhibition/components/Intro/Loading";
import gsap from "gsap";


export const Intro = () => {

    const [isLoading,setIsLoading] = useState(false);

    //ref
    const loadingRef = useRef<HTMLDivElement>(null);
    const IntroSceneRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        console.log(isLoading);
        if(isLoading === true){
            gsap.to(loadingRef.current,{
                zIndex:0,
                opacity:0,
                duration:1,
                ease:'circ.out'
            });           
            gsap.to(IntroSceneRef.current,{
                opacity:1,
                zIndex:1,
                duration:1,
                ease:'circ.out',
            }); 
        }
    },[isLoading]);

    return (
        <div className={styles.container}>
            <div ref={loadingRef} className={styles.container__loading}>
                <Loading handleLoading={setIsLoading}/>
            </div>
            <div ref={IntroSceneRef} className={styles.container__introScene}>
                <IntroScene loadingState={isLoading}/>
            </div>
        </div>
    )
}

