import React, {Component} from 'react';
import stl from './RegForms.module.css';
import stlMedia from './RegFormsMedia.module.css';
import {API} from "../../../../API/api";
import {regUsersValidation} from "./RegFormsContainer";
import LegendErrors from "./LegendErrors";
import {upload} from "../../../media/SVG";
import {Field, reduxForm} from "redux-form";
import {createTextMask} from "redux-form-input-masks";

class RegForms extends Component {

    render() {

        let singUp = {
            data: this.props.newUser,
            setIsVisible: this.props.setIsVisible,
            clearInfoUser: this.props.clearInfoUser,
            resetList: this.props.resetList,
            getUsers: this.props.getUsers
        };

        return (
            <div>
                <form onSubmit={this.props.handleSubmit} className={`${stl.forms} ${stlMedia.forms}`}>
                    <fieldset className={this.props.newUser.validations.nameValid ? "" : stl.formsError}>
                        <legend className={`${stl.Legend} ${stlMedia.Legend}`}>Name</legend>
                        <Field name={'name'} placeholder="Your name" id='signUp' component="input" type="text"/>
                        <LegendErrors
                            formErrors={this.props.newUser.validations.nameValid ? "" : this.props.newUser.validations.formErrors.name}/>
                    </fieldset>
                    <fieldset className={this.props.newUser.validations.emailValid ? "" : stl.formsError}>
                        <legend className={`${stl.Legend} ${stlMedia.Legend}`}>Email</legend>
                        <Field name={'email'} placeholder="Your email" component="input" type="text"/>
                        <LegendErrors
                            formErrors={this.props.newUser.validations.emailValid ? "" : this.props.newUser.validations.formErrors.email}/>
                    </fieldset>
                    <fieldset className={this.props.newUser.validations.phoneValid ? "" : stl.formsError}>
                        <legend className={`${stl.Legend} ${stlMedia.Legend}`}>Phone</legend>
                        <Field name={'phone'} placeholder="+380(__) ___ __ __" component="input"
                               type="tel" {...phoneMask}/>
                        <LegendErrors
                            formErrors={this.props.newUser.validations.phoneValid ? "" : this.props.newUser.validations.formErrors.phone}/>
                    </fieldset>
                    <fieldset className={`${stl.positionShell} ${stlMedia.positionShell}`}>
                        <Field name={'position'} component="select" className={`${stl.position} ${stlMedia.position}`}>
                            <option> Select your position</option>
                            {this.props.newUser.position_data.positions.map((p) => <option key={p.id}
                                                                                           value={p.id}> {p.name} </option>)}
                        </Field>
                    </fieldset>

                    <fieldset className={`${stl.photo} ${stlMedia.photo}`}>
                        <Field name="photo" updatePhoto={this.props.updatePhoto}
                               data-multiple-caption="{count} files selected" component={file_upload} type="file"/>
                        <label htmlFor="photo">
                            <span
                                className={`${stl.photoName} ${stlMedia.photoName}`}>{singUp.data.photo_file_name}</span>
                            <strong className={`${stl.buttonUpload} ${stlMedia.buttonUpload}`}><span
                                className={`${stl.uploadText} ${stlMedia.uploadText}`}>Upload </span> <span
                                className={`${stl.uploadIcon} ${stlMedia.uploadIcon}`}>{upload}</span> </strong>
                        </label>
                        <LegendErrors
                            formErrors={this.props.newUser.validations.photoValid ? "" : this.props.newUser.validations.formErrors.photo}/>
                        <p className={`${stl.commentPhoto} ${stlMedia.commentPhoto}`}> File format jpg up to 5 MB, the
                            minimum size of
                            70x70px</p>
                    </fieldset>
                    <button>test button</button>
                </form>
                <div className={`${stl.buttonSell} ${stlMedia.buttonSell}`}>
                    {regUsersValidation(this.props)
                        ? <div className="buttonPrimary" onClick={() => {
                            API.postUsers((singUp))
                        }}>Sign Up</div> : <div className="buttonInactiv">Sign Up</div>}
                </div>
            </div>
        )
    }
}


const file_upload = ({input, type, meta: {touched, error, warning}, updatePhoto}) => {
    delete input.value;

    return (
        <input onChange={updatePhoto} id="photo" accept="image/jpeg"
               className={`${stl.inputFile} ${stlMedia.inputFile}`} {...input}
               type={type}/>
    )
};


const phoneMask = createTextMask({
    pattern: '+380(99) 999 99 99',
});


const RegFormsRedux = reduxForm({
    form: 'infoUser'
})(RegForms);


export default RegFormsRedux;