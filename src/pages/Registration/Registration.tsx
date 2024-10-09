import { ChangeEvent, FC, FormEvent, useState } from "react";
import styles from "./Registration.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../Login/store/loginSlice";

const Registration: FC = () => {
  const [inputFullname, setInputFullname] = useState<string>("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputPhoneNumber, setInputPhoneNumber] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");
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
      alert("Пожалуйста, заполните все поля!");
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
      alert("Пароли не совпадают!");
      return;
    }

    try {
      await registerUser(newUser).unwrap();

      const storedUsers = JSON.parse(localStorage.getItem("mockUsers") || "[]");

      const updatedUsers = [...storedUsers, newUser];

      localStorage.setItem("mockUsers", JSON.stringify(updatedUsers));

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
                type="password"
                id="password"
                placeholder="Пароль (не менее 6 символов)"
                value={inputPassword}
                onChange={handlePasswordChange}
              />
            </label>
            <label className={styles.formLabel} htmlFor="confirmPassword">
              <input
                className={styles.formInput}
                type="password"
                id="confirmPassword"
                placeholder="Повторите пароль"
                value={inputConfirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </label>
          </div>
          <button className={styles.formButton}>Регистрация</button>
        </form>
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
