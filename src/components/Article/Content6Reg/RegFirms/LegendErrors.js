import React from 'react';
import stl from './RegForms.module.css';

const LegendErrors = (props) => {
    return (
        <legend className={stl.error}>
            {props.formErrors}
        </legend>
    )
};

export default LegendErrors;



