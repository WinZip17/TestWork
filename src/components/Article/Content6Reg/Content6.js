import React from 'react';
import './Content6.css';
import './Content6Media.css';
import RegFormsContainer from "./RegForms/RegFormsContainer";

const Content6 = () => {
    return (
        <div className="backgroundAlt6">
            <div className="alt6">
                <div className="headers6">
                    <h1> Register to get a work </h1>
                    <div className="paragraph6">
                        <p> Attention! After successful registration and alert, update the list of users in the
                            block from the top</p>
                    </div>
                </div>
                <RegFormsContainer />
            </div>
        </div>
    );
};

export default Content6;