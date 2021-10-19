import React from 'react';
import { Link } from 'react-router-dom';

const SingleDoctor = (props) => {
    const { img, name, special, exp, id } = props.sd;
    return (
        <div className="col p-5">
            <div className="card h-100 p-3">
                <img src={img} className="card-img-top w-75 mx-auto" alt="" srcset="" />
                <div class="card-body">
                    <h3 className="card-title text-center my-3">{name}</h3>
                    <p className="card-text">{special}</p>
                </div>
                <Link to={`/doctordetails/${id}`}>
                    <button className="w-25 btn btn-warning text-center">Learn More</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleDoctor;