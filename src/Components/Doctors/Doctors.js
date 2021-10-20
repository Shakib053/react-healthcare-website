import React, { useEffect, useState } from 'react';
import SingleDoctor from '../SingleDoctor/SingleDoctor';


const Doctors = () => {

    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctorsdata.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    doctors.map(sd => <SingleDoctor key={sd.id} sd={sd}></SingleDoctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;