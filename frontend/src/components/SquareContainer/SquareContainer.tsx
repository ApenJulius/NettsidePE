import React, { useEffect, ElementType } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import EastSharpIcon from '@mui/icons-material/EastSharp';
interface SquareContainerProps {
    Logo: ElementType; // update the type to logo type
    title: string;
    description: string;
    readMore:boolean;
}

const SquareContainer: React.FC<SquareContainerProps> = ({Logo, title, description, readMore}) => {

    return (
        <div className="border-1 w-80 h-80 flex flex-col justify-between p-7 light-shadow shadow-xl rounded-lg">
            <div className="self-start">
                <Logo style={{ fontSize: 40, backgroundColor: '#000', borderRadius: '50%', padding: '10px', color: '#fff' }} />
            </div>
            <div className="overflow-hidden">
                <h3 className="break-words overflow-ellipsis overflow-hidden font-bold mb-3">{title}</h3>
                <p className="overflow-ellipsis overflow-hidden text-xs text-gray-500">{description}</p>
            </div>
            <div className="">
                {readMore && 
                
                <button className="flex justify-between items-center w-full text-blue-500">
                    <span>Read More</span>
                    <EastSharpIcon style={{ fontSize: 20, color:"#3b82f6" }} />
                </button>
                }

            </div>
        </div>
    );
}

export default SquareContainer;