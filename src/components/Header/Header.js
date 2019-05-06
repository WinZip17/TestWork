import React from 'react';
import User_info from './User_info';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div>
                    <img className="logo" src={require("../media/logo/logo.svg")} alt="abz.agency" />
                </div>
                <menu>
                    <li className="menu-item"><a href="#">About me</a></li>
                    <li className="menu-item"><a href="#">Relationships</a></li>
                    <li className="menu-item"><a href="#">Requirements</a></li>
                    <li className="menu-item"><a href="#">Users</a></li>
                    <li className="menu-item"><a href="#">Sign Up</a></li>
                </menu>

                <User_info />
            </header>
        );
    }
}

export default Header;