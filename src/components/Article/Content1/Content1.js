import React from 'react';
import './Content1.css'

const Content1 = () => {
    return (
        <div className="backgroundAlt1">
            <div className="art1">
                <h1 className="art1Text heading1">Test assignment for Frontend Developer position</h1>
                <p className="art1Text p1">We kindly remind you that your test assignment
                    should be submitted as a link to github/bitbucket
                    repository. Please be patient, we consider and
                    respond to every application that meets minimum
                    requirements. We look forward to your submission.
                    Good luck!</p>
                <div className="buttonPrimary buttonArt1" onClick={() => {window.location.hash="signUp"}} >Sign Up</div>
            </div>
        </div>
    );
};

export default Content1;