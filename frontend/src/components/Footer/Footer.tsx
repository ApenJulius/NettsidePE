import React, { useEffect, useState } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import Logo from '../../assets/logocs.png';



const Footer: React.FC = () => {

    return (
        <footer >
            <div className="flex flex-direction-row width-100 justify-around items-center h-20 mt-20 mb-20">
                <button className="h-full overflow-hidden p-4">
                    <img src={Logo} alt="logo" className="object-contain h-full min-h-0 max-h-full"/>
                </button>
                <ul>
                    <li>About Us</li>
                    <li>us</li>
                    <li>us</li>
                    <li>us</li>
                </ul>
                <ul>
                    <li>Contact Us</li>
                    <li>Address</li>
                    <li>Email</li>
                    <li>S</li>
                </ul>
                <ul>
                    <li>Follow Us:</li>
                    <li>Facebook</li>
                    <li>Facebook</li>
                    <li>Facebook</li>
                </ul>
            </div>
            <hr className="mb-20 mt-20"/>


            <p className="mb-20 text-center">© Copyright 2023 E2E Lorem ipsum</p>
        </footer>
    );
}

export default Footer;