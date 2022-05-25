import React from 'react';
import Banner from '../Banner/Banner';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';
import ServiceCategory from '../ServiceCategory/ServiceCategory';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <ServiceCategory></ServiceCategory>
            <Reviews></Reviews>
            <BusinessSummery></BusinessSummery>
            <Contact></Contact>
        </div>
    );
};

export default Home;