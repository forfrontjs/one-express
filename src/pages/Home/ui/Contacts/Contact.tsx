import "./Contacts.scss"
import logo1 from "./Phone number 1.png"
import logo2 from "./Phone number 2.png"
import logo3 from "./Phone number 3.png"
import  "../../../../assets/styles/_global.scss"



export const Contact = () => {
  return (
    <div className="container">
    <div className="contact">
        <div className="conta">
            <p>Контакты</p>
            <div></div>
            
        </div>
        <div className="adres">
            <div className="time">
                <div className="biw">
                    <p className="p3">Бишкек</p>
                    <p className="p4">пр. Чуй 119/1</p>
                    <p className="p5">Как добраться?</p>
                </div>
                <div className="line2"></div>
                <div className="den">
                    <div >
                        <p className="p1">Понедельник - Суббота</p>
                        <p className="p2">10:00 - 18:00</p></div>
                    <div>
                        <p className="p1">Воскресенье</p>
                        <p className="p2">Выходной</p>
                    </div>
                </div>
            </div>
            
            <div className="phone">
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
{/*         
        <div className="navi"></div> */}
    </div>
    </div>);
};


