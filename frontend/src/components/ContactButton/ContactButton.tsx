import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import React, { useRef, useState } from "react";


const ContactButton: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [showForm, setShowForm] = useState(false);
    const handleClick = () => {
        console.log("Get Started Now button clicked");
        setShowForm(!showForm);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = document.querySelector('#name')?.value;
        const email = document.querySelector('#email')?.value;
        const message = document.querySelector('#message')?.value;

        console.log(name, email, message)
        console.log("Form submitted");
        const response = await fetch('http://localhost:3000/contact-forms/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        const data = await response.json();
        console.log(data);
    }


    return (
        <>
            <button onClick={handleClick} className="bg-gradient-to-b from-[#034a22] to-[#095611] p-5 rounded-lg text-xl">Get Started Now</button>
            { showForm &&
                
                    <div className="flex flex-row justify-between fixed">
                        <form ref={formRef} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col translate-y-1/3 " onSubmit={handleSubmit}>
                        <div className="flex justify-end text-black">
                                <button onClick={handleClick} className="font-bold text-2xl">X</button>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email"/>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message" rows={parseInt("4")}></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

            }
        </>
    );
}

export default ContactButton;