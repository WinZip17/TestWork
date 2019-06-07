import React from 'react';
import stl from './RegForms.module.css';
import {API} from "../../../../API/api";
import {regUsersValidation} from "./RegFormsContainer";
import LegendErrors from "./LegendErrors";


const RegForms = (props) => {

let singUp = {
    data: props.newUser,
    setIsVisible: props.setIsVisible,
    clearInfoUser: props.clearInfoUser,
    resetList: props.resetList,
    showList: props.showList,
    addElementsList: props.addElementsList
};

    return (
        <div>
            <form className={stl.forms}>
                <fieldset className={props.newUser.validations.nameValid ? "" : stl.formsError}>
                    <legend className={stl.Legend}>Name</legend>
                    <input id='signUp' onChange={props.updateName} type="text" placeholder="Your name" value={props.newUser.name}/>
                    <LegendErrors formErrors={props.newUser.validations.nameValid ? "" : props.newUser.validations.formErrors.name}/>
                </fieldset>
                <fieldset className={props.newUser.validations.emailValid ? "" : stl.formsError}>
                    <legend className={stl.Legend}>Email</legend>
                    <input onChange={props.updateEmail} type="text" placeholder="Your email" value={props.newUser.email} />
                    <LegendErrors formErrors={props.newUser.validations.emailValid ? "" : props.newUser.validations.formErrors.email}/>
                </fieldset>
                <fieldset className={props.newUser.validations.phoneValid ? "" : stl.formsError}>
                    <legend className={stl.Legend}>Phone</legend>
                    <input onChange={props.updatePhone} type="text" placeholder="+38(__) ___ __ __" value={props.newUser.phone_start + props.newUser.phone_update} />
                    <LegendErrors formErrors={props.newUser.validations.phoneValid ? "" : props.newUser.validations.formErrors.phone}/>
                </fieldset>
                <fieldset className={stl.positionShell}>
                    <select  onChange={props.updatePosition} className={stl.position}>
                        <option> Select your position </option>
                        {props.newUser.position_data.positions.map((p) => <option key={p.id} value={p.id}> {p.name} </option>) }
                    </select>
                </fieldset>
                <fieldset className={stl.photo}>
                    <input onChange={props.updatePhoto} type="file" className={stl.inputFile} name="file" id="file" accept="image/jpeg"
                           data-multiple-caption="{count} files selected"/>
                    <label htmlFor="file">
                        <span className={stl.photoName}>{props.newUser.photo_file_name}</span>
                        <strong className={stl.buttonUpload}>Upload</strong>
                    </label>
                    <LegendErrors formErrors={props.newUser.validations.photoValid ? "" : props.newUser.validations.formErrors.photo}/>
                    <p className={stl.commentPhoto}> File format jpg up to 5 MB, the minimum size of
                        70x70px</p>
                </fieldset>
            </form>
            <div className={stl.buttonSell}>
                {regUsersValidation(props)
                    ? <div className="buttonPrimary" onClick={()=> {API.postUsers((singUp))}}>Sign Up</div> : <div className="buttonInactiv" >Sign Up</div>}
            </div>
        </div>
    )
};


export default RegForms;