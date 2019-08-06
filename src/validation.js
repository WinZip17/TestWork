
export const required = value => {
    if (value)return undefined;
    return "Field is required"
};


export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const emailValid = value =>
    value && !/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i.test(value)
        ? 'Invalid email address'
        : undefined;

export const phoneNumber = value =>
    value && !/^(0|[1-9][0-9]{8})$/i.test(value)
        ? 'Invalid phone number, must be 9 digits'
        : undefined;

export const positionValid = value =>
    value && isNaN(Number(value))
        ? 'Select position'
        : undefined;

export const photoSize = value =>
    value && value[0].size > 5120000
        ? 'Size must not exceed 5MB'
        : undefined;