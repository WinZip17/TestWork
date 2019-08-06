import React, {Component} from 'react';
import stl from './RegForms.module.css';
import stlMedia from './RegFormsMedia.module.css';
import {upload} from "../../../media/SVG";
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
                    <Field name={'name'} legendName="Name" placeholder="Your name" id='signUp' component={renderField}
                           type="text" validate={[required, maxLength60, minLength2]}/>
                    <Field name={'email'} legendName="Email" placeholder="Your email" component={renderField}
                           type="text" validate={[required, emailValid]}/>
                    <Field legendName="Phone" name={'phone'} placeholder="+380(__) ___ __ __" component={renderField}
                           type="tel" {...phoneMask} validate={[required, phoneNumber]}/>
                    <Field name={'position'} component={renderSelectField}
                           positions={this.props.newUser.position_data.positions} validate={[required, positionValid]}/>
                    <Field name="photo" data-multiple-caption="{count} files selected" component={renderFileUploadField} type="file"
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
}

const renderFileUploadField = ({input, type, meta: {touched, error, warning}, ...props}) => {
    delete input.value;
    return (
        <fieldset
            className={`${stl.photo} ${stlMedia.photo} ${touched && (error && stl.formsError) || (warning && stl.formsError)}`}>
            <input {...input} id="photo"  accept="image/jpeg"
                    className={`${stl.inputFile} ${stlMedia.inputFile}`}
                   type={type}/>
            <LabelForFile photoFileName={props.photoFileName}/>
            {touched &&
            ((error && <span className={stl.error}>{error}</span>) ||
                (warning && <span className={stl.error}>{warning}</span>))}
            <p className={`${stl.commentPhoto} ${stlMedia.commentPhoto}`}> File format jpg up to 5 MB, the
                minimum size of
                70x70px</p>
        </fieldset>
    )
};

const renderSelectField = ({
                               input,
                               label,
                               type,
                               meta: {touched, error, warning},
                               ...props
                           }) => (
    <fieldset
        className={`${stl.positionShell} ${stlMedia.positionShell} ${touched && (error && stl.formsError) || (warning && stl.formsError)}`}>
        <select {...input} className={`${stl.position} ${stlMedia.position}`}>
            <option> Select your position</option>
            {props.positions.map((p) => <option key={p.id} value={p.id}> {p.name} </option>)}
        </select>
        {touched &&
        ((error && <span className={stl.error}>{error}</span>) ||
            (warning && <span className={stl.error}>{warning}</span>))}
    </fieldset>
);


const renderField = ({
                         input,
                         label,
                         type,
                         meta: {touched, error, warning},
                         ...props
                     }) => (
    <div>
        <fieldset className={touched && (error && stl.formsError) || (warning && stl.formsError)}>
            <legend className={`${stl.Legend} ${stlMedia.Legend}`}>{props.legendName}</legend>
            <input {...input} placeholder={label} className={stl.input} type={type}/>

            {touched &&
            ((error && <span className={stl.error}>{error}</span>) ||
                (warning && <span className={stl.error}>{warning}</span>))}
        </fieldset>

    </div>
);

const LabelForFile = (props) => {
    return <label htmlFor="photo">
                            <span
                                className={`${stl.photoName} ${stlMedia.photoName}`}>{props.photoFileName}</span>
    <strong className={`${stl.buttonUpload} ${stlMedia.buttonUpload}`}><span
        className={`${stl.uploadText} ${stlMedia.uploadText}`}>Upload </span> <span
        className={`${stl.uploadIcon} ${stlMedia.uploadIcon}`}>{upload}</span> </strong>
</label>
}

const phoneMask = createTextMask({
    pattern: '+380(99) 999 99 99',
});


const RegFormsRedux = reduxForm({
    form: 'infoUser'
})(RegForms);


export default RegFormsRedux;