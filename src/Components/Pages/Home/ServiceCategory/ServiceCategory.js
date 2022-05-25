import React from 'react';
import ServiceRow from './ServiceRow';

const ServiceCategory = () => {
    const services = [
        {
            id: 1,
            title: 'Lights',
            image: 'https://i.ibb.co/34DmS8m/light.jpg'



        },
        {
            id: 2,
            title: 'Wheels',
            image: 'https://i.ibb.co/Y8sS2GF/wheel.jpg'

        },
        {
            id: 3,
            title: 'Tires',
            image: ' https://i.ibb.co/gztwLkj/tire.jpg'

        }
    ]
    return (
        <div className="my-20">
            <h2 className="text-3xl text-indigo-500 text-center font-bold py-2">Tools Category</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 container-lg">
                {services?.map((service) => (
                    <ServiceRow key={service.id} service={service}></ServiceRow>
                ))}
            </div>
        </div>
    );
};

export default ServiceCategory;