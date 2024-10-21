import React, { useState, useEffect } from "react";
import styles from "./ProgressBar.module.scss";
import standartImg from "../../../assets/images/Medallions.png";
import zolotoImg from "../../../assets/images/Gold.png";
import platinaImg from "../../../assets/images/Platinum@2x.png";

interface Level {
  name: string;
  weight: number;
  price: string;
  img: string;
}

const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [levels, setLevels] = useState<Level[]>([]);
  const [currentWeight, setCurrentWeight] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data: Level[] = [
        { name: "СТАНДАРТ", weight: 1, price: "3.7$", img: standartImg },
        { name: "ЗОЛОТО", weight: 500, price: "3.5$", img: zolotoImg },
        { name: "ПЛАТИНА", weight: 1000, price: "3.3$", img: platinaImg },
      ];
      setLevels(data);
      setCurrentWeight(800);  
    };

    fetchData();
  }, []);

  useEffect(() => {
    const maxWeight = levels[levels.length - 1]?.weight || 1000;
    setProgress((currentWeight / maxWeight) * 100);
  }, [levels, currentWeight]);

  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.textContainer}>
        <h1>
          Повышайте свой уровень{" "}
          <span className={styles.bonusText}>и получайте бонусы</span>
        </h1>
        <div className={styles.resetInfo}>
          *уровень сбрасывается каждые 3 месяца
        </div>
      </div>

      <div className={styles.progress}>
        <div
          className={styles.progressFill}
          style={{ width: `${progress}%` }}
        />
        <div className={styles.progressLabel}>{currentWeight} кг</div>
      </div>
      <div className={styles.levels}>
        {levels.map((level, index) => (
          <div key={index} className={styles.level}>
            <img
              src={level.img}
              alt={level.name}
              className={styles.levelIcon}
            />
            <div className={styles.levelInfo}>
              <p>{level.name}</p>
              <p>
                {level.weight} кг - {level.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
