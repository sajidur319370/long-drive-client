import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';

const ProfileUpdateModal = ({ setUpdatingProfile, refetch }) => {
    const [user] = useAuthState(auth);
    const email = user.email;
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
        const userInfo = {
            education: data.education,
            address: data.address,
            linkedin: data.linkedin,
            phone: data.phone
        }
        fetch(`https://hidden-bastion-67340.herokuapp.com/profile/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(userInfo)
        }).then(res => res.json())
            .then(info => {
                if (info.modifiedCount) {
                    toast.success("Your Profile is Updated");
                    setUpdatingProfile(null);
                    refetch();
                } else {
                    toast.error("Failed to update!!");
                }
            })

    }

    return (
        <div>
            <input type="checkbox" id="profile-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="profile-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit(onSubmit)} className="shadow-xl rounded-lg p-5">
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
                        <div className="form-control w-full max-w-xs">
                            <input
                                className="btn btn-primary border-0 bg-lime-500 uppercase text-white font-bold my-2"
                                type="submit"
                                value="Update"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileUpdateModal;