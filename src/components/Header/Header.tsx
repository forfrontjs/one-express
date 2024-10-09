import { FC, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import headerLink from "../../assets/image/LogoHeader.png";
import telegram from '../../assets/image/tegramlogo.svg';
import instagram from '../../assets/image/instalogo.svg';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true); 
  };
  useEffect(() => {
    if(menuOpen){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    };
  },[menuOpen]);
  
  return (
 
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" className={styles.link}>
            <img src={headerLink} alt="Logo" />
          </Link>
        </div>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/login" className={styles.link} onClick={toggleMenu}>Вход</Link>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.link} onClick={toggleMenu}>Главная</a>
            </li>
            <li className={styles.navItem}>
              <a href="#calculate" className={styles.link} onClick={toggleMenu}>Калькулятор</a>
            </li>
            <li className={styles.navItem}>
              <a href="#tracking" className={styles.link} onClick={toggleMenu}>Отслеживание</a>
            </li>
            <li className={styles.navItem}>
              <a href="#contacts" className={styles.link} onClick={toggleMenu}>Контакты</a>
            </li>
            {menuOpen && (
              <li className={styles.navItem}>
                <Link to="/profile" className={styles.link} onClick={toggleMenu}>Личный профиль</Link>
              </li>
            )}
          </ul>
          {menuOpen && (
            <div className={styles.socialMediaIcons}>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                <img src={telegram} alt="Telegram" className={styles.socialIcon} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" className={styles.socialIcon} />
              </a>
            </div>
          )}
        </nav>
        <div className={styles.login}>
          {isLoggedIn ? (
            <button className={styles.loginButton}>Профиль</button>
          ) : (
            <button className={styles.loginButton} onClick={handleLogin}>
              <Link to="/login">Вход</Link>
            </button>
          )}
        </div>
        <div className={styles.burgerMenu} onClick={toggleMenu}>
          {menuOpen ? (
            <>
              <div className={styles.burgerIconClose}></div>
              <div className={styles.burgerIconClose}></div>
            </>
          ) : (
            <>
              <div className={`${styles.burgerIcon} ${styles.leftburger}`}></div>
              <div className={styles.burgerIcon}></div>
              <div className={`${styles.burgerIcon} ${styles.rightburger}`}></div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

