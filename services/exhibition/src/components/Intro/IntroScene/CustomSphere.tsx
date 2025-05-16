import vt from '@exhibition/shaders/CustomSphereVert.glsl?raw'
import ft from '@exhibition/shaders/CustomSphereFrag.glsl?raw'
import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

type CustomSphereProps = {
    position?:[number,number,number],
    rotation?:[number,number,number],
    scale?:[number,number,number],
    geomCfg?:{
        radius?:number
        detail?:number
    },
    shadCfg?:{
        speed?:number
    }
}

export const CustomSphere = ({geomCfg,shadCfg,...props}:CustomSphereProps) => {

    const ref = useRef<THREE.Points>(null!);

    const icosGeometry = useMemo(()=> 
        new THREE.IcosahedronGeometry(
            geomCfg?.radius??40,geomCfg?.detail??40
        ),[geomCfg]);

    const icosShaderMaterial = useMemo(()=> new THREE.ShaderMaterial({
        uniforms:{
            uTime: { value: .0},
            uSpeed: { value: shadCfg?.speed??9.},
        },
        vertexShader:vt,
        fragmentShader:ft,
        side:THREE.DoubleSide,
        wireframe:false,
        transparent:true,
    }),[shadCfg]);

    useFrame(({clock})=>{
        if(!ref.current) return;
        //time
        const time = clock.getElapsedTime();
        const material = ref.current.material as THREE.ShaderMaterial;
        material.uniforms.uTime.value = time;
    });
    
    return (
        <points ref={ref} {...props}>
            <primitive attach="geometry" object={icosGeometry}/>
            <primitive attach="material" object={icosShaderMaterial}/>
        </points>
    )
}
