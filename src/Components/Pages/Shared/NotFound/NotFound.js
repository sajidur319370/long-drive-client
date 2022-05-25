import React from 'react';

const NotFound = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
                <div className="card-actions justify-end">
                </div>
                <p className='text-2xl text-stone-800 font-semibold'>404</p>
                <p className='text-2xl text-stone-800 font-semibold'>Page is not Found</p>
            </div>
        </div>
    );
};

export default NotFound;