import React from "react"
import style from "./Contacts.module.scss"
import whatsapp from "../../../../assets/images/contacts/whatsapp-light.png"
import whatsapp2 from "../../../../assets/images/contacts/whatsapp-dark.png"

import  "../../../../assets/styles/_global.scss"



export const Contact: React.FC = () => {

    function replaceParagraphTextByClass(): void {
        const paragraphs: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('.voskr'); 
        paragraphs.forEach(p => {
            p.textContent = 'Воскр'; 
        });

        const paragraphs2: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('.poned'); 
        paragraphs2.forEach(p => {
            p.textContent = 'Пон - Субб'; 
        });
    }
    
   
    function checkScreenSize(): void {
        if (window.matchMedia('(max-width: 768px)').matches) {
          
            replaceParagraphTextByClass();
        }
    }
    
    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);




  return (
    <div id="Contact" className={`${style.container} container`}>
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
                    <a href="https://instagram.com"><p className={style.p5}>как добраться?</p></a>
                </div>
                <div className={style.line2}></div>
                <div className={style.den}>
                    <div >
                        <p className={`${style.p1} poned`}>Понедельник - Суббота</p>
                        <p className={style.p2}>10:00 - 18:00</p></div>
                    <div>
                        <p className={`${style.p1} voskr`}>Воскресенье</p>
                        <p className={style.p2}>Выходной</p>
                    </div>
                </div>
            </div>            
            <div className={style.phone}>
                <div className={style.phone_box}>
                    <p>Отдел поиска и выкупа товаров</p>
                    <a href="tel:+996555333883">
                        <div className={style.img1}>
                        <div className={style.div1}><img src={whatsapp} alt="image" /></div>
                        <div className={style.div2}><span className={style.spann}>+996555333883</span></div>
                        
                        </div>
                    </a>
                </div>
                <div className={style.phone_box}>
                    <p>Служба поддержки клиентов</p>
                    <a href="tel:+996777333883">
                        <div className={style.img2}>
                        <div className={style.div1}><img src={whatsapp} alt="image" /></div>
                        <div className={style.div2}><span>+996777333883</span></div>
                        
                        </div>
                    </a>
                </div>
                <div className={style.phone_box}>
                    <p>Крупногабаритные товары</p>
                    <a href="tel:+996707333883">
                        <div className={style.img3}>
                        <div className={style.div1}><img src={whatsapp2} alt="image" /></div>
                        <div className={style.div2}><span>+996707333883</span></div>
                        
                        </div>
                    </a>
                </div>
            </div>
        </div>

    </div>
    </div>);
};


