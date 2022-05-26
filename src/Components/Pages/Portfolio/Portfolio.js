import React from 'react';
import myImg from './sajidur.png';

const Portfolio = () => {
    return (
        <div>
            <h2 className="text-3xl text-indigo-500 text-center font-bold py-2">My Portfolio</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <img src={myImg} className="w-full rounded-lg shadow-2xl" alt='pic of sajid' />

                    </div>

                    <div>
                        <h1 className="text-5xl font-bold">Who Am I?</h1>
                        <p className="py-6 text-left">My Name is Sajidur Rahman. I am a fornt-end developer. I have completed my B.sc in Computer Science and Engineering from East West University, Dhaka, Bangldesh. I am a Javascript programmer. I am also at home in C++ and Java programming language .</p>
                        <p className="py-6 text-left">I am still learning Mearn Stack. I am also working with Node js.I design different types of Portfolio sites , Ecommerce sites, Business sites with Bootstrap-5 and Tailwind-4 . I am working with react js for Front-End devlopment . </p>
                        <div className='text-right'>
                            <h3 className="text-xl text-left text-rose-900  font-bold py-2">Sajidur Rahman</h3>
                            <h3 className="text-sm text-left text-indigo-900 font-base">sajidurrahmansahib@gmail.com</h3>
                            <h3 className="text-xl text-left text-cyan-900  font-bold py-2">Front-End Developer</h3>
                        </div>
                        <div className='text-left'>
                            <h3 className="text-2xl text-left font-bold py-2 uppercase">see my Project below</h3>
                            <a href='https://doctors-portal-65e34.web.app' target="_blank" className="link link-primary block" rel="noreferrer">Doctors-Portal</a>
                            <a href='https://gadget-master-c9a7a.firebaseapp.com/' target="_blank" className="link link-primary block" rel="noreferrer">Gadget-Master</a>
                            <a href='https://tech-ree.firebaseapp.com/' target="_blank" className="link link-primary block" rel="noreferrer">Tech-Ree</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;