import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CheckoutForm = ({ orderTool }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [processing, setProcessing] = useState(false);

    const { _id, price, orderQuantity, userName, userEmail } = orderTool;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({ price, orderQuantity }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
    }, [orderQuantity, price]);

    // ==========================================
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        setCardError(error?.message || "");
        setSuccess(" ");
        setProcessing(true)

        // confirm card payment
        const { paymentIntent, error: intentError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: userEmail,
                    },
                },
            });

        if (intentError) {
            setProcessing(false);
            setCardError(intentError.message);
        }
        else {
            setCardError("");
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            toast.success("Payment Sent!");
            setSuccess("Congrats! Your payment is completed.");
            // =====Store payment on database========
            const payment = {
                orderId: _id,
                transactionId: paymentIntent.id
            }
            fetch(`http://localhost:5000/order/${_id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify(payment),

            }).then(res => res.json).then(data => {
                setProcessing(false)
                console.log(data);
            })
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button
                    className="btn btn-success m-10"
                    type="submit"
                    disabled={!stripe || !clientSecret}
                >
                    Pay
                </button>
            </form>
            {cardError && (
                <p className="text-red-500 text-base font-medium">{cardError}</p>
            )}
            {success && (
                <div>
                    <p className="text-green-500 text-base font-medium">{success}</p>
                    <p className=" text-base font-medium">
                        {transactionId && <p> Your Transaction id: <span className="text-orange-700">{transactionId}</span></p>}
                    </p>
                </div>
            )}
        </div>
    );
};

export default CheckoutForm;