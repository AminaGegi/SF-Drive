import React from "react";
import "../../styles/Registration.scss"
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";


function Registration (){
const p = true;
const i=false;

    return <div>
        {p? <StepOne/>:i? <StepTwo/>:<StepThree/>}
    </div>
}

export default Registration;