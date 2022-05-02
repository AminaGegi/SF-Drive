import React, {useState} from "react";
import "../../styles/RegistrationBlock.scss"


function RegistrationBlock (props){

    const [button, setButton] = useState(false);
    const handleToggle = () => {
        setButton(!button);
    };
       return  <div className='registration__block'>
                   <label htmlFor={props.label} className='registration__block-label'>
                       {props.blockName}
                   </label>
                    <div className={`registration__block-input ${props.size} `}>
                        <input className={` ${props.size}  ${props.size}  `}
                               type={button?props.text:props.password}
                               placeholder={props.placeholder}
                               defaultValue={props.value}
                                name={props.name}
                                onChange={props.onChange}
                               minLength={props.minLength}
                        pattern={props.pattern}/>
                        {props.button?<button className={props.isActive}  onClick={handleToggle}
                        style={{display: `${props.display? "block":"none"}`,
                                backgroundColor: 'transparent',
                                border: 'none',
                                cursor: 'pointer'}}>
                           {button ? props.btnActive:props.btnDisActive}
                        </button>:""}
                    </div>

                </div>
}

export default RegistrationBlock;