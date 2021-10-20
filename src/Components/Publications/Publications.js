import React from 'react';
import './Publications.css'
const Publications = () => {
    return (
        <div className="container mb-5">
            <h1 className="m-5 text-center">PUBLICATIONS: REPORTS, FORMS & FACTSHEETS</h1>
            <div className="mx-auto" >
                <h4>Behavioral Health Services</h4>
                <ul>
                    <li>
                        <a href="">     Addressing the Opioid Crisis in Orange County, CA</a>
                    </li>
                    <li>
                        <a href="">
                            Opioid Overdose & Death in Orange County - Public Forum and Report
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Behavioral Health Services Directory
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Pathway to Services: Homeless Individual (flyer)
                        </a>
                    </li>
                </ul>
            </div>

            <div className="mx-auto">
                <h4>Director's Office: Health Policy, Research & Communications
                </h4>
                <ul>
                    <li>
                        <a href="">Complications of Pregnancy and Childbirth in Orange County & Factsheet</a>
                    </li>
                    <li>
                        <a href="">
                            Leading Causes of Death for Orange County - 2010-2016
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Tobacco Settlement Revenue (TSR)
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Uninsured Children in Orange County
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Life Expectancy in Orange County Report and Factsheet
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Publications;