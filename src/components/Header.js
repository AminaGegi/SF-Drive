import React, {useState} from "react";
import "../styles/Header.scss"
import {Link} from "react-router-dom";


function Header() {
  return (
        <header>
            <div className="menu__frame">
                <div className="menu__frame-logo">
                    <a href="" className="icon-Logo" aria-label="You can find more information about SkillDrive here" />
                </div>
                <nav className="menu__frame-navbar">
                    <div className="menu__frame-navbar-menu">
                        <Link to='/aboutus' className="menu__frame-navbar-menu-link is-animated"
                           aria-label="You can find more information about Us">О нас</Link>
                        <a className="menu__frame-navbar-menu-link is-animated"
                           aria-label="you can find the conditions">Условия</a>
                        <Link to='' className="menu__frame-navbar-menu-link is-animated"
                           aria-label="you can find answers to frequently asked questions">Частые вопросы</Link>
                    </div>
                    <Link to='/registration'><div className="menu__frame-navbar-enter is-animated">Войти</div></Link>
                </nav>
                <div className="icon-menu is-mobile" />
            </div>
        </header>
    )
}

export default Header;