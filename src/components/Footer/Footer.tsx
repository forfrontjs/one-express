import { Link } from "react-router-dom";
import style from "./Footer.module.scss"
import logo from "../../assets/images/footer/Logotype.png"
import tele from "../../assets/images/footer/Telegram.png"
import inst from "../../assets/images/footer/Instagram (1).png"

import "../../assets/styles/_global.scss"

export const Footer = () => {

  function removeParagraph() {
    const paragraphs = document.querySelectorAll('nav'); 
    paragraphs.forEach(nav => nav.remove()); 
}

function checkScreenSize() {
  if (window.matchMedia('(max-width: 768px)').matches) {
      removeParagraph();
  }
}

checkScreenSize();

window.addEventListener('resize', checkScreenSize);


  return (
        
    <div className={style.footer} >
        <div className={`${style.container} container`}>
        <div className={style.inner}>
            <img className={style.firstlogo} src={logo} alt="" />
            <nav className={style.contacts}>
                <Link to="/home" className={style.links}>Главная</Link>
                <Link to="/calc" className={style.links}>Калькулятор</Link>
                <Link to="/navigate" className={style.links}>Отслеживание</Link>
                <Link to="/contacts" className={style.links}>Контакты</Link>
                </nav>
            <div className={style.social}>
                <a href="https://telegram.org"><img className={style.sociallogos} src={tele} alt="" /></a>
                <a href="https://instagram.com"><img className={style.sociallogos} src={inst} alt="" /></a>
                </div>
        </div>
            


        </div>

        </div>


    
  )

};


