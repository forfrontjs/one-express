import React, { useEffect, useState } from "react";
import styles from "./Calculator.module.scss";
import cn from "classnames";

export const Calculator: React.FC = () => {
  const [placeholdersVisible, setPlaceholdersVisible] = useState({
    width: true,
    length: true,
    height: true,
    quantity: true,
    price: true,
    densityWeight: true,
    densityVolume: true,
  });

  const [length, setLength] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [densityWeight, setDensityWeight] = useState<number>(0);
  const [densityVolume, setDensityVolume] = useState<number>(0);
  const [isDensityMode, setIsDensityMode] = useState<boolean>(false);

  const [volume, setVolume] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [densityResult, setDensityResult] = useState<number>(0);

  const activateVolumeMode = () => {
    setIsDensityMode(false);
  };

  const activateDensityMode = () => {
    setIsDensityMode(true);
  };

  useEffect(() => {
    // Рассчитываем объем и цену только для режима объема
    if (!isDensityMode) {
      const calcVolume = (length * width * height) / 1000000;
      setVolume(calcVolume);
      setTotalPrice(calcVolume * quantity * price);
    }
  }, [length, width, height, quantity, price, isDensityMode]);

  useEffect(() => {
    // Рассчитываем плотность только для режима плотности
    if (isDensityMode) {
      setDensityResult(densityVolume !== 0 ? densityWeight / densityVolume : 0);
    }
  }, [densityWeight, densityVolume, isDensityMode]);

  // Функция обработки инпутов
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFunction: React.Dispatch<React.SetStateAction<number>>,
    inputName: keyof typeof placeholdersVisible
  ) => {
    setFunction(Number(event.target.value));
    setPlaceholdersVisible((prev) => ({ ...prev, [inputName]: false }));
  };

  return (
    <div id="Calculator" className={styles.cargoCalculator}>
      <div className={cn(styles.conteinerCalculator, "container")}>
        <div className={styles.group_cc}>
          <h2 className={styles.title_calculator}>Калькулятор</h2>
          <span className={styles.line}></span>
        </div>

        <div className={styles.calculator_skeleton}>
          <div className={styles.input_groupCalculator}>
            <div className={styles.button_CalculatorMain}>
              <button
                className={`${styles.button_Calculator2} ${
                  !isDensityMode ? styles.active : ""
                }`}
                onClick={activateVolumeMode}
              >
                <span className={styles.text_Calculator}>Объем груза (м³)</span>
              </button>
              <button
                className={`${styles.button_Calculator1} ${
                  isDensityMode ? styles.active : ""
                }`}
                onClick={activateDensityMode}
              >
                <span className={styles.text_Calculator}>
                  Объем плотности (p)
                </span>
              </button>
            </div>

            <div className={styles.input_subgroup}>
              {!isDensityMode ? (
                <>
                  {/* Инпуты для режима объема */}
                  <div className={styles.inputGroup}>
                    <input
                      type="number"
                      placeholder={
                        placeholdersVisible.width ? "Ширина (м)" : ""
                      }
                      className={styles.width_calculator}
                      value={width || ""}
                      onFocus={() =>
                        setPlaceholdersVisible((prev) => ({
                          ...prev,
                          width: false,
                        }))
                      }
                      onBlur={() =>
                        setPlaceholdersVisible((prev) => ({
                          ...prev,
                          width: true,
                        }))
                      }
                      onChange={(e) => handleInputChange(e, setWidth, "width")}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="number"
                      placeholder={
                        placeholdersVisible.length ? "Длина (м)" : ""
                      }
                      className={styles.length_calculator}
                      value={length || ""}
                      onFocus={() =>
                        setPlaceholdersVisible((prev) => ({
                          ...prev,
                          length: false,
                        }))
                      }
                      onBlur={() =>
                        setPlaceholdersVisible((prev) => ({
                          ...prev,
                          length: true,
                        }))
                      }
                      onChange={(e) =>
                        handleInputChange(e, setLength, "length")
                      }
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="number"
                      placeholder={
                        placeholdersVisible.height ? "Высота (м)" : ""
                      }
                      className={styles.height_calculator}
                      value={height || ""}
                      onFocus={() =>
                        setPlaceholdersVisible((prev) => ({
                          ...prev,
                          height: false,
                        }))
                      }
                      onBlur={() =>
                        setPlaceholdersVisible((prev) => ({
                          ...prev,
                          height: true,
                        }))
                      }
                      onChange={(e) =>
                        handleInputChange(e, setHeight, "height")
                      }
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="number"
                      placeholder={
                        placeholdersVisible.quantity ? "Количество" : ""
                      }
                      className={styles.quantity_calculator}
                      value={quantity || ""}
                      onFocus={() =>
                        setPlaceholdersVisible((prev) => ({
                          ...prev,
                          quantity: false,
                        }))
                      }
                      onBlur={() =>
                        setPlaceholdersVisible((prev) => ({
                          ...prev,
                          quantity: true,
                        }))
                      }
                      onChange={(e) =>
                        handleInputChange(e, setQuantity, "quantity")
                      }
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="number"
                      placeholder={placeholdersVisible.price ? "Цена" : ""}
                      className={styles.price_calculator}
                      value={price || ""}
                      onFocus={() =>
                        setPlaceholdersVisible((prev) => ({
                          ...prev,
                          price: false,
                        }))
                      }
                      onBlur={() =>
                        setPlaceholdersVisible((prev) => ({
                          ...prev,
                          price: true,
                        }))
                      }
                      onChange={(e) => handleInputChange(e, setPrice, "price")}
                    />
                  </div>
                  <span className={styles.button_calculatorSubgroup}>
                    <div className={styles.block_subgroupVolume}>
                      <span className={styles.block__subgroupTextVolume}>
                        {volume.toFixed(2)} м³
                      </span>
                    </div>
                    <div className={styles.block_subgroupPrice}>
                      <span className={styles.block_subgroupTextPrice}>
                        {totalPrice.toFixed(2)} сом
                      </span>
                    </div>
                  </span>
                </>
              ) : (
                <>
                  {/* Инпуты для режима плотности */}
                  <div className={styles.inputGroup}>
                    <input
                      type="number"
                      placeholder={
                        placeholdersVisible.densityWeight
                          ? "Вес груза (кг)"
                          : ""
                      }
                      className={styles.weight_calculatorSub}
                      value={densityWeight || ""}
                      onFocus={() =>
                        setPlaceholdersVisible((prev) => ({
                          ...prev,
                          densityWeight: false,
                        }))
                      }
                      onBlur={() =>
                        setPlaceholdersVisible((prev) => ({
                          ...prev,
                          densityWeight: true,
                        }))
                      }
                      onChange={(e) =>
                        handleInputChange(e, setDensityWeight, "densityWeight")
                      }
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="number"
                      placeholder={
                        placeholdersVisible.densityVolume
                          ? "Объем груза (м³)"
                          : ""
                      }
                      className={styles.volume_calculator}
                      value={densityVolume || ""}
                      onFocus={() =>
                        setPlaceholdersVisible((prev) => ({
                          ...prev,
                          densityVolume: false,
                        }))
                      }
                      onBlur={() =>
                        setPlaceholdersVisible((prev) => ({
                          ...prev,
                          densityVolume: true,
                        }))
                      }
                      onChange={(e) =>
                        handleInputChange(e, setDensityVolume, "densityVolume")
                      }
                    />
                  </div>
                  <div className={styles.block_subgroupDensity}>
                    <span className={styles.block_subgroupTextDensity}>
                      {densityVolume
                        ? `${densityResult.toFixed(2)} кг/м³`
                        : "0 кг/м³"}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
