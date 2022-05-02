import React from "react";
import "../../styles/AboutUs.scss";
import "../../"
import Logo from "../../img/logo-about-us.svg";
import Ivanov from "../../img/ivanov.svg";
import Deeva from "../../img/deeva.svg";
import Morozov from "../../img/morozov.svg";
import Smirnov from "../../img/smirnov.svg";
import Strelkova from "../../img/strelkova.svg";
import Yarcev from "../../img/yarcev.svg";



class AboutUs extends React.Component {
    render() {
        return (
            <main>
                <section className="header">
                    <div className="content-container">
                        <Logo alt="logo" className="header-img" />
                        <h1>О нас</h1>
                        <div className="header-content">Это учебный проект, созданный с целью получения боевого
                            опыта в разработке настоящего живого веб-приложения. Этот сервис имитирует работу
                            каршеринга, в котором можно не только арендовать автомобили, но и сдавать их в аренду.
                        </div>
                    </div>
                </section>
                <section className="contacts is-grey">
                    <div className="content-container">
                        <h2>Контакты</h2>
                        <div className="contacts-block">
                            <div className="contacts-block-email">
                                <p className="contacts-block-name">
                                    Электронная почта
                                </p>
                                <p className="contacts-block-content">
                                    drive@skillfactory.com
                                </p>
                            </div>
                            <div className="contacts-block-phone">
                                <p className="contacts-block-name">
                                    Телефон
                                </p>
                                <p className="contacts-block-content">
                                    +7 912 123-45-67
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team__frame">
                    <div className="content-container">
                        <h2>Команда</h2>
                        <div className="team__frame-container">
                            <div className="team__frame-container-item">
                                <Ivanov alt="photo by Ivanov"/>
                                    <div className="team__frame-container-item-name">Иван Иванов</div>
                                    <div className="team__frame-container-item-prof">CEO</div>
                            </div>
                            <div className="team__frame-container-item">
                                <Smirnov alt="photo by Smirnov"/>
                                    <div className="team__frame-container-item-name">Алексей Смирнов</div>
                                    <div className="team__frame-container-item-prof">Frontend-разработчик</div>
                            </div>
                            <div className="team__frame-container-item">
                                <Yarcev alt="photo by Yarcev"/>
                                    <div className="team__frame-container-item-name">Денис Ярцев</div>
                                    <div className="team__frame-container-item-prof">Backend-разработчик</div>
                            </div>
                            <div className="team__frame-container-item">
                                <Morozov alt="photo by Morozov"/>
                                    <div className="team__frame-container-item-name">Николай Морозов</div>
                                    <div className="team__frame-container-item-prof">Дизайнер</div>
                            </div>
                            <div className="team__frame-container-item">
                                <Deeva alt="photo by Deeva"/>
                                    <div className="team__frame-container-item-name">Ирина Деева</div>
                                    <div className="team__frame-container-item-prof">копирайтер</div>
                            </div>
                            <div className="team__frame-container-item">
                                <Strelkova alt="photo by Strelkova"/>
                                    <div className="team__frame-container-item-name">Мария Стрелкова</div>
                                    <div className="team__frame-container-item-prof">SMM</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}


export default AboutUs;