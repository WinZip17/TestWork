import React from 'react';

class Reg_forms extends React.Component {
    render () {
        return (
            <div className="users-regist">
                <fieldset className="user-reg-name">
                    <legend className="font-legend">Name</legend>
                    <input type="text" defaultValue="Your name"/>
                    <legend className="font-legend-error">Error</legend>
                </fieldset>
                <fieldset className="user-reg-mail">
                    <legend className="font-legend">Email</legend>
                    <input type="text" defaultValue="Your email"/>
                    <legend className="font-legend-error">Error</legend>
                </fieldset>
                <fieldset className="user-reg-phone">
                    <legend className="font-legend">Phone</legend>
                    <input type="text" defaultValue="+38 (__) ___ __ __"/>
                    <legend className="font-legend-error">Error</legend>
                </fieldset>
                <div className="user-reg-position-shell">
                    <select className="user-reg-position">
                        <option>Select your position</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                <div className="user-reg-photo">
                    <input type="file" className="inputfile" name="file" id="file" accept="image/jpeg"
                           data-multiple-caption="{count} files selected"/>
                    <label htmlFor="file">
                        <span>Upload your photo</span>
                        <strong>Upload</strong>
                    </label>
                    <p className="comment-photo">File format jpg up to 5 MB, the minimum size of
                        70x70px</p>
                </div>
            </div>
        )
    }
}

export default Reg_forms;