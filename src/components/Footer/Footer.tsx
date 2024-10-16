import React, { useEffect } from 'react'; 
import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from 'react-router-dom';
import style from "./Footer.module.scss";
import logo from "../../assets/images/footer/Logotype.png";
import tele from "../../assets/images/footer/Telegram.png";
import inst from "../../assets/images/footer/Instagram (1).png";
import "../../assets/styles/_global.scss";

export const Footer: React.FC = () => {
    const location = useLocation(); 


    function removeParagraph(): void {
        const paragraphs: NodeListOf<HTMLElement> = document.querySelectorAll('nav'); 
        paragraphs.forEach((nav: HTMLElement) => nav.remove());
    }


    function checkScreenSize(): void {
        if (window.matchMedia('(max-width: 768px)').matches) {
            removeParagraph();
        }
    }

  
    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    if (location.pathname === "/admin") {
        return null;
    }

    return (
        <div className={`${style.container} container`}>    
            <div className={style.footer}>
                <div className={style.inner}>
                    <Link to="/"><img className={style.firstlogo} src={logo} alt="Логотип" /></Link>
                    <nav className={style.contacts}>        
                        <HashLink smooth to="/#" className={style.links}>Главная</HashLink>
                        <HashLink smooth to="/#Calculator" className={style.links}>Калькулятор</HashLink>
                        <HashLink smooth to="/#tracking" className={style.links}>Отслеживание</HashLink>
                        <HashLink smooth to="/#Contact" className={style.links}>Контакты</HashLink>
                    </nav>
                    <div className={style.social}>
                        <a href="https://telegram.org"><img className={style.sociallogos} src={tele} alt="Telegram" /></a>
                        <a href="https://instagram.com"><img className={style.sociallogos} src={inst} alt="Instagram" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};



