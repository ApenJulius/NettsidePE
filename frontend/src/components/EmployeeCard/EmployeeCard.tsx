import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

interface EmployeeCardProps {
    image: any;
    title: string;
    description: string;
    link: string;
}
const EmployeeCard: React.FC<EmployeeCardProps> = ({image, title, description, link}) => {

    return (
    <div className="border-1 w-80 h-92 flex flex-col p-7 light-shadow shadow-xl rounded-lg items-start">
        <div className="self-start mb-2"> 
            <img src={image} alt="employee"></img>
        </div>
        <div className="overflow-hidden self-start flex-grow">
            <h3 className="break-words overflow-ellipsis overflow-hidden font-bold mb-3">{title}</h3>
            <p className="overflow-ellipsis overflow-hidden text-xs text-gray-500">{description}</p>
        </div>
        <div className="space-x-2 mt-4">
            <a href={link}>
                <GitHub />
            </a>
            <a href={link}>
                <LinkedIn />
            </a>           
            <a href={link}>
                <Twitter />
            </a>
        </div>
    </div>
    );
}

export default EmployeeCard;