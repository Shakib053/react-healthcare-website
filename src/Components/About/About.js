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
                <p>The Health Care Agency is a regional provider, charged with protecting and promoting individual, family and community health through coordination of public and private sector resources. HCA's service environment is complex, with 180 different funding sources and over 200 State and Federal mandates. The mandates under which HCA operates require the County to provide for, or to regulate, certain health services. Many also carry specific requirements for staffing, operations, claiming and record-keeping.</p>
            </div>
        </div>
    );
};

export default About;