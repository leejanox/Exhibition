import { Logo } from '@pmndrs/branding';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';


export const Header = ({children}:{children:React.ReactNode}) => {

    const topRef = useRef<HTMLDivElement>(null);
    const lastScrollY = useRef(0);

    useEffect(()=>{
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const isScrolleUp = currentScrollY < lastScrollY.current;
            const element = topRef.current;

            if(!element) return;

            if(currentScrollY > 50) {
                c//onsole.log('스크롤 아래로');
                gsap.to(element,{
                    y: -100,
                    duration: 0.5,
                    ease: 'power2.inOut'
                })
            }
            if(currentScrollY < 50 || isScrolleUp) {
                //console.log('스크롤 위로');
                gsap.to(element,{
                    y: 0,
                    duration: 0.5,
                    ease: 'power2.inOut'
                })
            }
            
            lastScrollY.current = currentScrollY;
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[]);

    return (
        <header id='header' className={styles.container}>
            <div className={styles.container__header}>

                <div ref={topRef} className={styles.container__header__top}>
                    <Link to='/'><Logo/></Link>
                    <nav id='header-menu'>
                        <ul className={styles.container__header__top__menu}>
                            <li className={styles.container__header__top__menu__item}>
                                <Link to='/'>Main</Link>
                            </li>
                            <li className={styles.container__header__top__menu__item}>
                                <Link to='/'>Works</Link>
                            </li>
                            <li className={styles.container__header__top__menu__item}>
                                <Link to='/'>About</Link>
                            </li>
                            <li className={styles.container__header__top__menu__item}>
                                <Link to='/'>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.container__header__bottom}>
                    {children}
                </div>
            </div>
        </header>
    )
}

//소개 페이지 헤더
interface DescriptionHeaderProps {
    title: string;
    category: string;
    location?: string;
    author?: string;
    date: string;
}

export const DescriptionHeader = ({title, category, location, author, date}:DescriptionHeaderProps) => {
    return (
        <div className={styles.container__header__bottom__inner}>
            <div className={styles.container__header__bottom__inner__title}>
                <h1>{title}</h1>
                <span>title</span>
            </div>
            <div className={styles.container__header__bottom__inner__description}>
                <ul>
                    <li><p>{category}</p><span>category</span></li>
                    {location && <li><p>{location}</p><span>location</span></li>}
                    {author && <li><p>{author}</p><span>author</span></li>}
                    <li><p>{date}</p><span>date</span></li>
                </ul>
            </div>
        </div>
    )
}
