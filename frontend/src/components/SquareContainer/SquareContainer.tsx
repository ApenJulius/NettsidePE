import React, { useEffect, useState } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';

interface SquareContainerProps {
    logo: any; // update the type to logo type
    title: string;
    description: string;
    readMore:boolean;
}

const SquareContainer: React.FC<SquareContainerProps> = ({logo, title, description, readMore}) => {

    return (
       <div className="">
            {logo}
            <h3>{title}</h3>
            <p>{description}</p>
            {readMore && <button>Read More</button>}
       </div>
    );
}

export default SquareContainer;