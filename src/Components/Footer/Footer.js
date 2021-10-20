import React from 'react';
import { Link } from 'react-router-dom';
import image from './payment.png'

const Footer = () => {
    return (
        <div className="text-center bg-primary p-3">
            <div class="row row-cols-1 row-cols-md-3 g-4 mt-5">
                <div class="col">
                    <div class="card " >
                        <div class="card-body bg-primary">
                            <h3 className="card-title my-4">Navigation</h3>
                            <Link to='/about'><h6 className="text-black">About HCA</h6></Link>
                            <Link to='/doctors'><h6 className="text-black">Doctors</h6></Link>
                            <Link to=''><h6 className="text-black">Publicatons</h6></Link>
                            <Link to='/'><h6 className="text-black">Management Team</h6></Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card  ">
                        <div class="card-body bg-primary">
                            <h3 class="card-title text-capitalize">Follow us on the social media</h3>
                            <Link><p className="card-text m-2 text-black"><i class="fab fa-facebook-square fa-3x"></i></p></Link>
                            <Link>   <p className="card-text m-2 text-black"><i class="fab fa-instagram fa-3x"></i></p></Link>
                            <Link>      <p className="card-text m-2 text-black"><i class="fab fa-twitter-square fa-3x"></i></p></Link>
                        </div>
                    </div>
                </div>
                <div class="col bg-primary img-fluid">
                    <div class="card bg-primary img-fluid">
                        <img src={image} alt="" srcset="" />

                    </div>
                </div>

            </div>
            <p className="my-5"> &copy; All rights reserved by Health Care Agency 2021</p>
        </div>
    );
};

export default Footer;