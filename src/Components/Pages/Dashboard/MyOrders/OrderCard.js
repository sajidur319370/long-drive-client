import React from 'react';

const OrderCard = ({ order, setDeletingOrder }) => {
    const { orderId, orderName, price, orderQuantity } = order
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-amber-600">{orderName}</h2>
                    <p className='text-sm font-semibold text-slate-600'>ID:{orderId}</p>
                    <p className='text-sm font-semibold text-slate-600'>Price:{price}</p>
                    <p className='text-sm font-semibold text-slate-600'>Quantity:{orderQuantity}</p>
                    <p className='text-sm font-semibold text-slate-600'>Total Price:{parseInt(orderQuantity) * price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Pay Now</button>
                        <label htmlFor="delete-modal" onClick={() => setDeletingOrder(order)} className="btn modal-button btn-error">Delete</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OrderCard;