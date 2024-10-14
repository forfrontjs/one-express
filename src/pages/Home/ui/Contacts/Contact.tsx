import style from "./Contacts.module.scss"
import logo1 from "../../../../assets/images/contacts/Phone number 1.png"
import logo2 from "../../../../assets/images/contacts/Phone number 2.png"
import logo3 from "../../../../assets/images/contacts/Phone number 3.png"
import  "../../../../assets/styles/_global.scss"



export const Contact = () => {
  return (
    <div className={`${style.container} container`}>
    <div className={style.contact}>
        <div className={style.conta}>
            <p>Контакты</p>
            <div></div>
            
        </div>
        <div className={style.adres}>
            <div className={style.time}>
                <div className={style.biw}>
                    <p className={style.p3}>Бишкек</p>
                    <p className={style.p4}>пр. Чуй 119/1</p>
                    <p className={style.p5}>Как добраться?</p>
                </div>
                <div className={style.line2}></div>
                <div className={style.den}>
                    <div >
                        <p className={style.p1}>Понедельник - Суббота</p>
                        <p className={style.p2}>10:00 - 18:00</p></div>
                    <div>
                        <p className={style.p1}>Воскресенье</p>
                        <p className={style.p2}>Выходной</p>
                    </div>
                </div>
            </div>
            
            <div className={style.phone}>
                <div>
                    <p>Отдел поиска и выкупа товаров</p>
                    <a href="tel:+996555333883"><img src={logo1} alt="" /></a>
                </div>
                <div>
                    <p>Служба поддержки клиентов</p>
                    <a href="tel:+996777333883"><img src={logo2} alt="" /></a>
                </div>
                <div>
                    <p>Крупногабаритные товары</p>
                    <a href="tel:+996707333883"><img src={logo3} alt="" /></a>
                </div>
            </div>
        </div>

    </div>
    </div>);
};


