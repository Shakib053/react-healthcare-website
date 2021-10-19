import React from 'react';
import { Link } from 'react-router-dom';
import initializeAuthentication from '../../firebase/firebase.init';
import useAuth from '../../hooks/useAuth';
import Logo from './logo.png'

initializeAuthentication();

const Navbar = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">

                <div className="d-flex justify-content-center  align-items-center">
                    <div>
                        <img src={Logo} style={{ width: "50px", borderRadius: "50%", marginRight: "20px" }} alt="" srcset="" />
                    </div>
                    <div>
                        <h4 className="text-uppercase">Healthcare <span className="text-warning"> agency</span></h4>
                    </div>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Link to='/home'>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </Link>
                        <Link to='/about'>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                        </Link>
                        <Link to='/doctors'>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Doctors</a>
                            </li>
                        </Link>
                        <Link to='/contactus'>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                        </Link>
                    </ul>


                    <span className="navbar-text">

                        {
                            user?.email && <button className="btn btn-success">{user.displayName}</button>
                        }
                        {
                            user?.email ? <button onClick={logOut} className="btn btn-primary ms-2" >Log Out</button>
                                :
                                <Link to='/login'>
                                    <button className="btn btn-warning me-2" >Log In</button>
                                </Link>
                        }


                    </span>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;