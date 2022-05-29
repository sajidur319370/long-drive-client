import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';


const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        const reviewText = {
            comment: data.review,
            commenter: user.displayName,
            ratings: data.ratings
        }

        fetch('https://hidden-bastion-67340.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(reviewText)
        })
            .then(res => res.json())
            .then(comment => {
                if (comment.insertedId) {
                    toast.success("Comment is posted!!")
                }

            })
        reset();

    }



    return (
        <div >
            <h2 className="text-3xl text-cyan-400  font-bold py-2">Add Review</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="text-center">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Add Review</span>
                    </label>
                    <textarea
                        {...register("review", {
                            required: {
                                value: true,
                                message: "Please write something about our service."
                            },
                        })}
                        type="Text"
                        placeholder="Add Review"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                        {errors.review?.type === 'required' && <span className="label-text-alt  text-red-500">{errors.review.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Rate it now</span>
                    </label>
                    <input
                        {...register("ratings", {
                            required: {
                                value: true,
                                message: "Please input the minimum order quantity of the product ?",
                            },
                            min: {
                                value: 1,
                                message: "rating must be (1 - 5).",
                            },

                            max: {
                                value: 5,
                                message: "rating must be (1 - 5).",
                            },
                        })}
                        type="number"
                        placeholder="Rate it"
                        className="input input-bordered w-full max-w-xs"
                    />
                    <label className="label">
                        {errors.ratings?.type === "required" && (
                            <span className="label-text-alt  text-red-500">
                                {errors.ratings.message}
                            </span>
                        )}
                        {errors.ratings?.type === "min" && (
                            <span className="label-text-alt text-red-500">
                                {errors.ratings.message}
                            </span>
                        )}
                        {errors.ratings?.type === "max" && (
                            <span className="label-text-alt text-red-500">
                                {errors.ratings.message}
                            </span>
                        )}
                    </label>
                    <input className='btn btn-primary bg-gradient-to-r from-primary to-secondary uppercase text-white font-bold my-2' type="submit" value='Add' />
                </div>
            </form>
        </div>
    );
};

export default AddReview;