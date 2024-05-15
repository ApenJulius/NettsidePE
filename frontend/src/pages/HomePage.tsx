import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SquareContainer from "../components/SquareContainer/SquareContainer";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import EmployeeCard from "../components/EmployeeCard/EmployeeCard";
import man1 from '../assets/man1.jpg';
import Map from "../components/Map/Map";
import Cookie from "../components/Cookie/Cookie";


const HomePage: React.FC = () => {

    return (
        <div>
            <Header />
            <Cookie />
            <div className="justify-center items-center flex flex-col">
                <h1 className="text-center text-8xl p-5 font-bold ">Cyber Security Services</h1>
                <p className="text-center break-normal p-10 w-1/2 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nulla eveniet necessitatibus laudantium, nam aut quaerat ipsum eum adipisci, dolorem ex doloribus incidunt molestias quia deleniti veritatis non rem fugit.</p>
                <button className="bg-gradient-to-b from-[#034a22] to-[#095611] p-5 rounded-lg text-xl">Get Started Now</button>
            </div>
            <div className="flex justify-between mt-20 mb-20">
                <SquareContainer Logo={CloudDownloadIcon} title="Managed Detection and Response" description="We take #1 breach prevention software, CrowdStrike, and couple it with 100% U.S. threat hunting and response services 24x7x365" readMore={true}/>
                <SquareContainer Logo={CloudDownloadIcon} title="Managed Detection and Response" description="We take #1 breacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaah prevention software, CrowdStrike, and couple it with 100% U.S. threat hunting and response services 24x7x365 asdasd asda dasd asd asdasdasdsdasadas das dasd asd  asdasdsdadasdsdasd  asdasdasd as " readMore={true}/>
                <SquareContainer Logo={CloudDownloadIcon} title="Managed Detection and Response" description="We take #1 breach prevention software, CrowdStrike, and couple it with 100% U.S. threat hunting and response services 24x7x365" readMore={true}/>
                <SquareContainer Logo={CloudDownloadIcon} title="Managed Detection and Response" description="We take #1 breach prevention software, CrowdStrike, and couple it with 100% U.S. threat hunting and response services 24x7x365" readMore={true}/>
            </div>

            <div className="justify-center items-center flex flex-col">
                <h2 className="text-center text-5xl p-5 font-bold">Risk & Compliance Services</h2>
                <p className="text-center break-normal p-10 w-1/2 ">The process of evaluating, identifying and managing risks associated with a business, and ensuring compliance with relevant regulations and standards</p>
            </div>  


            <div className="justify-center items-center flex flex-col">
                <h2 className="text-center text-5xl p-5 font-bold">Our Team</h2>
                <p className="text-center break-normal p-10 w-1/2 ">The process of evaluating, identifying and managing risks associated with a business, and ensuring compliance with relevant regulations and standards</p>
            </div>  

            <div className="flex justify-between mt-20 mb-20">
                <EmployeeCard image={man1} title="Managed Detection and Response" description="We take #1 breach prevention software, CrowdStrike, and couple it with 100% U.S. threat hunting and response services 24x7x365" link=""/>
                <EmployeeCard image={man1} title="Managed Detection and Response" description="We take #1 breacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaah prevention software, CrowdStrike, and couple it with 100% U.S. threat hunting and response services 24x7x365" link="Asd"/>
                <EmployeeCard image={man1} title="Managed Detection and Response" description="We take #1 breach prevention software, CrowdStrike, and couple it with 100% U.S. threat hunting and response services 24x7x365" link=""/>
                <EmployeeCard image={man1} title="Managed Detection and Response" description="We take #1 breach prevention software, CrowdStrike, and couple it with 100% U.S. threat hunting and response services 24x7x365" link=""/>
            </div>

            <Map />

            <Footer />
        </div>
    );
}

export default HomePage;