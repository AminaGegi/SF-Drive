import React from 'react';
import RegistrationBlock from "./RegistrationBlock";

const StepThree = () => {
    return <div>
        <div className='registration content-container' >
            <div className='registration-heading'>
                <div className='registration-heading-step'>
                    <div className='registration-heading-step-back'>
                        <span>Назад</span>
                    </div>
                    Шаг 3 из 3
                </div>
                <div className='registration-heading-name'>
                    Загрузите документы
                </div>
            </div>
            <div className='registration-photo'>
                <div className='registration-photo-description'>
                    Разворот паспорта и страницу с пропиской, а также водительское удостоверение с двух сторон
                </div>
                <div className='registration-document'>
                    <div className='registration-document-download'>
                        <div className='registration-document-icon'/>
                        <div className='registration-document-download-fullscreen'><span className='registration-document-download-name'>Перетащите или </span>
                        <span className='registration-document-download-link'>выберите файл</span></div>
                        <div className='registration-document-download-mobile'>Загрузить файл</div>
                        <div className='registration-document-download-description'>JPG или PNG, не более 30мб</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='registration-nextBtn'>
            <button>Зарегистрироваться</button>
        </div>
    </div>
};

export default StepThree;