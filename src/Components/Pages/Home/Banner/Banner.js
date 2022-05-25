import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import banner1 from "../../../assets/images/banner1.jpg";
import banner2 from "../../../assets/images/banner2.jpg";
import banner3 from "../../../assets/images/banner3.jpg";

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} alt="" className="w-full" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h2 className="text-white lg:text-5xl md:text-xl font-extrabold text-sm">Excellence in Necessary</h2>
                        <p className="text-white lg:text-4xl md:text-lg font-medium text-xs" >Stay Happy With Long Drive</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">
                            <ChevronLeftIcon></ChevronLeftIcon>
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                            <ChevronRightIcon></ChevronRightIcon>
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} alt="" className="w-full" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h2 className="text-white lg:text-5xl md:text-xl font-extrabold text-sm">Excellence in Necessary</h2>
                        <p className="text-white lg:text-4xl md:text-lg font-medium text-xs" >Stay Happy With Long Drive</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                        <a href="#slide1" className="btn btn-circle">
                            <ChevronLeftIcon></ChevronLeftIcon>
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                            <ChevronRightIcon></ChevronRightIcon>
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} alt="" className="w-full" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h2 className="text-white lg:text-5xl md:text-xl font-extrabold text-sm">Excellence in Necessary</h2>
                        <p className="text-white lg:text-4xl md:text-lg font-medium text-xs" >Stay Happy With Long Drive</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">
                            <ChevronLeftIcon></ChevronLeftIcon>
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                            <ChevronRightIcon></ChevronRightIcon>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
