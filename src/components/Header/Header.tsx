import { FC, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import headerLink from "../../assets/images/LogoHeader.png";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const isAdminPage = location.pathname === "/Admin";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogin = () => {
    setLoggedIn(!loggedIn);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
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
                <a href="#" className={styles.link}>
                  Главная
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#Calculator" className={styles.link}>
                  Калькулятор
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#tracking" className={styles.link}>
                  Отслеживание
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#Contacts" className={styles.link}>
                  Контакты
                </a>
              </li>

              {menuOpen && (
                <>
                  <li className={styles.navItem}>
                    <Link
                      to="/profile"
                      className={styles.link}
                      onClick={toggleMenu}
                    >
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
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
                <a
                  href="https://vk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </div>
            )}
          </nav>
        )}

        <div
          className={`${styles.burgerMenu} ${menuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <div className={`${styles.burgerIcon} ${styles.burgerLeft}`}></div>
          <div className={styles.burgerIcon}></div>
          <div className={`${styles.burgerIcon} ${styles.burgerRight}`}></div>
        </div>

        <div className={styles.login}>
          <Link
            to={isAdminPage ? "/login" : "/registration"}
            className={styles.loginButton}
            onClick={handleLogin}
          >
            {isAdminPage ? "Войти" : loggedIn ? "Профиль" : "Вход"}
          </Link>
        </div>
      </div>
    </header>
  );
};
