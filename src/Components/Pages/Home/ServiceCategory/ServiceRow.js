import React from 'react';

const ServiceRow = ({ service }) => {
    const { image, title } = service
    return (
        <div className="text-center rounded-3xl">
            <div className="rounded-2xl bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt={title} className='w-1/3 mx-auto' />
                </figure>
                <div className=" items-center text-center">
                    <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
                    <p className='text-sm font-medium pt-5 text-orange-600'>Description</p>

                    <div className="py-10">
                        <button className="btn bg-orange-600 border-0">See All</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceRow;