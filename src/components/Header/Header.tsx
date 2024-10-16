import { FC, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import headerLink from "../../assets/images/LogoHeader.png";
import instaLogo from '../../assets/images/instalogo.svg'
import telegramLogo from '../../assets/images/tegramlogo.svg'
interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const isAdminPage = location.pathname === '/admin';

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogin = () => {
    setLoggedIn(!loggedIn);
  };
  
  const CloseMenu = () => {
    setMenuOpen(false)
  }
  return (
    <header className={`${styles.header} container`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" className={styles.link}>
            <img src={headerLink} alt="Logo" />
          </Link>
        </div>

        {!isAdminPage && (
          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <HashLink smooth to="/#" className={styles.link} onClick={CloseMenu}>
                  Главная
                </HashLink>
              </li>
              <li className={styles.navItem}>
                <HashLink smooth to="/#Calculator" className={styles.link} onClick={CloseMenu}>
                  Калькулятор
                </HashLink>
              </li>
              <li className={styles.navItem}>
                <HashLink smooth to="/#tracking" className={styles.link} onClick={CloseMenu}>
                  Отслеживание
                </HashLink>
              </li>
              <li className={styles.navItem}>
                <HashLink smooth to="/#Contact" className={styles.link} onClick={CloseMenu}>
                  Контакты
                </HashLink>
              </li>

              {menuOpen && (
                <>
                  <li className={styles.navItem}>
                    <Link to="/profile" className={styles.link} onClick={toggleMenu}>
                      Личный профиль
                    </Link>
                  </li>
                  {loggedIn && (
                    <li className={styles.navItem}>
                      <Link to="/" className={styles.link} onClick={toggleMenu}>
                        Выйти
                      </Link>
                    </li>
                  )}
                </>
              )}
            </ul>

            {menuOpen && (
              <div className={styles.socialLinks}>
                <a  className={styles.socialLinks} href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                <img src={instaLogo}/></a>
                <a className={styles.socialLinks} href="https://instagram.org" target="_blank" rel="noopener noreferrer">
                <img src={telegramLogo}/></a>
              </div>
            )}
          </nav>
        )}

        <div className={`${styles.burgerMenu} ${menuOpen ? styles.open : ""}`} onClick={toggleMenu}>
          <div className={`${styles.burgerIcon} ${styles.burgerLeft}`}></div>
          <div className={styles.burgerIcon}></div>
          <div className={`${styles.burgerIcon} ${styles.burgerRight}`}></div>
        </div>

        <div className={styles.login}>
          <Link to={isAdminPage ? '/login' : '/registration'} className={styles.loginButton} onClick={handleLogin}>
            {isAdminPage ? "Войти" : (loggedIn ? "Профиль" : "Вход")}
          </Link>
        </div>
      </div>
    </header>
  );
};