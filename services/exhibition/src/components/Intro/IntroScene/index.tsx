import { Canvas,  } from '@react-three/fiber';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import styles from './IntroScene.module.scss';
import { Logo, LogoFull } from '@pmndrs/branding';
import { CustomSphere } from './CustomSphere/CustomSphere';
import {  Bloom, EffectComposer } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { CameraInteraction2 } from './CameraMoving/CameraInteraction2';
import { Link } from 'react-router-dom';

const Overlay = ({setIsMenuOpen}: {setIsMenuOpen: (value: boolean) => void}) => {
    return (
        <div className={styles.overlay}>
            <header className={styles.overlay__header}>
                <Logo className={styles.overlay__header__logo}/>
                <menu className={styles.overlay__header__menu}
                    onClick={() => {setIsMenuOpen(true)}}
                >
                    <p>Menu</p>
                    <Menu className={styles.overlay__header__menu__icon}/>
                </menu>
            </header>
            <div className={styles.overlay__body}>
                <button className={styles.overlay__body__button}>
                    <Link to={'/'}>Preview Exhibition</Link>
                </button>
                <h1 className={styles.overlay__body__title}>
                    <span>2025</span>
                    <span>AI</span>
                    <span>Infinity</span>
                    <span>展</span>
                </h1>
                <p className={styles.overlay__body__description}>
                    made by &nbsp;&nbsp;<span>janox</span>
                </p>
            </div>
            <footer className={styles.overlay__footer}>
                <LogoFull className={styles.overlay__footer__logo}/>
            </footer>
        </div>
    )
}

const Underlay = ({loadingState}:{loadingState:boolean}) => {
    
    return (
        <div className={styles.underlay}>
            <Canvas /*camera={{position:[0,0,100],fov:75 }}*/>
                <CameraInteraction2 loadingState={loadingState}/>
                <ambientLight intensity={10}/>
                <CustomSphere geomCfg={{radius:40,detail:40}} shadCfg={{speed:9}}/>
                <EffectComposer>
                    <Bloom
                        luminanceThreshold={.1}
                        luminanceSmoothing={.9}
                        intensity={1.5}
                        blendFunction={BlendFunction.ADD}
                        kernelSize={2}
                    />
                </EffectComposer>
            </Canvas>
        </div>
    );
}

export const IntroScene = ({loadingState}:{loadingState:boolean}) => {

    //useLoader.preload(THREE.TextureLoader, '/video/inkDrop.mp4');

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={styles.introScene}>
            <div className={styles.introScene__container}>
                {isMenuOpen === true ? null : <Overlay setIsMenuOpen={setIsMenuOpen}/>}
                <Underlay loadingState={loadingState}/>
            </div>
        </div>
    )
}
