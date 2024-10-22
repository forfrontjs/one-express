import React, { useState } from "react";
import styles from "./Profile.module.scss";
// console.log(styles);

const Profile: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="container">
      <div className={styles.profileSection}>
        <div className={styles.TitleSection}>
          <h2 className={styles.PersonalProfile}>Личный профиль</h2>
          <div className={styles.Line7}></div>
        </div>

        <div className={styles.Secret}>
          <a href="" className={styles.ChangePassword}>
            Сменить пароль
          </a>

          <div className={styles.PersonalCodeInfo}>
            <a href="#" className={styles.PersonalCode}>
              Персональный код
            </a>
            <div className={styles.ONEicon}>
              <p className={styles.ONE}>ONE-1</p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0569 13.7238C14.422 14.3588 13.5687 14.671 12.6728 14.6667C11.7788 14.6623 10.913 14.3427 10.263 13.7107L9.30702 12.7812L7.44795 14.6931L8.4039 15.6226C9.59459 16.7803 11.1432 17.326 12.6599 17.3333C14.1848 17.3406 15.7487 16.8033 16.9426 15.6094L22.2761 10.2762C23.4803 9.07201 24 7.5095 24 6.00001C24 4.49052 23.4802 2.928 22.2761 1.72385C21.0719 0.519702 19.5093 7.23688e-06 17.9998 0C16.4903 -5.74273e-06 14.9278 0.519689 13.7236 1.72385L12.7807 2.66666L14.6664 4.55228L15.6092 3.60947C16.246 2.97267 17.0964 2.66667 17.9998 2.66667C18.9032 2.66668 19.7536 2.97268 20.3904 3.60947C21.0272 4.24629 21.3333 5.09664 21.3333 6.00002C21.3333 6.90338 21.0272 7.75373 20.3904 8.39053L15.0569 13.7238Z"
                  fill="#F5D100"
                />
                <path
                  d="M8.94305 10.2762C9.57803 9.64122 10.4313 9.32903 11.3272 9.33335C12.2212 9.33766 13.087 9.65726 13.737 10.2893L14.693 11.2188L16.552 9.30694L15.5961 8.37743C14.4054 7.21966 12.8568 6.67401 11.3401 6.66671C9.81521 6.65936 8.2513 7.19667 7.05738 8.39055L1.72391 13.7238C0.51974 14.928 0 16.4905 0 18C0 19.5095 0.519753 21.072 1.72393 22.2761C2.92811 23.4803 4.49066 24 6.00016 24C7.50968 24 9.07225 23.4803 10.2764 22.2761L11.2193 21.3333L9.3336 19.4477L8.39077 20.3905C7.75395 21.0273 6.90358 21.3333 6.00017 21.3333C5.09676 21.3333 4.24641 21.0273 3.6096 20.3905C2.97277 19.7537 2.66674 18.9034 2.66674 18C2.66674 17.0966 2.97276 16.2463 3.60958 15.6095L8.94305 10.2762Z"
                  fill="#F5D100"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.Statistics}>
        <div className={styles.StatisticsButton}>
          <h2 className={styles.YourStatistics}>
            Ваша статистика за текущий месяц
          </h2>
          <button onClick={toggleDropdown} className={styles.changeMonth}>
            Выбрать другой месяц
            <span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 23 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.178 19.1769L13.178 0.722049H10.2781L10.2781 19.1769L2.50058 11.3994L0.45003 13.4499L11.728 24.7279L23.006 13.4499L20.9555 11.3994L13.178 19.1769Z"
                  fill="#626262"
                />
              </svg>
            </span>
          </button>

          {isDropdownOpen && (
            <ul className={styles.dropdownMenu}>
              <li>Январь</li>
              <li>Февраль</li>
              <li>Март</li>
              <li>Апрель</li>
              <li>Май</li>
              <li>Июнь</li>
              <li>Июль</li>
              <li>Август</li>
              <li>Сентябрь</li>
              <li>Октябрь</li>
              <li>Ноябрь</li>
              <li>Декабрь</li>
            </ul>
          )}
        </div>

        <div className={styles.MonthStatistics}>
          <div className={styles.NumberOrders}>
            <p className={styles.Orders}>Количество заказов</p>
            <div className={styles.Number}>0</div>
          </div>

          <div className={styles.NumberOrders}>
            <p className={styles.Orders}>Вес заказов</p>
            <div className={styles.Number}>0 кг</div>
          </div>

          <div className={styles.NumberOrders}>
            <p className={styles.Orders}>Оплачено</p>
            <div className={styles.NumberSom}>0 сом</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
