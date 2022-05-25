import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import ServiceCategory from '../ServiceCategory/ServiceCategory';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <ServiceCategory></ServiceCategory>
            <Contact></Contact>
        </div>
    );
};

export default Home;