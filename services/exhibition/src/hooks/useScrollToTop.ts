import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export const useScrollToTop = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto',//'smooth'
        });
    }, [pathname]);

    return null;
}
