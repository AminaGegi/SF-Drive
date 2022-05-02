import React from "react";
import "../../styles/Main.scss";
import Logo from "../../img/undraw_questions_75e0 11.svg";
import QuestionItem from "./QuestionItem";

function Main () {
        return (
            <main>
                <section className="header">
                    <div className="content-container">
                        <Logo />
                            <h1>Частые вопросы</h1>
                            <div className="header-content">Отвечаем на вопросы, которые у вас могут возникнуть.</div>
                    </div>
                </section>
                <section className="questions">
                    <QuestionItem question="Могу ли я отменить бронь?" />
                    <QuestionItem question="Могу ли я вернуть деньги, если не подошёл автомобиль?" />
                    <QuestionItem question="Что делать, если случилось ДТП?" />
                    <QuestionItem question="Могу ли я оставить автомобиль в удобном для меня месте?" answer = "Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили."/>
                    <QuestionItem question="Что делать, если собственник просит заплатить ему напрямую?" />
                    <QuestionItem question="Должен ли я заправлять автомобиль?" />
                </section>
            </main>
        )
}


export default Main;