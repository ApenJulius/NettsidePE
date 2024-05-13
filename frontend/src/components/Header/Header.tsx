import React, { useEffect, useState } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
const Header: React.FC = () => {

    return (
        <header className="flex flex-direction-row width-100 justify-around items-center h-20">
            <h1 className="bg-black bg-opacity-20">logo</h1>
            <ul className="flex text-white [&>*]:p-2">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <ul className="flex justify-between ">
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
            </ul>
        </header>
    );
}

export default Header;