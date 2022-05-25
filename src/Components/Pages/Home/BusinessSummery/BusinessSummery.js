import {
    CogIcon,
    EmojiHappyIcon,
    HandIcon,
    LocationMarkerIcon,
} from "@heroicons/react/solid";
import React from "react";

const BusinessSummery = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-indigo-600 py-10">
                Business Summery
            </h2>
            <div className="shadow grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                <div className="text-center shadow-2xl p-10">
                    <p className="font-bold text-gray-800">Countries</p>
                    <h2 className="text-5xl font-extrabold text-primary">31</h2>
                    <div className="text-primary w-20 mx-auto">
                        <LocationMarkerIcon></LocationMarkerIcon>200(15%)
                    </div>
                </div>

                <div className="text-center shadow-2xl p-10">
                    <p className=" font-bold text-gray-800">Repaired Work</p>
                    <h2 className="text-5xl font-extrabold text-secondary">4,200</h2>
                    <div className="text-secondary w-20 mx-auto">
                        <CogIcon></CogIcon>40 (2%)
                    </div>
                </div>

                <div className="text-center shadow-2xl p-10">
                    <p className="font-bold text-gray-800">Satisfied Customer</p>
                    <h2 className="text-5xl font-extrabold text-info">1,200</h2>
                    <div className="text-info w-20 mx-auto">
                        <EmojiHappyIcon></EmojiHappyIcon> 90 (14%)
                    </div>
                </div>

                <div className="text-center shadow-2xl p-10">
                    <p className=" font-bold text-gray-800">New Customer</p>
                    <h2 className="text-5xl font-extrabold text-success">1,200</h2>
                    <div className=" text-success w-20 mx-auto">
                        <HandIcon></HandIcon> 90 (14%)
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BusinessSummery;
