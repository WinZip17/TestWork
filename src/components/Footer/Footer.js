import React from 'react';
import facebook from '../media/icons/facebook.svg';
import linkedin from '../media/icons/linkedin.svg';
import instagram from '../media/icons/instagram.svg';
import twitter from '../media/icons/twitter.svg';
import pinterest from '../media/icons/pinterest.svg';


class Footer extends React.Component {
    render() {
        return (

            <footer>
                <div className="footer-menu-shell">
                    <div className="logo-block">

                    </div>
                    <menu className="footer-menu">
                        <li className="footer-menu-item"><a href="#">About me</a></li>
                        <li className="footer-menu-item"><a href="#">Relationships</a></li>
                        <li className="footer-menu-item"><a href="#">Requirements</a></li>
                        <li className="footer-menu-item"><a href="#">Users</a></li>
                        <li className="footer-menu-item"><a href="#">Sign Up</a></li>
                    </menu>
                </div>
                <div className="contacts-link">
                    <div className="contacts">
                        <div><img className="footer-img-mail" src={require("../media/icons/mail.svg")} alt="mail"/>
                            <span>work.of.future@gmail.com</span></div>
                        <div><img className="footer-img-phone" src={require("../media/icons/phone.svg")} alt="phone"/><span>+38 (050) 789 24 98</span>
                        </div>
                        <div><img className="footer-img-mobile" src={require("../media/icons/cellphone.svg")} alt="cellphone"/><span>+38 (095) 556 08 45</span>
                        </div>
                    </div>
                    <div className="link1">
                        <ul>
                            <li className="footer-menu-item"><a href="#">News</a></li>
                            <li className="footer-menu-item"><a href="#">Blog</a></li>
                            <li className="footer-menu-item"><a href="#">Partners</a></li>
                            <li className="footer-menu-item"><a href="#">Shop</a></li>
                        </ul>
                    </div>
                    <div className="link2">
                        <ul>
                            <li className="footer-menu-item"><a href="#">Overview</a></li>
                            <li className="footer-menu-item"><a href="#">Design</a></li>
                            <li className="footer-menu-item"><a href="#">Code</a></li>
                            <li className="footer-menu-item"><a href="#">Collaborate</a></li>
                        </ul>
                    </div>
                    <div className="link3">
                        <ul>
                            <li className="footer-menu-item"><a href="#">Tutorials</a></li>
                            <li className="footer-menu-item"><a href="#">Resources</a></li>
                            <li className="footer-menu-item"><a href="#">Guides</a></li>
                            <li className="footer-menu-item"><a href="#">Examples</a></li>
                        </ul>
                    </div>
                    <div className="link4">
                        <ul>
                            <li className="footer-menu-item"><a href="#">FAQ</a></li>
                            <li className="footer-menu-item"><a href="#">Terms</a></li>
                            <li className="footer-menu-item"><a href="#">Conditions</a></li>
                            <li className="footer-menu-item"><a href="#">Help</a></li>
                        </ul>
                    </div>
                </div>
                <div className="social">
                    <div className="social-context">© abz.agency specially for the test task</div>
                    <div>
                        <a className="social-icon" href="#">
                            <img src={facebook} alt='facebook' />
                        </a>
                        <a className="social-icon" href="#">
                            <img src={linkedin} alt='linkedin' />
                        </a>
                        <a className="social-icon" href="#">
                            <img src={instagram} alt='instagram' />
                        </a>
                        <a className="social-icon" href="#">
                            <img src={twitter} alt='twitter' />
                        </a>
                        <a className="social-icon" href="#">
                            <img src={pinterest} alt='pinterest' />
                        </a>
                    </div>
                </div>
            </footer>

        );
    }
}

console.log('desktop_footer');

export default Footer;