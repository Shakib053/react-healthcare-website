import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DoctorDetails = () => {

    const { id } = useParams();
    console.log(id);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/doctorsdata.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    const ExactData = data.filter(td => td.id == id)
    return (
        <div className="text-center card">

            <h1 className="my-4">Details of the Doctors</h1>
            <img src={ExactData[0]?.img} className="card-img-top w-75 mx-auto" alt="" srcset="" />
            <br />
            <div className="card-body">
                <h5 className="card-title">{ExactData[0]?.name}</h5>
                <h5 className="card-title">Age : {ExactData[0]?.age}</h5>
                <p className="card-text">Expertise Area : <strong>{ExactData[0]?.special}.</strong></p>
                <p className="card-text">Experiences in this area:  <strong>{ExactData[0]?.exp}</strong></p>
            </div>

        </div>
    );
};

export default DoctorDetails;