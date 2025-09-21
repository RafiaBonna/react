import React from 'react';
import Nav from '../components/Nav';


import {Link, Outlet} from "react-router";
const AboutUs = () => {
    return (
        <div>
            <Nav/>
            <nav>
             <ul>
            <li>
                <Link to="gallery">Gallery</Link>
            </li>
            </ul>
            </nav>
           <Outlet/>
        </div>
        
    );
};

export default AboutUs;