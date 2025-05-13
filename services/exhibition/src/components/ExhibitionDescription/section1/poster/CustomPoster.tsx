import { useMemo } from 'react';
import * as THREE from 'three';

export const CustomPoster = () => {
    
    const test = useMemo(()=>{
        const geometry = new THREE.PlaneGeometry(1.414, 1);
        const material = new THREE.MeshBasicMaterial({color: 'white'});
        return new THREE.Mesh(geometry, material);
    },[])

        return (
            <primitive object={test} />
    )
}
