import React from 'react';
import RegistrationBlock from "./RegistrationBlock";

const StepTwo = () => {
    return <div>
            <div className='registration content-container' >
                <div className='registration-heading'>
                    <div className='registration-heading-step'>
                        <div className='registration-heading-step-back'>
                            <span>Назад</span>
                        </div>
                        Шаг 2 из 3
                    </div>
                    <div className='registration-heading-name'>
                        Загрузите селфи
                    </div>
                </div>
                <div className='registration-photo'>
                    <div className='registration-photo-description'>
                        Смотрите прямо в камеру, без солнцезащитных очков и головных уборов.
                    </div>
                    <div className='registration-photo-camera'>
                        <div className='registration-photo-camera-icon'/>
                    </div>
                </div>
            </div>
        <div className='registration-nextBtn'>
            <button>Продолжить</button>
        </div>
        </div>
};

export default StepTwo;