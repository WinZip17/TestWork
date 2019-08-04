import React from 'react';
import './Content3.css';
import './Content3Media.css';

const Content3 = () => {
    return (
        <div id="relationships" className="backgroundAlt3">
            <div className="alt3">
                <div className="heading3Shell">
                    <h1 className="heading3Desktop">
                        About my relationships with <br/>
                        <span>web-development</span>
                    </h1>
                    <h1 className="heading3Mobile">
                        About my relationships with
                        web-development
                    </h1>
                </div>
                <div className="alt3Content">
                    <div className="infoCell">
                        <div><img className="imgAlt3" src={require("../../media/imgs/html.svg")}
                                  alt="иконка html"/></div>
                        <div className="textAl3Sell">
                            <h2> I'm in love with HTML</h2>
                            <p>
                                Hypertext Markup Language (HTML) is the
                                standard markup language for creating
                                web pages and web applications.
                            </p>
                        </div>

                    </div>
                    <div className="infoCell">
                        <div><img className="imgAlt3" src={require("../../media/imgs/css.svg")} alt="иконка css"/>
                        </div>
                        <div className="textAl3Sell">
                            <h2> CSS is my best friend</h2>
                            <p className="cssTextAlt3Sell">
                                Cascading Style Sheets (CSS)
                                is a style sheet language used for
                                describing the presentation of a
                                document written in a markup
                                language like HTML.
                            </p>
                        </div>
                    </div>
                    <div className="infoCell">
                        <div><img className="imgAlt3" src={require("../../media/imgs/javascript.svg")}
                                  alt="иконка javascript"/>
                        </div>
                        <div className="textAl3Sell">
                            <h2> JavaScript is my passion</h2>
                            <p>
                                JavaScript is a high-level, interpreted
                                programming language. It is a language
                                which is also characterized as dynamic,
                                weakly typed, prototype-based and
                                multi-paradigm.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Content3;