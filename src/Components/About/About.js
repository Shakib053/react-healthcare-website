import React from 'react';
import image from './about1.jpg'
const About = () => {
    return (
        <div className="d-flex m-4">
            <div>
                <img src={image} alt="" srcset="" />
            </div>
            <div className="p-5">
                <h3 className="text-capitalize">we offer</h3>
                <h2 className="text-capitalize"><strong>fast & reliable</strong></h2>
                <h2 className="text-capitalize text-warning">Medical & healthcare solutions to our patients</h2>
                <p>

                    Such Bangladeshi workers / job seekers are “decked” or equally distributed among the Medical Centers accredited by Executive Board of the Health Ministers' Council for Gulf Cooperation Council (GCC) States.

                    The medical centers providing these services in Dhaka are collectively known as the GCC Approved Medical Centers Association or GAMCA, Dhaka. It was organized in compliance with the GCC requirement that medical certificates issued by the GAMCA member centers only, will be honored by its embassies in the processing of employment papers.</p>
            </div>
        </div>
    );
};

export default About;