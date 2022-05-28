import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery("reviews", () =>
        fetch("http://localhost:5000/review").then((res) => res.json())
    );
    if (isLoading) {
        <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-3xl font-bold text-indigo-600 py-10">Reviews</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 container-lg p-2">
                {
                    reviews?.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)

                }
            </div>
        </div>
    );
};


export default Reviews;