// import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss"

import logo from "../../assets/images/footer/Logotype.png"
import tele from "../../assets/images/footer/Telegram.png"
import inst from "../../assets/images/footer/Instagram (1).png"

import "../../assets/styles/_global.scss"

export const Footer = () => {
  return (
        
        <div className="container">
    <div className="footer" >
        <div className="inner">
            <img className="firstlogo" src={logo} alt="" />
            <nav className="contacts">
                <Link to="/home" className="links">Главная</Link>
                <Link to="/calc" className="links">Калькулятор</Link>
                <Link to="/navigate" className="links">Отслеживание</Link>
                <Link to="/contacts" className="links">Контакты</Link>
                </nav>
            <div className="social">
                <a href="https://telegram.org"><img className="sociallogos" src={tele} alt="" /></a>
                <a href="https://instagram.com"><img className="sociallogos" src={inst} alt="" /></a>
                </div>
        </div>
            


        </div>

        </div>


    
  )

};


