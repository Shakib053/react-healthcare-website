import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import SingleService from '../SingleService/SingleService';
import image from './banner.jpg'
const Home = () => {

    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('./servicedata.json')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div className="container">
            <div className="container-fluid ">
                <img src={image} style={{ width: "100%", padding: "50px 50px" }} alt="" srcset="" />
                <h1 className="text-center pt-5">Welcome to <span className="text-uppercase text-warning">healthcare agency</span></h1>
                <h6 className="text-center text-capitalize pb-5">our medical
                    specialists care about you & your family's health </h6>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    service.map(sd => <SingleService key={sd.id} sd={sd}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Home;