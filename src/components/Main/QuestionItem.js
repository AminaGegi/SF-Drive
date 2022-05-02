import React, { useState } from "react";
import "../../styles/QuestionItems.scss";

function QuestionItem(props) {
    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };
    return (
        <div className="questions-item">
            <div onClick={handleToggle} className={`questions-item-question ${isActive ? "active" : ""}`}>
                <div className="questions-item-question-content">{props.question}</div>
            </div>
            <p className={`questions-item-answer ${isActive ? "active" : ""}`}>{props.answer}</p>
        </div>
    );
}

export default QuestionItem;