import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const year = new Date();
    const currentYear = year.getFullYear();
    return (
        <footer className="p-10  text-indigo-600">

            <div className='footer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='mx-auto'>
                    <span className="footer-title">Services</span>
                    <Link to="" className="link link-hover">Branding</Link>
                    <Link to="" className="link link-hover">Design</Link>
                    <Link to="" className="link link-hover">Marketing</Link>
                    <Link to="" className="link link-hover">Advertisement</Link>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title">Company</span>
                    <Link to="" className="link link-hover">About us</Link>
                    <Link to="" className="link link-hover">Contact</Link>
                    <Link to="" className="link link-hover">Jobs</Link>
                    <Link to="" className="link link-hover">Press kit</Link>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title">Legal</span>
                    <Link to="" className="link link-hover">Terms of use</Link>
                    <Link to="" className="link link-hover">Privacy policy</Link>
                    <Link to="" className="link link-hover">Cookie policy</Link>
                </div>

            </div>
            <div className='text-center mt-20'>
                <p>Copyright&copy;{currentYear}- All right reserved by <span className="text-black">LONG</span>-<span className="text-orange-500">DRIVE</span> limited</p>
            </div>

        </footer>
    );
};

export default Footer;