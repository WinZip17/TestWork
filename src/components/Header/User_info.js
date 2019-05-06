import React from 'react';


class User_info extends React.Component {
    render() {
        return (
            <div className="user">
                <div className="user-info">
                    <span className="user-name">Superstar</span>
                    <span className="user-mail">Superstar@gmail.com</span>
                </div>
                <img className="avatar" src={require("../media/imgs/user-superstar-2x.jpg")} alt="user-superstar-2x"/>
                <img className="sing-out" src={require("../media/icons/sign-out.svg")} alt="sign-out"/>
                <img className="line-menu" src={require("../media/icons/line-menu.svg")} alt="line-menu"/>
            </div>

        );
    }
}

console.log('desktop_heater');

export default User_info;