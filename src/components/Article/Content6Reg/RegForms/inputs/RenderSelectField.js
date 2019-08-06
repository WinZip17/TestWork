import stl from "../RegForms.module.css";
import stlMedia from "../RegFormsMedia.module.css";
import React from "react";

const RenderSelectField = ({
                               input,
                               label,
                               type,
                               meta: {touched, error},
                               ...props
                           }) => (
    <fieldset
        className={`${stl.positionShell} ${stlMedia.positionShell} ${touched && (error && stl.formsError)}`}>
        <select {...input} className={`${stl.position} ${stlMedia.position}`}>
            <option> Select your position</option>
            {props.positions.map((p) => <option key={p.id} value={p.id}> {p.name} </option>)}
        </select>
        {touched &&
        ((error && <span className={stl.error}>{error}</span>))}
    </fieldset>
);

export default RenderSelectField;