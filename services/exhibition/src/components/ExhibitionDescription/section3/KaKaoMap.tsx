import { useEffect } from 'react';

declare global {
    interface Window {
        kakao: any;
    }
}

export const KakaoMap = () => {
    useEffect(() => {
        const scriptId = 'kakao-map-script';
        const isScriptExist = document.getElementById(scriptId);

        const initMap = () => {
        window.kakao.maps.load(() => {
            const container = document.getElementById('map');
            const options = {
            center: new window.kakao.maps.LatLng(37.5665, 126.9780),
            level: 3,
            };

            const map = new window.kakao.maps.Map(container, options);
            const marker = new window.kakao.maps.Marker({
            position: map.getCenter(),
            map,
            });
        });
        };

        if (!isScriptExist) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src =
            'https://dapi.kakao.com/v2/maps/sdk.js?appkey=fd0147869fe359badcb4156f4f985010&autoload=false';
        script.async = true;
        script.onload = initMap;
        document.head.appendChild(script);
        } else {
        if (window.kakao?.maps) {
            window.kakao.maps.load(initMap);
        } else {
            isScriptExist.addEventListener('load', initMap);
        }
        }
    }, []);

    return <div id="map" style={{ width: '100%', height: '80vh' }} />;
};
