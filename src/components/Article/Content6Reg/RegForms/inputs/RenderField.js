import stl from "../RegForms.module.css";
import stlMedia from "../RegFormsMedia.module.css";
import React from "react";

const RenderField = ({
                         input,
                         label,
                         type,
                         meta: {touched, error},
                         ...props
                     }) => (
    <div>
        <fieldset className={`"" ${touched && (error && stl.formsError)}`}>
            <legend className={`${stl.Legend} ${stlMedia.Legend}`}>{props.legendName}</legend>
            <input {...input} placeholder={label} className={stl.input} type={type}/>

            {touched &&
            ((error && <span className={stl.error}>{error}</span>) )}
        </fieldset>

    </div>
);
export default RenderField;
