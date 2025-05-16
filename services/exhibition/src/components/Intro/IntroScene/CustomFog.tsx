import * as THREE from 'three';
import { useMemo, useRef , useEffect} from 'react';
import { useFrame } from '@react-three/fiber';
import vt from '@exhibition/shaders/CustomFogVert.glsl?raw';
import ft from '@exhibition/shaders/CustomFogFrag.glsl?raw';

export const CustomFog = ({...props}) => {

    const ref = useRef<THREE.Mesh>(null!);
    const video = useMemo(()=>{
        const vid = document.createElement('video');
        vid.src = '/assets/video/inkDrop.mp4';
        vid.crossOrigin = 'anonymous';
        vid.muted = true;
        vid.loop = true;
        vid.playsInline = true;
        vid.autoplay = true;
        return vid;
    },[]);
    
    useEffect(() => {
        video.play().catch((e) => {
        console.warn('Video play failed:', e);
        });
    }, [video]);

    const tt = useMemo(()=> new THREE.VideoTexture(video),[video]);
    const geometry = useMemo(()=> new THREE.PlaneGeometry(120,120,140,240),[]);
    const material = useMemo(()=> new THREE.ShaderMaterial({
        uniforms:{
            uTime:{value:0},
            uTexture: {value:tt},
        },
        vertexShader:vt,
        fragmentShader:ft,
        side:THREE.DoubleSide,
        blending:THREE.AdditiveBlending,
        depthWrite:false,
        transparent:true,
    }),[tt]);

    useFrame(({clock})=>{
        const time = clock.getElapsedTime();
        const material = ref.current.material as THREE.ShaderMaterial;
        material.uniforms.uTime.value = time;
    })

    return (
        <mesh ref={ref} {...props}>
            <primitive attach='geometry' object={geometry}/>
            <primitive attach='material' object={material}/>
        </mesh>
    )
}
