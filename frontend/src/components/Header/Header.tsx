import React, { useEffect, useState } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import Logo from "../../assets/logocs.png";


const Header: React.FC = () => {

    return (
        <header className="flex justify-between items-center h-20 px-4 mt-5 mb-5">
            <button className="h-full overflow-hidden p-4">
                <img src={Logo} alt="Logo" className="object-contain h-full min-h-0 max-h-full" />
            </button>
            <ul className="flex text-white space-x-4">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Contact</li>
                <li>Contact</li>
            </ul>
            <ul className="flex space-x-4"> 
                <li>
                    <button>
                        <MailIcon />
                    </button>
                </li>
                <li>
                    <button>
                        <FacebookIcon />
                    </button>
                </li>
                <li>
                    <button>
                        <MailIcon />
                    </button>
                </li>
                <li>
                    <button>
                        <FacebookIcon />
                    </button>
                </li>
            </ul>
        </header>
    );
}

export default Header;