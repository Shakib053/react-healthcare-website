import React from 'react';
import { Link } from 'react-router-dom';
import initializeAuthentication from '../../firebase/firebase.init';
import useAuth from '../../hooks/useAuth';
import Logo from './logo.png'
import './navbar.css'
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
                 <Link to="/home"><h4 className="text-uppercase text-black">Healthcare <span className="text-warning"> agency</span></h4></Link>
                    </div>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Link className="navlink" to='/home'>
                            <li className="nav-item mx-3" >
                                <a className="nav-link text-black" style={{ fontSize: "1.3rem" }} aria-current="page" href="#">Home</a>
                            </li>
                        </Link>
                        <Link className="navlink" to='/about'>
                            <li className="nav-item mx-3">
                                <a className="nav-link text-black" style={{ fontSize: "1.3rem" }} href="#">About Us</a>
                            </li>
                        </Link>
                        <Link className="navlink" to='/doctors'>
                            <li className="nav-item mx-3">
                                <a className="nav-link text-black" style={{ fontSize: "1.3rem" }} href="#">Doctors</a>
                            </li>
                        </Link>
                        <Link className="navlink" to='/contactus'>
                            <li className="nav-item mx-3">
                                <a className="nav-link text-black" style={{ fontSize: "1.3rem" }} href="#">Contact Us</a>
                            </li>
                        </Link>
                    </ul>


                    <span className="navbar-text ms-4">

                        {
                            user?.email && <button className="btn btn-success">{user.displayName}</button>
                        }
                        {
                            user?.email ? <button onClick={logOut} className="btn btn-primary ms-2" >Log Out</button>
                                :
                                <Link to='/login'>
                                    <button className="btn btn-warning" >Log In</button>
                                </Link>
                        }


                    </span>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;