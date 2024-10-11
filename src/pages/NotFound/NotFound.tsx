import React from "react";
import styles from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <img
        className={styles.gif}
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDk4OW50Nmdxc2YyeTYzNjN4bWNoM2ZrdXF2dGY1ZG00ZnNmd3JlbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9J7tdYltWyXIY/giphy.webp"
        alt="404 Not Found"
      />
      <a href="/">Вернуться на главную страницу</a>
    </div>
  );
};

export default NotFound;
