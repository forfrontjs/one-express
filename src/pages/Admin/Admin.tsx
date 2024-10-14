import styles from './Admin.module.scss'
import Photo from '../../assets/images/WhatsApp Image 2024-02-27 at 11.09 1.png'
import Delete from '../../assets/images/DeleteLogo.png'
export const Admin = () => {
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
              className={styles.admin__box__upload__photo}
            />
            <label htmlFor="file-upload" className={styles.admin__box__upload__btn}>
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
              <p>Какой-то файл много текста короче</p>
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
              <p>Какой-то файл много текста короче</p>
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


