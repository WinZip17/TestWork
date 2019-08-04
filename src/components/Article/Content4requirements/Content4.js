import React from 'react';
import './Content4.css';
import './Content4Media.css';
import {manLaptopV1, manLaptopV2} from "../../media/SVG";


const Content4 = () => {
    return (
        <div id='requirements' className="backgroundAlt4">
            <div className="alt4">
                <div  className="heading4Shell">
                    <h3 className="heading4">
                        General requirements for the test task
                    </h3>
                </div>
                <div className="alt4Content">

                    <div className="manLaptopV1">
                        {manLaptopV1}
                        {manLaptopV2}
                    </div>
                    <div className="alt4Text">
                        <p className="paragraph4">
                            Users want to find answers to their questions quickly and data
                            shows that people really care about how quickly their pages load.
                            The Search team announced speed would be a ranking signal for
                            desktop searches in 2010 and as of this mount (July 2018), page
                            speed will be a ranking factor for mobile searches too.
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
    )
};

export default Content4;