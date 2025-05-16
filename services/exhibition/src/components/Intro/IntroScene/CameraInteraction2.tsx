import { PerspectiveCamera } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";


export const CameraInteraction2 = ({loadingState}:{loadingState:boolean}) => {

    const camRef = useRef(null!);
    const [start,setStart] = useState(0);

    useEffect(()=>{
        if(loadingState === true){
            setStart(performance.now());
        }
    },[loadingState]);

    useFrame(({/*clock,pointer,*/camera})=>{
        if(!camRef.current || !loadingState || start === 0) return;
        //const time = clock.getElapsedTime();
        const elapsed = (performance.now() - start) / 1000;

        if(camera instanceof THREE.PerspectiveCamera){
            if(elapsed < 3.5){
                const targetFov = THREE.MathUtils.lerp(75,67,elapsed / 3);
                camera.fov = targetFov;
                camera.updateProjectionMatrix();
            }

            // const offsetX = THREE.MathUtils.clamp(pointer.x * .5,-10,10);
            // const offsetY = THREE.MathUtils.clamp(pointer.y * .5,-10,10);

            // camera.position.x += (offsetX - camera.position.x) * .5;
            // camera.position.y += (offsetY - camera.position.y) * .5;
            
            camera.lookAt(0,0,0);
        }
    });

    return (
        <PerspectiveCamera ref={camRef} makeDefault position={[0,0,100]} fov={75} near={.1} far={1000}/>
    )
}
