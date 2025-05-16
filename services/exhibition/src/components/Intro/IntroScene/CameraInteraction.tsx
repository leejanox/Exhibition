//!넘 빠름
import { OrbitControls } from '@react-three/drei';
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef } from 'react';


export const CameraInteraction = () => {

    const controlsRef = useRef<OrbitControlsImpl>(null!);

    useFrame(({pointer,camera})=>{
        if(!controlsRef.current) return;
        const targetX = 2;
        const targetZ = 0;
        //right
        if(pointer.x > .3) {
            camera.position.x += (targetX - camera.position.x) * .005;
            camera.position.z += (targetZ - camera.position.z) * .005;

            camera.position.x = THREE.MathUtils.clamp(camera.position.x, 0, 5);
            camera.position.z = THREE.MathUtils.clamp(camera.position.z, 0, .5);

            controlsRef.current.target.x += (5 - controlsRef.current.target.x) * .01;
            controlsRef.current.target.x = THREE.MathUtils.clamp(controlsRef.current.target.x, 0, 5);
            controlsRef.current.update();
        }
        //left
        if(pointer.x < -.3) {
            camera.position.x -= (targetX - camera.position.x) * .005;
            camera.position.z -= (targetZ - camera.position.z) * .005;
            
            camera.position.x = THREE.MathUtils.clamp(camera.position.x, -5, 0);
            camera.position.z = THREE.MathUtils.clamp(camera.position.z, 0, .5);

            controlsRef.current.target.x -= (-5 - controlsRef.current.target.x) * .01;
            controlsRef.current.target.x = THREE.MathUtils.clamp(controlsRef.current.target.x, -5, 0);
            controlsRef.current.update();
        }
    });

    return (
        <OrbitControls ref={controlsRef}/>
    )
}
