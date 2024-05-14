import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

import map from "../../assets/map.png";

const Map: React.FC = () => {
    const latitude = "60.79949840004282" 
    const longitude = "11.045936362828044"
    const openMaps = () => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`, '_blank');
    }

    return (
        <div className="flex flex-col pl-80 pr-80">
            <img src={map} alt="map"  className="object-contain"/>
            <button onClick={openMaps} className="mt-4 self-start bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Open in Maps
            </button>
        </div>
    );
}

export default Map;