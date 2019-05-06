import React from 'react';
import User_list_info from './User_list_info';
import Reg_forms from './Reg_forms';


class Article extends React.Component {
    render() {
        return (

            <article>

                <div className="background-alt1">
                    <div className="art1">
                        <h1 className="art1-txt heading1">Test assignment for Frontend Developer position</h1>
                        <p className="art1-txt p1">We kindly remind you that your test assignment
                            should be submitted as a link to github/bitbucket
                            repository. Please be patient, we consider and
                            respond to every application that meets minimum
                            requirements. We look forward to your submission.
                            Good luck!</p>
                        <div className="button-primary">Sign Up</div>
                    </div>
                </div>
                <div className="background-alt2">
                    <div className="alt2">
                        <div className="heading2-shell">
                            <h2 className="heading2">
                                Let's get acquainted
                            </h2>
                        </div>
                        <div className="alt2-content">
                            <div className="man-mobile">
                                <img src={require("../media/imgs/man-mobile.svg")} alt="человек с мобилой"/>
                            </div>
                            <div className="alt2-text">
                                <h4>I am cool frontend developer</h4>
                                <p className="p2">When real users have a slow experience on mobile, they're much less
                                    likely to find what they
                                    are looking for or purchase from you in the future. For many sites this equates to a
                                    huge
                                    missed opportunity, especially when more than half of visits are abandoned if a
                                    mobile page
                                    takes over 3 seconds to load.</p>
                                <p className="p2">Last week, Google Search and Ads teams announced two new speed
                                    initiatives to help
                                    improve user-experience on the web.</p>
                                <div className="button-text">Sign Up</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="background-alt3">
                    <div className="alt3">
                        <div className="heading3-shell">
                            <h1>
                                About my relationships with <br/>
                                <span>web-development</span>
                            </h1>
                        </div>
                        <div className="alt3-content">
                            <div>
                                <div><img className="img-alt3" src={require("../media/imgs/html.svg")} alt="иконка html"/></div>
                                <h2> I'm in love with HTML</h2>
                                <p>
                                    Hypertext Markup Language (HTML) is the
                                    standard markup language for creating
                                    web pages and web applications.
                                </p>
                            </div>
                            <div>
                                <div><img className="img-alt3" src={require("../media/imgs/css.svg")} alt="иконка css"/></div>
                                <h2> CSS is my best friend</h2>
                                <p>
                                    Cascading Style Sheets (CSS)<br/>
                                    is a style sheet language used for<br/>
                                    describing the presentation of a<br/>
                                    document written in a markup<br/>
                                    language like HTML.
                                </p>
                            </div>
                            <div>
                                <div><img className="img-alt3" src={require("../media/imgs/javascript.svg")} alt="иконка javascript"/>
                                </div>
                                <h2> JavaScript is my passion</h2>
                                <p>
                                    JavaScript is a high-level, interpreted
                                    programming language. It is language
                                    which is also characterized as dynamic,
                                    weakly typed, prototype-based and<br/>
                                    multi-paradigm.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="background-alt4">
                    <div className="alt4">
                        <div className="heading4-shell">
                            <h3 className="heading4">
                                General requirements for the test task
                            </h3>
                        </div>
                        <div className="alt4-content">
                            <div className="man-laptop-v1">
                                <img src={require("../media/imgs/man-laptop-v1.svg")} alt="человек с ноутом1"/>
                            </div>
                            <div className="alt4-text">
                                <p className="paragraph4">
                                    Users want to find answers to their questions quickly and data
                                    shows that people really care about how quickly their pages load.
                                    The Search team announced speed would be a ranking signal for
                                    desktop searches in 2010 and as of this mount (July 2018), page
                                    speed will be a ranking factor for mobiles searches too.
                                </p>
                                <p className="paragraph4">
                                    If you're a developer working on a site, now is a good time to
                                    evaluate your performance using our speed tools. Think about now
                                    performance affects the user experience of your pages and consider
                                    measuring a variety of real-world user-centric performance metrics.
                                </p>

                                <p className="paragraph4">
                                    Are you shipping too much JavaScript? Too many images? Images
                                    and JavaScript are the most significant contributors to the page
                                    weight that affect page load time based on data from HTTP Archive
                                    and the Chrome User Experience Report - our public dataset for key
                                    UX metrics as experienced by Chrome users under real-world
                                    conditions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="background-alt5">
                    <div className="alt5">
                        <div className="headers5">
                            <h1> Our cheerful users </h1>
                            <h2> Attention! Sorting users by registration date</h2>
                        </div>
                        <User_list_info />
                        <div className="button-secondary alt5-button">Show more</div>
                    </div>
                </div>
                <div className="background-alt6">
                    <div className="alt6">
                        <div className="headers6">
                            <h1> Register to get a work </h1>
                            <h4> Attention! After successful registration and alert, update the list of users in the
                                block from the top</h4>
                        </div>
                        <Reg_forms />

                        <div className="button-inactiv">Sign Up</div>
                    </div>
                </div>

            </article>

    );
    }
}



console.log('desktop_article');

export default Article;