import React, { useEffect, useState } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
const Footer: React.FC = () => {

    return (
        <footer className="flex flex-direction-row width-100 justify-around items-center h-20 mt-20">
            <div>
                Logo
            </div>
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
        </footer>
    );
}

export default Footer;