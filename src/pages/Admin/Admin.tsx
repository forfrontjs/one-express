import styles from './Admin.module.scss'
import Delete from '../../assets/images/DeleteLogo.png'
import { useDeleteImagesMutation, useUploadFileMutation, useUploadImageMutation } from '../store/AdminSlice'
import { useState } from 'react'
import { useGetImagesQuery } from '../store/loginSlice';



export const Admin: React.FC = () => {
   const {
     data: images = [],
     isLoading,
     isError,
     refetch,
   } = useGetImagesQuery();
   const [uploadImage] = useUploadImageMutation();
   const [deleteImage] = useDeleteImagesMutation();
   const [uploadFile] = useUploadFileMutation();
  // const {
  //   data: excelBlob,
  //   isLoading: isExcelLoading,
  //   error: excelError,
  // } = useDownloadExcelQuery();


   const [imageFile, setImageFile] = useState<File | null>(null); // Для изображения
   const [excelFile, setExcelFile] = useState<File | null>(null); // Для Excel-файла
   const [date, setDate] = useState<string>("");

    // const handleDownloadExcel = () => {
    //   if (excelBlob) {
    //     const url = window.URL.createObjectURL(excelBlob);
    //     const link = document.createElement("a");
    //     link.href = url;
    //     link.setAttribute("download", "users.xlsx"); // Имя файла
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    //     window.URL.revokeObjectURL(url);
    //   }
      
    // };

   const handleDelete = async (id: number) => {
     try {
       await deleteImage(id).unwrap();
       console.log(`Изображение с id ${id} успешно удалено.`);
       refetch(); 
     } catch (error) {
       console.error("Ошибка при удалении изображения:", error);
     }
   };

   // Обработчик выбора изображения
const handleUploadImage = async () => {
  if (imageFile) {
    try {
      console.log("Загружаем изображение:", imageFile);
      const result = await uploadImage(imageFile).unwrap();
      console.log("Изображение успешно загружено:", result);
      refetch(); 
    } catch (err: any) {
      console.error("Ошибка при загрузке изображения:", err);
    }
  } else {
    alert("Пожалуйста, выберите изображение.");
  }
};


   // Обработчик выбора Excel-файла
   const handleExcelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        setExcelFile(e.target.files[0]);
        console.log("Файл выбран:", e.target.files[0]); 
      }
   };

   const formatDate = (dateString: string) => {
     const [year, month, day] = dateString.split("-") 
     return `${day}-${month}-${year}`;
   };
   // Обработчик отправки Excel-файла
   const handleUploadExcel = async (e: React.FormEvent) => {
     e.preventDefault();
    console.log("Проверка данных перед отправкой:", { excelFile, date });

     if (excelFile && date) {
       const formattedDate = formatDate(date); 
       
       try {
         const result = await uploadFile({
           file: excelFile,
           date: formattedDate,
         }).unwrap();
         console.log("Excel-файл успешно загружен:", result);
         alert("Excel-файл успешно загружен:");
       } catch (error) {
         console.error("Ошибка при загрузке Excel-файла:", error);
       }
     } else {
       alert("Пожалуйста, выберите файл и дату.");
       console.log(date);
       
     }
   };

   if (isLoading) return <p>Загрузка изображений...</p>;
   if (isError) return <p>Ошибка при загрузке изображений.</p>;
  return (
    <div className={`${styles.container} container`}>
      <div className={styles.admin__box}>
        <h1>Панель администрации</h1>
        <div className={styles.admin__box__carousel}>
          <div className={styles.admin__box__upload}>
            <p>Фотографии в карусели</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className={styles.uploadImageForm}
            >
              <input
                type="file"
                id="file-upload"
                onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                className={styles.admin__box__upload__photo}
              />
              <label
                htmlFor="file-upload"
                className={styles.admin__box__upload__btn}
              >
                Загрузить фото
              </label>
              <button type="button" onClick={handleUploadImage}>
                Сохранить
              </button>
            </form>
          </div>
          <div className={styles.admin__box__carousel__photos}>
            {images.map((el) => (
              <div
                key={el.id}
                className={styles.admin__box__carousel__photos__photo}
              >
                <div className={styles.imageBox}>
                  <img
                    src={`${import.meta.env.VITE_APP_URL}/uploads/${
                      el.id
                    }/download`}
                    id={`photo-${el.id}`}
                    alt={`Фото ${el.id}`}
                  />
                </div>
                <button
                  aria-label={`${el.id}`}
                  onClick={() => handleDelete(el.id)}
                >
                  <img src={Delete} alt="Удалить" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.cards}>
          <form className={styles.cards__card} onSubmit={handleUploadExcel}>
            <h2>Выгрузить файл Excel: Китай </h2>
            <div className={styles.cards__card__box}>
              <input
                type="file"
                id="china-file-upload"
                onChange={handleExcelChange}
                accept=".xlsx, .xls"
              />
              <label
                htmlFor="china-file-upload"
                className={styles.cards__card__label}
              >
                Выбрать файл
              </label>
              <input
                type="date"
                min="2024-10-10"
                max="2030-10-10"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <button type="submit">Отправить</button>
          </form>
          <form className={styles.cards__card} onSubmit={handleUploadExcel}>
            <h2>Выгрузить файл Excel: Бишкек </h2>
            <div className={styles.cards__card__box}>
              <input
                type="file"
                id="bish-file-upload"
                onChange={handleExcelChange}
                accept=".xlsx, .xls"
              />
              <label
                htmlFor="bish-file-upload"
                className={styles.cards__card__label}
              >
                Выбрать файл
              </label>
              <input
                type="date"
                min="2024-10-10"
                max="2030-10-10"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <button type="submit">Отправить</button>
          </form>
          <div className={styles.cards__card}>
            <h2>Получить файл Excel: Список клиентов</h2>
            {/* onClick={handleDownloadExcel} disabled={isExcelLoading} */}
            <button>Загрузить</button>
            {/* {excelError && (
              <p>
                Ошибка при скачивании Excel файла:{" "}
                {
                  // Проверяем тип ошибки
                  "status" in excelError
                    ? `Статус: ${excelError.status}, Данные: ${JSON.stringify(
                        excelError.data
                      )}`
                    : "Неизвестная ошибка"
                }
              </p>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};


