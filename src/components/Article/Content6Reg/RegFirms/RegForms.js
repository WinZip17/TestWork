import React from 'react';
import stl from './RegForms.module.css';
import stlMedia from './RegFormsMedia.module.css';
import {API} from "../../../../API/api";
import {regUsersValidation} from "./RegFormsContainer";
import LegendErrors from "./LegendErrors";
import InputMask  from 'react-input-mask';
import {upload} from "../../../media/SVG";


const RegForms = (props) => {

let singUp = {
    data: props.newUser,
    setIsVisible: props.setIsVisible,
    clearInfoUser: props.clearInfoUser,
    resetList: props.resetList,
    getUsers: props.getUsers
};
    return (
        <div>
            <form className={`${stl.forms} ${stlMedia.forms}`}>
                <fieldset className={props.newUser.validations.nameValid ? "" : stl.formsError}>
                    <legend className={`${stl.Legend} ${stlMedia.Legend}`}>Name</legend>
                    <input id='signUp' onChange={props.updateName} type="text" placeholder="Your name" value={props.newUser.name}/>
                    <LegendErrors formErrors={props.newUser.validations.nameValid ? "" : props.newUser.validations.formErrors.name}/>
                </fieldset>
                <fieldset className={props.newUser.validations.emailValid ? "" : stl.formsError}>
                    <legend className={`${stl.Legend} ${stlMedia.Legend}`}>Email</legend>
                    <input onChange={props.updateEmail} type="text" placeholder="Your email" value={props.newUser.email} />
                    <LegendErrors formErrors={props.newUser.validations.emailValid ? "" : props.newUser.validations.formErrors.email}/>
                </fieldset>
                <fieldset className={props.newUser.validations.phoneValid ? "" : stl.formsError}>
                    <legend className={`${stl.Legend} ${stlMedia.Legend}`}>Phone</legend>
                    <InputMask onChange={props.updatePhone} type="text" mask='+380(99) 999 99 99'  maskChar="_" placeholder="+380(__) ___ __ __" value={props.newUser.phone} />
                    <LegendErrors formErrors={props.newUser.validations.phoneValid ? "" : props.newUser.validations.formErrors.phone}/>
                </fieldset>
                <fieldset className={`${stl.positionShell} ${stlMedia.positionShell}`}>
                    <select  onChange={props.updatePosition} className={`${stl.position} ${stlMedia.position}`}>
                        <option> Select your position </option>
                        {props.newUser.position_data.positions.map((p) => <option key={p.id} value={p.id}> {p.name} </option>) }
                    </select>
                </fieldset>
                <fieldset className={`${stl.photo} ${stlMedia.photo}`}>
                    <input onChange={props.updatePhoto} type="file" className={`${stl.inputFile} ${stlMedia.inputFile}`} name="file" id="file" accept="image/jpeg"
                           data-multiple-caption="{count} files selected"/>
                    <label htmlFor="file">
                        <span className={`${stl.photoName} ${stlMedia.photoName}`}>{props.newUser.photo_file_name}</span>
                        <strong className={`${stl.buttonUpload} ${stlMedia.buttonUpload}`}><span className={`${stl.uploadText} ${stlMedia.uploadText}`}>Upload </span> <span className={`${stl.uploadIcon} ${stlMedia.uploadIcon}`}>{upload}</span> </strong>
                    </label>
                    <LegendErrors formErrors={props.newUser.validations.photoValid ? "" : props.newUser.validations.formErrors.photo}/>
                    <p className={`${stl.commentPhoto} ${stlMedia.commentPhoto}`}> File format jpg up to 5 MB, the minimum size of
                        70x70px</p>
                </fieldset>
            </form>
            <div className={`${stl.buttonSell} ${stlMedia.buttonSell}`}>
                {regUsersValidation(props)
                    ? <div className="buttonPrimary" onClick={()=> {API.postUsers((singUp))}}>Sign Up</div> : <div className="buttonInactiv" >Sign Up</div>}
            </div>
        </div>
    )
};


export default RegForms;