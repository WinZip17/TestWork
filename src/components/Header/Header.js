import React from 'react';
import './Header.css';
import UserInfoContainer from "./UserInfo/UserInfoContainer";

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="logoSell">
                    <img className="logo" src={require("../media/logo/logo.svg")} alt="abz.agency"/>
                </div>
                <input type='checkbox' name="toggle" id="menu" className='toggleMenu'/>
                <label  htmlFor='menu' className="fon"><div ></div></label>
                <div className='tabletBlockMenu'>
                    <menu className="tabletMenu">
                        <li className="menuItem"><a href='#about'>About me</a></li>
                        <li className="menuItem"><a href='#relationships'>Relationships</a></li>
                        <li className="menuItem"><a href='#requirements'>Requirements</a></li>
                        <li className="menuItem"><a href='#users'>Users</a></li>
                        <li className="menuItem"><a href='#signUp'>Sign Up</a>
                        </li><li className="menuItem itemSingOut"><a href='#'>Sign Uot</a></li>
                    </menu>
                    <UserInfoContainer/>
                </div>

                <label  htmlFor='menu' className="toggleMenu"> <img  className="lineMenu" src={require("../media/icons/line-menu.svg")} alt="lineMenu"/></label>

            </header>
        );
    }
}

export default Header;