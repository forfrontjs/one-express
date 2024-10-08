import { FC } from "react";
import styles from "./Registration.module.scss";
import { Link } from "react-router-dom";

const Registration: FC = () => {
  return (
    <section className={styles.registration}>
      <div className={`${styles.container} container`}>
        <h2 className={styles.registrationTitle}>Зарегистрируйтесь</h2>
        <form className={styles.registrationForm}>
          <div className={styles.formRow}>
            <label className={styles.formLabel} htmlFor="fullName">
              <input
                className={styles.formInput}
                type="text"
                id="fullName"
                placeholder="ФИО"
              />
            </label>
            <label className={styles.formLabel} htmlFor="address">
              <input
                className={styles.formInput}
                type="text"
                id="address"
                placeholder="Адрес проживания"
              />
            </label>
          </div>

          <div className={styles.formRow}>
            <label className={styles.formLabel} htmlFor="phone">
              <input
                className={styles.formInput}
                type="tel"
                id="phone"
                placeholder="Номер телефона"
              />
            </label>
            <label className={styles.formLabel} htmlFor="email">
              <input
                className={styles.formInput}
                type="email"
                id="email"
                placeholder="Почта"
              />
            </label>
          </div>

          <div className={styles.formRow}>
            <label className={styles.formLabel} htmlFor="password">
              <input
                className={styles.formInput}
                type="password"
                id="password"
                placeholder="Пароль (не менее 6 символов)"
              />
            </label>
            <label className={styles.formLabel} htmlFor="confirmPassword">
              <input
                className={styles.formInput}
                type="password"
                id="confirmPassword"
                placeholder="Повторите пароль"
              />
            </label>
          </div>
          <button className={styles.formButton}>Регистрация</button>
        </form>
        <div className={styles.registrationText}>
          <p className={styles.questionsText}>Уже есть аккаунт?</p>
          <Link className={styles.loginLink} to={"*"}>
            Войти
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Registration;
