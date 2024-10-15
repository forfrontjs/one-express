import styles from './Admin.module.scss'
import Photo from '../../assets/images/WhatsApp Image 2024-02-27 at 11.09 1.png'
import Delete from '../../assets/images/DeleteLogo.png'
import { useUploadFileMutation } from '../store/AdminSlice'
// import { useState } from 'react'
export const Admin = () => {
  // const [uploadImg, setUploadImg] = useState<File | null>(null);
  const [uploadFile] = useUploadFileMutation();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      try {
        console.log("Загружаем файл:", file);

        const result = await uploadFile(file).unwrap();
        console.log("Файл успешно загружен:", result);
      } catch (err: any) {
        console.error("Ошибка при загрузке:", err);
        if (err.status === "FETCH_ERROR") {
          console.error("Возможно, проблема с CORS или неверный URL.");
        }
      }
    }
  };

  return (
    <div  className={`${styles.container} container`}>
      <div className={styles.admin__box}>
        <h1>Панель администрации</h1>
        <div className={styles.admin__box__carousel}>
          <div className={styles.admin__box__upload}>
            <p>Фотографии в карусели</p>
            <input
              type="file"
              id="file-upload"
              onChange={handleFileChange}
              className={styles.admin__box__upload__photo}
            />
            <label
              htmlFor="file-upload"
              className={styles.admin__box__upload__btn}
            >
              Загрузить фото
            </label>
          </div>
          <div className={styles.admin__box__carousel__photos}>
            <div className={styles.admin__box__carousel__photos__photo}>
              <img src={Photo} alt="" />
              <button>
                <img src={Delete} alt="" />
              </button>
            </div>
            <div className={styles.admin__box__carousel__photos__photo}>
              <img src={Photo} alt="" />
              <button>
                <img src={Delete} alt="" />
              </button>
            </div>
            <div className={styles.admin__box__carousel__photos__photo}>
              <img src={Photo} alt="" />
              <button>
                <img src={Delete} alt="" />
              </button>
            </div>
            <div className={styles.admin__box__carousel__photos__photo}>
              <img src={Photo} alt="" />
              <button>
                <img src={Delete} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.cards__card}>
            <h2>Выгрузить файл Excel: Китай </h2>
            <div className={styles.cards__card__box}>
              <input type="file" id="file-upload" />
              <label
                htmlFor="file-upload"
                className={styles.cards__card__label}
              >
                Выбрать файл
              </label>
              <input
                type="date"
                value="2024-10-10"
                min="2024-10-10"
              />
            </div>
            <button>Отправить</button>
          </div>
          <div className={styles.cards__card}>
            <h2>Выгрузить файл Excel: Бишкек </h2>
            <div className={styles.cards__card__box}>
              <input type="file" id="file-upload" />
              <label
                htmlFor="file-upload"
                className={styles.cards__card__label}
              >
                Выбрать файл
              </label>
              <input type="date" value="2024-06-01" />
            </div>
            <button>Отправить</button>
          </div>
          <div className={styles.cards__card}>
            <h2>Получить файл Excel: Список клиентов</h2>
            <button>Загрузить</button>
          </div>
        </div>
      </div>
    </div>
  );
}


