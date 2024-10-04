import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./store/hook";
import { setEmail, setPassword } from "./store/loginSlice";

const Login: FC = () => {
  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector((state) => state.loginSlice);

  const [inputEmail, setInputEmail] = useState(email);
  const [inputPassword, setInputPassword] = useState(password);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputPassword(event.target.value);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(setEmail(inputEmail));
    dispatch(setPassword(inputPassword));
    setInputEmail("");
    setInputPassword("");
  };
  return (
    <section className={styles.authorization}>
      <div className={`${styles.container} container`}>
        <h2 className={styles.loginTitle}>Авторизируйтесь</h2>
        <form onSubmit={handleFormSubmit} className={styles.formAuthorization}>
          <label htmlFor="email" className={styles.formLabel}>
            <input
              type="email"
              id="email"
              className={styles.formInput}
              placeholder="Почта"
              onChange={handleEmailChange}
              value={inputEmail}
            />
          </label>
          <label htmlFor="password" className={styles.formLabelPasword}>
            <input
              type="password"
              id="password"
              className={styles.formInput}
              placeholder="Пароль"
              onChange={handlePasswordChange}
              value={inputPassword}
            />
          </label>
          <Link className={styles.formForgotPassword} to={"*"}>
            Забыли пароль?
          </Link>
          <button className={styles.loginButton}>ВОЙТИ</button>
        </form>
        <div className={styles.registrationText}>
          <p>Еще не зарегестрированы?</p>
          <Link className={styles.registrationLink} to={"*"}>
            Зарегестрироваться
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
