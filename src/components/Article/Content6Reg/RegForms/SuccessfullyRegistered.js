import React from "react";
import stl from './RegForms.module.css';
import stlMedia from "./RegFormsMedia.module.css";

const Successfully = (props) => {
    return (
        <div>
            <div className={stl.fon}></div>
            <div className={`${stl.congratulationsDiv} ${stlMedia.congratulationsDiv}`}>
                <h3>Congratulations</h3>
                <p>You have successfully passed <br/>the registration</p>
                <button className="buttonText" onClick={() => {
                    props.isVisible(false)
                }}>OK
                </button>
            </div>
        </div>
    )
};

export default Successfully;