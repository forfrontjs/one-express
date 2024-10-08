import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
// import { useAppDispatch } from "./store/hook";
// import { setEmail, setPassword } from "./store/loginSlice";
import { useLoginUserMutation } from "./store/loginSlice"; // Импортируем хук для логина
import iconDisabled from "./images/IconViewDisabled.png";
import iconEnabled from "./images/visibility_16dp_686A67_FILL0_wght200_GRAD0_opsz24.png";

const Login: FC = () => {
  const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputType, setInputType] = useState<"password" | "text">("password");
  const [message, setMessage] = useState<string>("");

  // Используем хук для логина
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputPassword(event.target.value);
  };

  const handlePasswordShow = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Отправляем данные для проверки
    try {
      const result = await loginUser({
        email: inputEmail,
        password: inputPassword,
      }).unwrap();
      // Если логин успешен
      navigate("/");
    } catch (error) {
      // Если произошла ошибка
      setMessage(error.message);
    }

    setInputEmail("");
    setInputPassword("");
  };

  return (
    <section className={styles.authorization}>
      <div className={`${styles.container} container`}>
        <h2 className={styles.loginTitle}>Авторизуйтесь</h2>
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
              type={inputType}
              id="password"
              className={styles.formInput}
              placeholder="Пароль"
              onChange={handlePasswordChange}
              value={inputPassword}
            />
            <img
              onClick={handlePasswordShow}
              className={styles.showPassword}
              src={inputType === "password" ? iconDisabled : iconEnabled}
              alt="Скрыть/показать пароль"
            />
          </label>

          <Link className={styles.formForgotPassword} to={"*"}>
            Забыли пароль?
          </Link>
          <h4>{message}</h4>
          <button className={styles.loginButton} disabled={isLoading}>
            {isLoading ? "Загрузка..." : "ВОЙТИ"}
          </button>
        </form>
        {message && <p className={styles.message}>{message}</p>}
        <div className={styles.registrationText}>
          <p>Еще не зарегистрированы?</p>
          <Link className={styles.registrationLink} to={"/registration"}>
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
