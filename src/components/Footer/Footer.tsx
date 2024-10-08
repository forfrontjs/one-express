// import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss"

import logo from "./Logotype.png"
import tele from "./Telegram.png"
import inst from "./Instagram (1).png"

export const Footer = () => {
  return (
        
        
    <div className="footer" >
        <div className="inner">
            <img className="firstlogo" src={logo} alt="" />
            <nav className="contacts">
                <Link to="#" className="links">Главная</Link>
                <Link to="#" className="links">Калькулятор</Link>
                <Link to="#" className="links">Отслеживание</Link>
                <Link to="#" className="links">Контакты</Link>
                </nav>
            <div className="social">
                <a href="#"><img className="sociallogos" src={tele} alt="" /></a>
                <a href="#"><img className="sociallogos" src={inst} alt="" /></a>
                </div>
        </div>
            


        </div>


    
  )

};


