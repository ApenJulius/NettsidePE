import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import React, { useEffect, useState } from "react";


const Cookie: React.FC = () => {
    const [showNotice, setShowNotice] = useState(localStorage.getItem("cookiesAccepted") !== "true");

    const handleCookieRequest = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.innerText === "Accept") {
            localStorage.setItem("cookiesAccepted", "true");
        }
        setShowNotice(false);
    }

    if (!showNotice) {
        return null;
    }


    return (
        <div className="border-1 w-80 h-auto flex flex-col p-7 light-shadow shadow-xl rounded-lg items-start fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-black">
            <h1 className="text-2xl font-bold">Cookies</h1>
            <p className="text-sm">We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</p>
            <div className="flex flex-row justify-between w-full">
                <button onClick={handleCookieRequest} className="bg-gradient-to-b from-[#034a22] to-[#095611] p-5 rounded-lg text-xl mt-5">Accept</button>
                <button onClick={handleCookieRequest}className="bg-gradient-to-b from-[#034a22] to-[#095611] p-5 rounded-lg text-xl mt-5">Decline</button>
            </div>
        </div>
    );
}

export default Cookie;