import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./Registration.module.scss";
import { Link, useNavigate } from "react-router-dom";
import iconDisabled from "../Login/images/IconViewDisabled.png";
import iconEnabled from "../Login/images/visibility_16dp_686A67_FILL0_wght200_GRAD0_opsz24.png";
import { useRegisterUserMutation } from "../store/loginSlice";
const Registration: FC = () => {
  const [inputFullname, setInputFullname] = useState<string>("");
  const [inputAddress, setInputAddress] = useState<string>("");
  const [inputPhoneNumber, setInputPhoneNumber] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState<string>("");
  const [inputType, setInputType] = useState<"password" | "text">("password");
  const [message, setMessage] = useState<string>("");

  const navigate = useNavigate();

  const [registerUser] = useRegisterUserMutation();

  const handleFullnameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputFullname(e.target.value);
  };

  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputAddress(e.target.value);
  };
  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputPhoneNumber(e.target.value);
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputConfirmPassword(e.target.value);
  };

  const handlePasswordShow = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !inputFullname ||
      !inputAddress ||
      !inputPhoneNumber ||
      !inputEmail ||
      !inputPassword ||
      !inputConfirmPassword
    ) {
      setMessage("Пожалуйста, заполните все поля!");
      return;
    }

    const newUser = {
      name: inputFullname,
      address: inputAddress,
      phone: inputPhoneNumber,
      email: inputEmail,
      password: inputPassword,
    };

    if (inputPassword !== inputConfirmPassword) {
      setMessage("Пароли не совпадают!");
      return;
    } else if (inputPassword.length && inputConfirmPassword.length < 6) {
      return setMessage("Пароль должен быть не менее 6 символов!!!");
    }

    try {
      await registerUser(newUser).unwrap();

      alert("Регистрация прошла успешно!");

      setInputFullname("");
      setInputAddress("");
      setInputPhoneNumber("");
      setInputEmail("");
      setInputPassword("");
      setInputConfirmPassword("");
      navigate("/");
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
      alert("Ошибка при регистрации! Попробуйте снова.");
    }
  };

  return (
    <section className={styles.registration}>
      <div className={`${styles.container} container`}>
        <h2 className={styles.registrationTitle}>Зарегистрируйтесь</h2>
        <form onSubmit={handleFormSubmit} className={styles.registrationForm}>
          <div className={styles.formRow}>
            <label className={styles.formLabel} htmlFor="fullName">
              <input
                className={styles.formInput}
                type="text"
                id="fullName"
                placeholder="ФИО"
                value={inputFullname}
                onChange={handleFullnameChange}
              />
            </label>
            <label className={styles.formLabel} htmlFor="address">
              <input
                className={styles.formInput}
                type="text"
                id="address"
                placeholder="Адрес проживания"
                value={inputAddress}
                onChange={handleAddressChange}
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
                value={inputPhoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </label>
            <label className={styles.formLabel} htmlFor="email">
              <input
                className={styles.formInput}
                type="email"
                id="email"
                placeholder="Почта"
                value={inputEmail}
                onChange={handleEmailChange}
              />
            </label>
          </div>

          <div className={styles.formRow}>
            <label className={styles.formLabel} htmlFor="password">
              <input
                className={styles.formInput}
                type={inputType}
                id="password"
                placeholder="Пароль (не менее 6 символов)"
                value={inputPassword}
                onChange={handlePasswordChange}
              />
              <img
                onClick={handlePasswordShow}
                className={styles.showPassword}
                src={inputType === "password" ? iconEnabled : iconDisabled}
                alt="Скрыть/показать пароль"
              />
            </label>
            <label className={styles.formLabel} htmlFor="confirmPassword">
              <input
                className={styles.formInput}
                type={inputType}
                id="confirmPassword"
                placeholder="Повторите пароль"
                value={inputConfirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <img
                onClick={handlePasswordShow}
                className={styles.showPassword}
                src={inputType === "password" ? iconEnabled : iconDisabled}
                alt="Скрыть/показать пароль"
              />
            </label>
          </div>
          <button className={styles.formButton}>Регистрация</button>
        </form>
        {message && <p className={styles.message}>{message}</p>}
        <div className={styles.registrationText}>
          <p className={styles.questionsText}>Уже есть аккаунт?</p>
          <Link className={styles.loginLink} to={"/login"}>
            Войти
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Registration;
