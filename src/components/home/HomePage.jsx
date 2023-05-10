import React from "react";
import { useNavigate } from "react-router-dom";



const HomePage = () => {

    const navigate = useNavigate();

    const startConversation = () => {
        navigate("/Messages");
    };

    return (
        <div className="flex h-screen flex-col pt-5">
            <div className=" mx-auto flex border-b-2">
                <h1 className="pb-2 text-3xl ">Home</h1>
            </div>
            <div className="mx-auto text-center my-16">
                <h2 className="pb-2 text-2xl ">Welcome!</h2>
                <p className="pb-2 text-md">Click on start conversation to find a discussion</p>
            </div>
            <div className="mx-auto text-center my-16">
                <h2 className="pb-2 text-2xl ">Important Information</h2>
                <p className="pb-2 text-md ">Clicking on start conversation will pair you with a peer at your university</p>
                <p className="pb-2 text-md ">All information posted to the global board will be public</p>
            </div>
            <div className="mx-auto my-16">
                <h2 className="pb-2 text-2xl text-center">FAQs</h2>
                <p className="pb-2 text-md ">Q: Will my conversations be kept if I logout?</p>
                <p className="pb-2 text-md ">A: Yes, your conversations will be kept</p>
            </div>

            {/* Create large button that says start conversation centered on page */}
            <div className="mx-auto flex">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={startConversation}>
                    Start Conversation
                </button>
            </div>
        </div>
    );
};

export default HomePage;