import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SquareContainer from "../components/SquareContainer/SquareContainer";


const HomePage: React.FC = () => {

    return (
        <div>
            <Header />
            <div className="justify-center items-center flex flex-col">
                <h1 className="text-center text-8xl p-5 ">Cyber Security Services</h1>
                <p className="text-center break-normal p-10 w-1/2 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nulla eveniet necessitatibus laudantium, nam aut quaerat ipsum eum adipisci, dolorem ex doloribus incidunt molestias quia deleniti veritatis non rem fugit.</p>
                <button className="bg-gradient-to-r from-[#034a22] to-[#f63238] p-2 rounded-lg">Get Started Now</button>
            </div>

            <SquareContainer />

            <Footer />
        </div>
    );
}

export default HomePage;