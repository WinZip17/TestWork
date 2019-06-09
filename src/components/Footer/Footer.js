import React from 'react';
import './Footer.css'
import './FooterMedia.css'
import {
    facebook,
    instagram,
    linkedin,
    logoAbz,
    mailIcon,
    mobileIcon,
    phoneIcon,
    pinterest,
    twitter
} from "../media/SVG";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footerMenuShell">
                    <div className="logoBlock">
                        {logoAbz}
                    </div>
                    <menu className="footerMenu">
                        <li className="footerMenuItem"><a href="#">About me</a></li>
                        <li className="footerMenuItem"><a href="#">Relationships</a></li>
                        <li className="footerMenuItem"><a href="#">Requirements</a></li>
                        <li className="footerMenuItem"><a href="#">Users</a></li>
                        <li className="footerMenuItem"><a href="#">Sign Up</a></li>
                    </menu>
                </div>
                <div className="contactsLink" id="about">
                    <div className="contacts">
                        <div>{mailIcon}<span>work.of.future@gmail.com</span></div>
                        <div>{phoneIcon}<span>+38 (050) 789 24 98</span></div>
                        <div>{mobileIcon}<span>+38 (095) 556 08 45</span>
                        </div>
                    </div>
                    <div className="link1">
                        <ul>
                            <li className="footerMenuItem"><a href="#">News</a></li>
                            <li className="footerMenuItem"><a href="#">Blog</a></li>
                            <li className="footerMenuItem"><a href="#">Partners</a></li>
                            <li className="footerMenuItem"><a href="#">Shop</a></li>
                        </ul>
                    </div>
                    <div className="link2">
                        <ul>
                            <li className="footerMenuItem"><a href="#">Overview</a></li>
                            <li className="footerMenuItem"><a href="#">Design</a></li>
                            <li className="footerMenuItem"><a href="#">Code</a></li>
                            <li className="footerMenuItem"><a href="#">Collaborate</a></li>
                        </ul>
                    </div>
                    <div className="link3">
                        <ul>
                            <li className="footerMenuItem"><a href="#">Tutorials</a></li>
                            <li className="footerMenuItem"><a href="#">Resources</a></li>
                            <li className="footerMenuItem"><a href="#">Guides</a></li>
                            <li className="footerMenuItem"><a href="#">Examples</a></li>
                        </ul>
                    </div>
                    <div className="link4">
                        <ul>
                            <li className="footerMenuItem"><a href="#">FAQ</a></li>
                            <li className="footerMenuItem"><a href="#">Terms</a></li>
                            <li className="footerMenuItem"><a href="#">Conditions</a></li>
                            <li className="footerMenuItem"><a href="#">Help</a></li>
                        </ul>
                    </div>
                </div>
                <div className="social">
                    <div className="socialContext">© abz.agency specially for the test task</div>
                    <div className="socialIconShell">
                        <a className="socialIcon" href="#">
                            {facebook}
                        </a>
                        <a className="socialIcon" href="#">
                            {linkedin}
                        </a>
                        <a className="socialIcon" href="#">
                            {instagram}
                        </a>
                        <a className="socialIcon" href="#">
                            {twitter}
                        </a>
                        <a className="socialIcon" href="#">
                            {pinterest}
                        </a>
                    </div>
                </div>
            </footer>

        );
    }
}

export default Footer;