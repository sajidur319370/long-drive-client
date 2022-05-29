import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const PurchaseModal = ({ purchaseTool, setPurchaseTool }) => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const { _id, name, price, available_quantity, minimum_order_quantity } =
        purchaseTool;
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
        const order = {
            orderId: _id,
            orderName: name,
            price: price,
            orderQuantity: data.quantity,
            userName: data.username,
            userEmail: data.email,
            phone: data.phone,
        }
        fetch("http://localhost:5000/order", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(orderData => {
                toast.success("Order added successsfully!");
                setPurchaseTool(null);
            })
        navigate('/');
    };


    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                    <h2 className="font-bold text-xl text-blue-600">{name}</h2>
                    <h3 className="font-bold text-base text-red-900">Price:{price}</h3>
                    <h3 className="font-bold text-base text-lime-700">
                        Minimum Order Quantity:{minimum_order_quantity}
                    </h3>
                    <h3 className="font-bold text-base text-fuchsia-600">
                        Available Quantity:{available_quantity}
                    </h3>

                    <form onSubmit={handleSubmit(onSubmit)} className="text-center">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                {...register("username", {
                                    required: {
                                        value: true,
                                        message: "Name is Required",
                                    },
                                })}
                                value={user.displayName}
                                type="text"
                                placeholder="Type Your Name"
                                className="input input-bordered w-full max-w-xs"
                                readOnly
                            />
                            <label className="label">
                                {errors.username?.type === "required" && (
                                    <span className="label-text-alt  text-red-500">
                                        {errors.username.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required",
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: "Provide a valid Email", // JS only: <p>error message</p> TS only support string
                                    },
                                })}
                                value={user.email}
                                type="email"
                                placeholder="Type Your Email"
                                className="input input-bordered w-full max-w-xs"
                                readOnly
                            />
                            <label className="label">
                                {errors.email?.type === "required" && (
                                    <span className="label-text-alt  text-red-500">
                                        {errors.email.message}
                                    </span>
                                )}
                                {errors.email?.type === "pattern" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.email.message}
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
                            <label className="label">
                                <span className="label-text">Order Quantity</span>
                            </label>
                            <input
                                {...register("quantity", {
                                    required: {
                                        value: true,
                                        message: "How many product you want?",
                                    },
                                    min: {
                                        value: minimum_order_quantity,
                                        message: `Minimum order quantity must be  ${minimum_order_quantity} or up.`,
                                    },

                                    max: {
                                        value: available_quantity,
                                        message: `Maximum order quantity must be  ${available_quantity} or below.`,
                                    },
                                })}
                                type="number"
                                placeholder="Quantity"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.quantity?.type === "required" && (
                                    <span className="label-text-alt  text-red-500">
                                        {errors.quantity.message}
                                    </span>
                                )}
                                {errors.quantity?.type === "min" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.quantity.message}
                                    </span>
                                )}
                                {errors.quantity?.type === "max" && (
                                    <span className="label-text-alt text-red-500">
                                        {errors.quantity.message}
                                    </span>
                                )}
                            </label>
                        </div>
                        <input
                            className="btn btn-primary border-0 bg-lime-500 uppercase text-white font-bold my-2"
                            type="submit"
                            value="Order"
                        />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;
