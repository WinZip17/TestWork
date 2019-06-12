import * as axios from "axios";
import {RegistResult} from "../components/Article/Content6Reg/RegFirms/RegFormsContainer";

const instance = axios.create({
    baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1/',
});

export const API = {
    getUsers(page) {
        return instance.get(`users?page=${page + 1}&count=6`)
            .then(response => {
                return response.data;
            })
    },
    getUserById(id) {
        return instance.get(`users/${id}`)
            .then(response => {
                return response.data;
            })
    },
    getPositions() {
        return instance.get(`positions`)
            .then(response => {
                return response.data;
            })
    },
    getToken() {
        return instance.get(`token`)
            .then(response => {
                return response.data.token;
            })
    },
    postUsers(singUp) {

        let formData = new FormData();
        formData.append('position_id', singUp.data.position_id);
        formData.append('name', singUp.data.name);
        formData.append('email', singUp.data.email);
        formData.append('phone', singUp.data.phone);
        formData.append('photo', singUp.data.photo);

        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
            method: 'POST',
            body: formData,
            headers: {
                'Token': singUp.data.token, // get token with GET api/v1/token method
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (data.success) {
                    RegistResult(formData, singUp.setIsVisible, singUp.clearInfoUser, singUp.resetList, singUp.getUsers, data)
                } else {
                    // proccess server errors
                }
            })
            .catch(function (error) {
                // proccess network errors
            });

    }
};
