import React from "react";
import style from "./header.module.css";
import logo2 from "../../images/logo2.png";

export const Header = () => (
    <header className={style.header_container}>
        <span className={style.header_title}>News</span>
        <img className={style.header_logo} src={logo2} alt={"logo"}/>
    </header>
)