import React, {Component} from 'react';
import stl from './RegForms.module.css';
import stlMedia from './RegFormsMedia.module.css';
import {Field, reduxForm} from "redux-form";
import {createTextMask} from "redux-form-input-masks";
import {
    emailValid,
    maxLength,
    minLength,
    phoneNumber,
    photoSize,
    positionValid,
    required
} from "../../../../validation";
import RenderField from "./inputs/RenderField";
import RenderFileUploadField from "./inputs/RenderFileUploadField";
import RenderSelectField from "./inputs/RenderSelectField";


const phoneMask = createTextMask({
    pattern: '+380(99) 999 99 99',
});

//валидаторы
const maxLength60 = maxLength(60);
const minLength2 = minLength(2);

class RegForms extends Component {

    render() {

        const {invalid, submitting, pristine} = this.props;

        let photoFileName = {
            data: this.props.newUser,
        };

        return (
            <div>
                <form id="formRegister" onSubmit={this.props.handleSubmit} className={`${stl.forms} ${stlMedia.forms}`}>
                    <Field name={'name'} legendName="Name" placeholder="Your name" id='signUp' component={RenderField}
                           type="text" validate={[required, maxLength60, minLength2]}/>
                    <Field name={'email'} legendName="Email" placeholder="Your email" component={RenderField}
                           type="text" validate={[required, emailValid]}/>
                    <Field legendName="Phone" name={'phone'} placeholder="+380(__) ___ __ __" component={RenderField}
                           type="tel" {...phoneMask} validate={[required, phoneNumber]}/>
                    <Field name={'position'} component={RenderSelectField}
                           positions={this.props.newUser.position_data.positions} validate={[required, positionValid]}/>
                    <Field name="photo" data-multiple-caption="{count} files selected" component={RenderFileUploadField}
                           type="file"
                           photoFileName={photoFileName.data.photo_file_name} validate={[required, photoSize]}/>
                </form>
                <div className={`${stl.buttonSell} ${stlMedia.buttonSell}`}>
                    <button type="submit" form="formRegister" className="buttonPrimary"
                            disabled={invalid || submitting || pristine}>Sign Up
                    </button>
                </div>
            </div>
        )
    }
};


const RegFormsRedux = reduxForm({
    form: 'infoUser'
})(RegForms);


export default RegFormsRedux;