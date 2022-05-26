import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const PUBLISHABLE_KEY = "pk_test_51L2eTHAfU2hrkvbzZY5OJ2gXQZoNeM0FR6dXlyqcA1iavrDeTwq3qyQSV9WfEPWg6534xTSH2Z1r4RW5zR7iTcq700qzIONnbR";

const Payment = () => {
    const [stripePromise, setStripePromise] = useState(() => loadStripe(PUBLISHABLE_KEY));
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;

    const { data: orderTool, isLoading } = useQuery(["order", id], () =>
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <h2 className="text-3xl text-indigo-500 text-center font-bold py-2">Hello,{user?.displayName}</h2>
            <div className="card bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <h2 className="text-xl text-rose-900 text-center font-bold py-2">PLEASE PAY FOR: {id}</h2>
                    <h2 className="text-xl text-indigo-500 text-center font-bold py-2">{orderTool?.orderName}</h2>
                    <h2 className="text-xl text-orange-500 text-center font-bold py-2">Total bill: ${orderTool.price * parseInt(orderTool.orderQuantity)}.00</h2>
                    <div className="card w-72 mx-auto bg-orange-100 shadow-xl my-10 p-5">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm orderTool={orderTool} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;