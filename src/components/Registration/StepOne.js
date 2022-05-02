import React, {useState} from 'react';
import RegistrationBlock from "./RegistrationBlock";
import '../../styles/Registration.scss'
import useForm from "../hooks/useForm";

const StepOne = () => {
    const formLogin = () => {

        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
    };
const {handleChange, values, errors, handleSubmit} = useForm(formLogin);

    return <div>
            <div className='registration content-container' >
                <div className='registration-heading'>
                    <div className='registration-heading-step one'>
                        Шаг 1 из 3
                    </div>
                    <div className='registration-heading-name'>
                        <b>Расскажите о себе</b>
                    </div>
                </div>
                <div className='registration-block'>
        <form onSubmit={handleSubmit}>
            <div className='registration-block-name'>Информация о вас</div>
            <RegistrationBlock blockName='ФИО' placeholder='ФИО полностью' size={'big'} text={'text'} name={'username'} onChange={handleChange}/>
            {
                errors.username && <h3>{errors.username}</h3>
            }
            <RegistrationBlock blockName='Дата рождения' value='1970-01-01' password={'date'}/>
                <RegistrationBlock blockName='Электронная почта' placeholder='mail@example.com' size={'big'} text={'email'} name="email" onChange={handleChange}/>
            {
                errors.email && <h3>{errors.email}</h3>
            }
                <RegistrationBlock blockName='Телефон' placeholder='+7(900) 000-00-00' pattern={'[0-9]{3}-[0-9]{3}-[0-9]{4}'} text={'tel'}/>
            <div className='registration-block-name'>Паспорт</div>
                <RegistrationBlock blockName='Серия и номер' placeholder='0000 000000' />
                <RegistrationBlock blockName='Дата выдаи' value='1970-01-01' password={'date'} />
                <RegistrationBlock blockName='Кем выдан' placeholder='Название органа выдавшего паспорт' size={'big'} />
                <RegistrationBlock blockName='Код подразделения' placeholder='000-000' />
            <div className='registration-block-name'>Водительское удостоверение</div>
                <RegistrationBlock blockName='Серия и номер' placeholder='0000 000000' />
                <RegistrationBlock blockName='Дата выдаи' value='1970-01-01' password={'date'} />
            <div className='registration-block-name'>Пароль</div>
                <RegistrationBlock blockName='Придумайте пороль' placeholder='•••••••••••••••••••' size={'big'}
                                   btnActive={<img src='img/registration/eye-on.svg' />}
                                   btnDisActive={<img src='img/registration/eye-off.svg' />}
                                    display={true}
                                    password={'password'}
                                    text={'text'}
                                    button={true}
                                   minLength='8' name="password" onChange={handleChange}/>
            {
                errors.password && <h3>{errors.password}</h3>
            }
                                <RegistrationBlock blockName='Повторите пароль' placeholder='•••••••••••••••••••' size={'big'}
                                                   btnActive={<img src='img/registration/eye-on.svg' />}
                                                   btnDisActive={<img src='img/registration/eye-off.svg' />}
                                                   display={true}
                                                   password={'password'}
                                                   text={'text'}
                                                   button={true}
                                                   minLength='8' name="wPassword" onChange={handleChange}/>
            {
                errors.password && <h3>{errors.password}</h3>
            }
        </form>



                </div>

            </div>
        <div className='registration-nextBtn'>
            <button>Продолжить</button>
        </div>
        </div>
};

export default StepOne;