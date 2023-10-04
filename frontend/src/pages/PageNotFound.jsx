import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='section-page-notfound'>
            <div className="section-page-notfound-h">
            <h5>404</h5>
            <h6>Ooops...<br /> Page not Found</h6>

            </div>
            <p>We&apos;re sorry. The page you requested could not be found. Please click below to discover Amatua</p>
            <button className='section-page-notfound-button'>                        <NavLink className="nav-links" to="/">
            </NavLink>Go Home</button>
        </div>
    );
}

export default PageNotFound;
