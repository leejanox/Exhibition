import { Canvas } from '@react-three/fiber';
import styles from './EDSection1.module.scss';

export const EDSection1 = () => {
    return (
        <div className={styles.container}>
            <Canvas camera={{ position: [0, 0, .1] }}>
                <ambientLight intensity={1} />
                <axesHelper args={[5]} />
            </Canvas>
        </div>
    )
}
