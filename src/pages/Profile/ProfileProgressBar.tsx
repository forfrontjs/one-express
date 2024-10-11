import React, { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import axios from "axios";
import styles from "./ProfileProgressBar.module.scss";
import standardBadge from "../../assets/images/Medallions.png";
import goldBadge from "../../assets/images/Gold.png";
import platinumBadge from "../../assets/images/Platinum.png";

interface UserStats {
  weight: number;
}

const ProfileProgressBar: React.FC = () => {
  const [weight, setWeight] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const response = await axios.get<UserStats>(
          "http://192.168.68.236:5009/users/three-month/a1b0d145-5ad4-40bb-8595-defd75ece3be"
        );

        console.log("Response status:", response.status);
        console.log("Response data:", response.data);

        if (response.data && typeof response.data.weight === "number") {
          setWeight(response.data.weight);
        } else {
          console.error("Unexpected response data format:", response.data);
          setError("Unexpected response data format");
        }
      } catch (error) {
        console.error("Ошибка при получении статистики пользователя:", error);
        setError("Ошибка при получении статистики пользователя");
      }
    };

    fetchUserStats();
  }, []);

  useEffect(() => {
    console.log("Weight updated:", weight);
  }, [weight]);

  const progress = (weight / 1000) * 100;
  console.log("Progress calculated:", progress);

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.box}>
          <h2 className={styles.h2}>
            Повышайте свой уровень и получайте бонусы
          </h2>
          <h3 className={styles.resetNotice}>
            *уровень сбрасывается каждые 3 месяца
          </h3>
        </div>
        <div className={styles.levels}>
          <div className={styles.level}>
            <img src={standardBadge} alt="Standard Badge" />
            <div className={styles.levelName}>СТАНДАРТ</div>
            <div className={styles.levelPrice}>1 кг - 3.7$</div>
          </div>
          <div className={styles.level}>
            <img src={goldBadge} alt="Gold Badge" />
            <div className={styles.levelName}>ЗОЛОТО</div>
            <div className={styles.levelPrice}>500 кг - 3.5$</div>
          </div>
          <div className={styles.level}>
            <img src={platinumBadge} alt="Platinum Badge" />
            <div className={styles.levelName}>ПЛАТИНА</div>
            <div className={styles.levelPrice}>1000 кг - 3.3$</div>
          </div>
        </div>
        <div className={styles.progressBarContainer}>
          <div className={styles.progressValue}>{weight} кг</div>
          <ProgressBar
            completed={progress}
            customLabel=" "
            height="10px"
            // bgcolor="#ffcc00"
            baseBgColor="#1e1e1e"
            labelColor="#000"
          />
        </div>
        {error && <div className={styles.error}>{error}</div>}
      </div>
    </div>
  );
};

export default ProfileProgressBar;
