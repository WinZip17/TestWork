import stl from "../RegForms.module.css";
import stlMedia from "../RegFormsMedia.module.css";
import React from "react";
import {upload} from "../../../../media/SVG";

const RenderFileUploadField = ({
                                   input,
                                   label,
                                   type,
                                   meta: {touched, error},
                                   ...props
                               }) => {

    delete input.value;

    return (
        <fieldset
            className={`${stl.photo} ${stlMedia.photo} ${props.photoFileName !== "Upload your photo" && (error && stl.formsError)}`}>
            <input {...input} id="photo" accept="image/jpeg"
                   className={`${stl.inputFile} ${stlMedia.inputFile}`}
                   type={type}/>
            <label htmlFor="photo">
                            <span
                                className={`${stl.photoName} ${stlMedia.photoName}`}>{props.photoFileName}</span>
                <strong className={`${stl.buttonUpload} ${stlMedia.buttonUpload}`}><span
                    className={`${stl.uploadText} ${stlMedia.uploadText}`}>Upload </span> <span
                    className={`${stl.uploadIcon} ${stlMedia.uploadIcon}`}>{upload}</span> </strong>
            </label>
            {props.photoFileName !== "Upload your photo" &&
            ((error && <span className={stl.error}>{error}</span>))}
            <p className={`${stl.commentPhoto} ${stlMedia.commentPhoto}`}> File format jpg up to 5 MB, the
                minimum size of
                70x70px</p>
        </fieldset>
    )
};

export default RenderFileUploadField;