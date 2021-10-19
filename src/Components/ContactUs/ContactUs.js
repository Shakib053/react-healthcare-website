import React from 'react';

const ContactUs = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
            <div className="col">
                <div className="card h-100">
                    <i class="fas fa-map-marker-alt fa-3x text-center my-3"></i>
                    <div className="card-body">
                        <h5 className="card-title">Our On-Site Address</h5>
                        <p className="card-text">Plot 38,Street 39,UpHill Town,
                            NewYork ,USA</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <i class="fas fa-tty fa-3x text-center my-3"></i>
                    <div className="card-body">
                        <h5 className="card-title">Contact Numbers</h5>
                        <p className="card-text">+00824554445</p>
                        <p className="card-text">+012457766</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <i class="fas fa-mail-bulk fa-3x text-center my-3"></i>
                    <div className="card-body">
                        <h5 className="card-title">Mail Address</h5>
                        <p className="card-text">info@health-care.org</p>
                        <p className="card-text">care@health-care.com</p>
                        <p className="card-text">hr@health-care.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;