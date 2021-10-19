import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="text-center bg-primary p-3">
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
                <div class="col">
                    <div class="card h-100 " >
                        <div class="card-body bg-primary">
                            <h3 className="card-title my-4">Navigation</h3>
                            <Link to='/about'><h5 className="text-black">About HCA</h5></Link>
                            <Link to='/doctors'><h5 className="text-black">Doctors</h5></Link>
                            <Link to=''><h5 className="text-black">Publicatons</h5></Link>
                            <Link to='/'><h5 className="text-black">Management Team</h5></Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <div class="card-body bg-primary">
                            <h3 class="card-title">Resources</h3>
                            <p class="card-text">HCA Email Subscription Services .</p>
                            <p class="card-text">HCA Health Referral Line</p>
                            <p class="card-text">Public Records Act Requests</p>
                            <p class="card-text">OC Links</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 ">
                        <div class="card-body bg-primary">
                            <h3 class="card-title text-capitalize">Follow us on the social media</h3>
                            <Link><p className="card-text m-2 text-black"><i class="fab fa-facebook-square fa-3x"></i></p></Link>
                            <Link>   <p className="card-text m-2 text-black"><i class="fab fa-instagram fa-3x"></i></p></Link>
                            <Link>      <p className="card-text m-2 text-black"><i class="fab fa-twitter-square fa-3x"></i></p></Link>
                        </div>
                    </div>
                </div>
            </div>
            <p className="my-5"> &copy; All rights reserved by Health Care Agency 2021</p>
        </div>
    );
};

export default Footer;