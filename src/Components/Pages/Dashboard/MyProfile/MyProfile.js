import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div>
            <h2 className="text-3xl text-indigo-500 text-center font-bold py-2">My Profile</h2>
            <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} alt="" />
                </div>
            </div>
            <h3 className="text-xl text-rose-900 text-center font-bold py-2">{user?.displayName}</h3>
            <h3 className="text-sm text-indigo-900 text-center font-base">{user?.email}</h3>
            <div className='flex justify-center items-center my-10'>
                <form onSubmit={handleSubmit(onSubmit)} className="text-center shadow-xl rounded-lg p-5">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Education</span>
                        </label>
                        <input
                            {...register("education", {
                                required: {
                                    value: true,
                                    message: "Education status is Required",
                                },
                            })}
                            type="text"
                            placeholder="Your Education status"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.education?.type === "required" && (
                                <span className="label-text-alt  text-red-500">
                                    {errors.education.message}
                                </span>
                            )}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: "Write your Location correctly",
                                },
                            })}
                            type="text"
                            placeholder="Your Address"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.address?.type === "required" && (
                                <span className="label-text-alt  text-red-500">
                                    {errors.address.message}
                                </span>
                            )}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">LinkedIn profile link</span>
                        </label>
                        <input
                            {...register("linkedin", {
                                required: {
                                    value: true,
                                    message: "LinkedIn profile is required",
                                },
                            })}
                            type="text"
                            placeholder="Your LinkedIn Profile Link"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.linkedin?.type === "required" && (
                                <span className="label-text-alt  text-red-500">
                                    {errors.linkedin.message}
                                </span>
                            )}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: "Phone number is Required",
                                },
                                pattern: {
                                    value: /^[0][1][0-9]{9}$/im,
                                    message:
                                        "Phone number must be  11 digits containing number (0-9). it starts with 01",
                                },
                            })}
                            placeholder="Phone"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.phone?.type === "required" && (
                                <span className="label-text-alt  text-red-500">
                                    {errors.phone.message}
                                </span>
                            )}
                            {errors.phone?.type === "pattern" && (
                                <span className="label-text-alt text-red-500">
                                    {errors.phone.message}
                                </span>
                            )}
                        </label>
                    </div>
                    <input
                        className="btn btn-primary border-0 bg-lime-500 uppercase text-white font-bold my-2"
                        type="submit"
                        value="Update"
                    />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;