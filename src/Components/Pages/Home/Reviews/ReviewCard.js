import React from 'react';

const ReviewCard = ({ review }) => {
    const { comment, commenter, ratings } = review;
    return (

        <div className="card bg-stone-200 shadow-sm p-10">
            <p className='text-lg text-left font-medium text-orange-400'>{ratings} out of 5</p>
            <p className='text-left'>"{comment}"</p>
            <h2 className="text-sm font-medium text-slate-700 text-right">by <span className="text-md font-medium text-blue-900" >{commenter}</span></h2>
        </div>

    );
};

export default ReviewCard;